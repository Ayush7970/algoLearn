from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS)

# Get API Key from .env
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Use OpenAI's new client-based API (since `openai>=1.0.0`)
client = openai.OpenAI(api_key=OPENAI_API_KEY)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    if not OPENAI_API_KEY:
        return jsonify({"error": "Missing OpenAI API Key"}), 500

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful AI tutor."},
                {"role": "user", "content": user_message}
            ],
            max_tokens=150
        )

        return jsonify({"reply": response.choices[0].message.content})

    except openai.OpenAIError as e:  # ✅ FIXED ERROR HANDLING
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

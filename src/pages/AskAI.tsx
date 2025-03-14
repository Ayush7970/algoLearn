import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const AskAI = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your AI tutor. Ask me anything about algorithms and data structures!"
    }
  ]);
  const [loading, setLoading] = useState(false); // State to handle loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
  
    setMessages(prev => [...prev, { type: 'user', content: message }]);
    setLoading(true);
  
    try {
      console.log("📡 Sending message to Flask API:", message);
      const response = await fetch('http://127.0.0.1:5001/api/chat', {  // ✅ Direct Flask API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("✅ API Response:", data);
  
      if (data.reply) {
        setMessages(prev => [...prev, { type: 'bot', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', content: 'Error: No response from AI.' }]);
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      setMessages(prev => [...prev, { type: 'bot', content: 'Error: Unable to connect to AI.' }]);
    }
  
    setMessage('');
    setLoading(false);
  };
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card min-h-[600px] flex flex-col">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <MessageSquare className="w-8 h-8 mr-2 text-[var(--primary-100)]" />
          Ask AI Assistant
        </h1>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-lg ${msg.type === 'user' ? 'bg-[var(--primary-100)] text-white' : 'bg-[var(--bg-200)]'}`}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 rounded-lg bg-[var(--bg-200)]">
                Typing...
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your question..."
            className="flex-1 p-3 rounded-lg border border-[var(--bg-300)] focus:outline-none focus:border-[var(--primary-100)]"
          />
          <button type="submit" className="btn-primary flex items-center" disabled={loading}>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskAI;

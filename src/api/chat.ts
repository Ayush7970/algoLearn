import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    console.log("🔑 API Key Loaded:", import.meta.env.VITE_OPENAI_API_KEY ? "YES" : "NO");

    if (!import.meta.env.VITE_OPENAI_API_KEY) {
        return res.status(500).json({ error: "Server error: Missing OpenAI API key" });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,  // ✅ FIXED HERE
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'system', content: 'You are a helpful AI tutor.' }, { role: 'user', content: req.body.message }],
                max_tokens: 150,
            }),
        });

        const data = await response.json();
        res.status(200).json({ reply: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch response from OpenAI API" });
    }
}

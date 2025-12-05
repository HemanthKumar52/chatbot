export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, useAI } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // If AI is disabled, return null (client will use local responses)
        if (!useAI) {
            return res.status(200).json({ aiResponse: null });
        }

        // Call DeepSeek API
        const deepseekResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: `You are a helpful assistant for BGS International School. Here's the school information:
                        - Founder: Shri. P. Sekar
                        - Chairman: S. Sundar
                        - Academic Director: Mr. John Lawrence
                        - Finance & Media Director: S. Padma
                        - Principal: Mr. Venkatesan
                        - English HOD: Mr. Giri
                        - Established: 1980 (44 years running)
                        
                        Answer questions about the school accurately and professionally. If asked about specific people or facts, use this information.`
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: 2000,
                temperature: 0.7
            })
        });

        if (!deepseekResponse.ok) {
            throw new Error(`DeepSeek API error: ${deepseekResponse.status}`);
        }

        const data = await deepseekResponse.json();
        const aiResponse = data.choices?.[0]?.message?.content || null;

        res.status(200).json({ aiResponse });

    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ 
            error: 'Failed to get AI response',
            message: error.message 
        });
    }
}

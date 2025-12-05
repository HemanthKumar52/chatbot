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
        const { message, useAI, context } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        if (!useAI) {
            return res.status(200).json({ aiResponse: null });
        }

        // Build system message with school context and user designation
        let systemMessage = `You are a helpful AI assistant for Bharathidasanar Group of School (BGS), an Indian educational institution in Chennai, Tamil Nadu.

School Information:
- Founder: Shri. P. Sekar
- Chairman: S. Sundar
- Academic Director: Mr. John Lawrence
- Finance & Media Director: S. Padma
- Principal: Mr. Venkatesan
- English HOD: Mr. Giri
- Established: 1980 (44 years running)
- Curriculum: CBSE
- Classes: Pre-KG to Class 12
- Languages: English, Tamil, Hindi, Sanskrit

Cultural Context:
- Use Indian educational terminology (Class instead of Grade, TC instead of Transfer Certificate)
- Currency in Indian Rupees (₹)
- Indian festivals and holidays
- Respect for traditional Indian values and culture
- Use respectful greetings like "Vanakkam" when appropriate

Guidelines:
1. Provide accurate, helpful information about the school
2. Be respectful and professional
3. For academic help, guide students but don't give direct answers
4. Respect Indian cultural values and educational system
5. If asked about topics outside school scope, politely redirect`;

        // Add user designation context if available
        if (context?.userDesignation) {
            systemMessage += `\n\nUser Context:
- Designation: ${context.userDesignation}
- Name: ${context.userName || 'Not provided'}

Tailor your responses based on the user's designation:
- Students: Focus on learning, study tips, exams, activities
- Parents: Focus on admissions, fees, policies, child's progress
- Teachers: Focus on academic matters, policies, resources
- Visitors: Focus on school tour, admissions, facilities`;
        }

        // Build messages array with conversation history
        const messages = [
            {
                role: 'system',
                content: systemMessage
            }
        ];

        // Add recent conversation history for context
        if (context?.conversationHistory && context.conversationHistory.length > 0) {
            messages.push(...context.conversationHistory);
        }

        // Add current message
        messages.push({
            role: 'user',
            content: message
        });

        // Call DeepSeek API
        const deepseekResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: messages,
                max_tokens: 2000,
                temperature: 0.7,
                top_p: 0.95
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

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// School database (same as frontend)
const SCHOOL_DATA = {
    // ... (same SCHOOL_DATA object as in script.js)
    // Copy the entire SCHOOL_DATA object here from script.js
};

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// API endpoint for chat
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    
    // Simulate processing delay
    setTimeout(() => {
        const response = getAIResponse(message);
        res.json({
            response: response,
            timestamp: new Date().toISOString(),
            success: true
        });
    }, 800);
});

// API endpoint for school info
app.get('/api/school/info', (req, res) => {
    res.json({
        name: SCHOOL_DATA.name,
        contact: SCHOOL_DATA.contact,
        hours: SCHOOL_DATA.hours,
        success: true
    });
});

// API endpoint for specific info
app.get('/api/school/:type', (req, res) => {
    const type = req.params.type;
    let data = {};
    
    switch(type) {
        case 'hours':
            data = SCHOOL_DATA.hours;
            break;
        case 'contact':
            data = SCHOOL_DATA.contact;
            break;
        case 'admissions':
            data = SCHOOL_DATA.admissions;
            break;
        case 'fees':
            data = SCHOOL_DATA.fees;
            break;
        case 'calendar':
            data = SCHOOL_DATA.calendar;
            break;
        default:
            return res.status(404).json({ error: 'Information not found' });
    }
    
    res.json({ data, success: true });
});

// Function to get response (same logic as frontend)
function getAIResponse(message) {
    const query = message.toLowerCase().trim();
    
    // Simplified response logic
    // You can copy the entire getResponse function from script.js here
    if (query.includes('hello') || query.includes('hi')) {
        return `Hello! Welcome to ${SCHOOL_DATA.name}. How can I help you?`;
    }
    
    if (query.includes('hour')) {
        return `School hours: ${SCHOOL_DATA.hours.regular}`;
    }
    
    if (query.includes('contact')) {
        return `Phone: ${SCHOOL_DATA.contact.phone}\nEmail: ${SCHOOL_DATA.contact.email}`;
    }
    
    return "I can help with school information. Ask about hours, admissions, fees, etc.";
}

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📚 School Chatbot is ready!`);
});
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Handle API requests to AI (Gemini)
    if (req.url === '/api/chat' && req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', async () => {
            try {
                const { message } = JSON.parse(body);
                
                // Gemini API Key
                const API_KEY = 'AIzaSyAfjNK0JgYv6SnX5u7n67X_IwI_Mb1YvhQ'; 
                
                // Make request to Google Gemini API
                // Using gemini-2.0-flash which is available for this key
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `You are a helpful assistant for BGS International School. Answer questions about the school accurately and professionally.
                                
                                User Question: ${message}`
                            }]
                        }]
                    })
                });

                const data = await response.json();
                
                // Extract text from Gemini response
                let aiText = "I apologize, but I couldn't generate a response at the moment.";
                
                if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                    aiText = data.candidates[0].content.parts[0].text;
                } else if (data.error) {
                    console.error('Gemini API Error:', JSON.stringify(data.error, null, 2));
                    aiText = `API Error: ${data.error.message}`;
                }
                
                res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                
                // Send back in the format script.js expects
                res.end(JSON.stringify({ aiResponse: aiText }));
                
            } catch (error) {
                console.error('Server Error:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
            }
        });
        return;
    }
    
    // Serve static files
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            // If file not found in root, try looking in public folder
            if (error.code === 'ENOENT') {
                const publicPath = path.join(__dirname, 'public', req.url);
                fs.readFile(publicPath, (err, publicContent) => {
                    if (err) {
                        // If still not found, return 404
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
                    } else {
                        // Found in public folder
                        res.writeHead(200, { 'Content-Type': contentType });
                        res.end(publicContent, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}/`);
    console.log(`📚 BGS International School Chatbot`);
    console.log(`\n✅ Open your browser and visit: http://localhost:${PORT}\n`);
});

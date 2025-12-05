const https = require('https');

const API_KEY = 'AIzaSyAfjNK0JgYv6SnX5u7n67X_IwI_Mb1YvhQ';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

console.log('Testing Gemini API Key...');
console.log('Fetching available models...');

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.error) {
                console.error('API Error:', json.error.message);
            } else if (json.models) {
                console.log('\n✅ API Key is Valid! Available Models:');
                console.log('----------------------------------------');
                json.models.forEach(model => {
                    if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes('generateContent')) {
                        console.log(`- ${model.name.replace('models/', '')}`);
                    }
                });
                console.log('----------------------------------------');
            } else {
                console.log('Unexpected response:', json);
            }
        } catch (e) {
            console.error('Failed to parse response:', e);
            console.log('Raw response:', data);
        }
    });

}).on('error', (err) => {
    console.error('Network Error:', err.message);
});

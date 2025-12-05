const https = require('https');
const fs = require('fs');

const API_KEY = 'AIzaSyAfjNK0JgYv6SnX5u7n67X_IwI_Mb1YvhQ';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

console.log('Fetching models...');

https.get(url, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        fs.writeFileSync('gemini-models.json', data); // Save raw JSON
        console.log('Saved to gemini-models.json');
        
        try {
            const json = JSON.parse(data);
            const names = json.models.map(m => m.name);
            fs.writeFileSync('gemini-models.txt', names.join('\n'));
            console.log('Saved list to gemini-models.txt');
        } catch(e) { console.error(e); }
    });
});

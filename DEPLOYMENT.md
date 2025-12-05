# Deploying BGS Chatbot to Vercel

## Your GitHub Repository
🔗 https://github.com/HemanthKumar52/chatbot.git

## Quick Deploy Steps

### Step 1: Push Your Code to GitHub

```bash
# Navigate to your project
cd "c:\Users\venka\Downloads\Chat Bot"

# Initialize git (if not already done)
git init

# Add your remote
git remote add origin https://github.com/HemanthKumar52/chatbot.git

# Add all files
git add .

# Commit
git commit -m "Deploy BGS School Chatbot with Vercel support"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to:** https://vercel.com/login
2. **Sign up/Login** with GitHub
3. Click **"Add New..."** → **"Project"**
4. **Import** your repository: `HemanthKumar52/chatbot`
5. **Configure Project:**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

6. **Add Environment Variable:**
   - Click **"Environment Variables"**
   - Name: `DEEPSEEK_API_KEY`
   - Value: `sk-ec9b722ae8eb4e4e8bc83380401ad5b6`
   - Select: ✅ Production, ✅ Preview, ✅ Development

7. Click **"Deploy"** 🚀

### Step 3: Wait for Deployment
- Takes 1-2 minutes
- You'll get a URL like: `https://chatbot-xxx.vercel.app`

## Enable AI Features (Optional)

To use DeepSeek AI responses, update `script.js`:

```javascript
const CONFIG = {
    useAI: true, // Change from false to true
    apiEndpoint: '/api/chat'
};
```

Then push changes:
```bash
git add script.js
git commit -m "Enable AI features"
git push
```

Vercel will auto-redeploy! ✨

## Your Live Site

After deployment, your chatbot will be accessible at:
- **Production:** `https://chatbot-hemanthkumar52.vercel.app` (or similar)
- **Custom Domain:** You can add your own domain in Vercel settings

## Update Your Site Anytime

```bash
# Make your changes to files
# Then:
git add .
git commit -m "Description of changes"
git push
```

Vercel automatically redeploys on every push! 🎉

## Verify Deployment

1. Visit your Vercel URL
2. Test these questions:
   - "Who is the founder of BGS?"
   - "Who is the chairman?"
   - "Who is the principal?"
   - "How many years has the school been running?"

## Troubleshooting

### If deployment fails:
- Check all files are committed: `git status`
- Verify `vercel.json` exists in root
- Check Vercel build logs

### If API doesn't work:
- Verify environment variable in Vercel dashboard
- Check browser console for errors
- Ensure `/api/chat.js` file exists

### Need to redeploy:
```bash
# In Vercel dashboard:
# Deployments → Latest → ... → Redeploy
```

## Commands Cheat Sheet

```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "Your message"

# Push to GitHub (triggers Vercel deploy)
git push

# View remote
git remote -v

# Pull latest
git pull
```

## Resources

- 📚 [Vercel Docs](https://vercel.com/docs)
- 🐙 [Your GitHub Repo](https://github.com/HemanthKumar52/chatbot)
- 🚀 [Vercel Dashboard](https://vercel.com/dashboard)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Connect GitHub to Vercel
3. ✅ Add environment variables
4. ✅ Deploy!
5. 🎉 Share your live chatbot URL!

---

**Your Vercel Project:** Once deployed, bookmark your Vercel project URL!

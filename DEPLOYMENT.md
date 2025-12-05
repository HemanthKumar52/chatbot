# Deploying BGS Chatbot to Vercel

## Prerequisites
1. [Vercel Account](https://vercel.com/signup) (Free)
2. [Git](https://git-scm.com/downloads) installed
3. [GitHub Account](https://github.com/signup) (Free)

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Prepare Your Project
```bash
# Navigate to your project folder
cd "c:\Users\venka\Downloads\Chat Bot"

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - BGS Chatbot"
```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new)
2. Name it: `bgs-school-chatbot`
3. Run these commands:
```bash
git remote add origin https://github.com/YOUR_USERNAME/bgs-school-chatbot.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `bgs-school-chatbot`
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)

### Step 4: Add Environment Variables
In Vercel project settings:
1. Go to **Settings** → **Environment Variables**
2. Add:
   - Name: `DEEPSEEK_API_KEY`
   - Value: `sk-ec9b722ae8eb4e4e8bc83380401ad5b6`
   - Environment: Production, Preview, Development

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes
3. Your site is live! 🎉

## Method 2: Deploy via Vercel CLI

### Install Vercel CLI
```bash
npm i -g vercel
```

### Deploy
```bash
# Navigate to project
cd "c:\Users\venka\Downloads\Chat Bot"

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? bgs-school-chatbot
# - Directory? ./
# - Override settings? No

# Add environment variable
vercel env add DEEPSEEK_API_KEY

# Production deployment
vercel --prod
```

## Enable AI Features (Optional)

In `script.js`, change:
```javascript
const CONFIG = {
    useAI: true, // Enable DeepSeek AI
    apiEndpoint: '/api/chat'
};
```

Then commit and push:
```bash
git add script.js
git commit -m "Enable AI features"
git push
```

Vercel will auto-deploy!

## Your Live URLs

After deployment, you'll get:
- **Production:** `https://bgs-school-chatbot.vercel.app`
- **Preview:** `https://bgs-school-chatbot-git-main-username.vercel.app`

## Updating Your Site

Any time you make changes:
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel automatically redeploys! ✨

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed

## Troubleshooting

### Build fails?
- Check `vercel.json` is in root directory
- Ensure all files are committed to git

### API not working?
- Verify environment variable is set in Vercel
- Check `/api/chat.js` exists
- View logs in Vercel dashboard

### 404 errors?
- Clear Vercel cache: Settings → General → Clear Cache
- Redeploy

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

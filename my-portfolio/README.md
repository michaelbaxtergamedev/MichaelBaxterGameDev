# 🎮 Game Dev Portfolio

A sleek, dark-themed game development portfolio website.

## Quick Setup

1. **Fork or clone** this repository
2. **Edit `config.js`** — change your name, projects, skills, etc.
3. **Add images** to the `assets/images/` folder
4. **Push to GitHub**
5. **Connect to Vercel** — it auto-deploys!

## How to Edit

Open `config.js` and update the fields:
- `name`, `title`, `tagline` — Your intro
- `aboutMe` — A paragraph about yourself
- `skills` — List of skills with proficiency levels (0-100)
- `projects` — Your games and projects
- `experience` — Jobs, game jams, education
- `socials` — Your social media links
- `colors` — Theme colors

**That's it!** No other files need to be edited.

## Deploying to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repo
4. Click "Deploy"
5. Done! Your site is live.

## Adding a Project

In `config.js`, add a new entry in the `projects` array:

\```javascript
{
  title: "My New Game",
  description: "A fun game I made.",
  image: "assets/images/my-game.jpg",
  tags: ["Unity", "C#"],
  liveLink: "https://my-game.itch.io",
  codeLink: "https://github.com/me/my-game",
  videoLink: "",
},
\```

## Image Tips
- Profile photo: Square, at least 300x300px
- Project images: 16:9 ratio, at least 640x360px
- Supported formats: JPG, PNG, WebP
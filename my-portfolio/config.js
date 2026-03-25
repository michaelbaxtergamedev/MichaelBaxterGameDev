const CONFIG = {

  // ===== PERSONAL INFO =====
  name: "Michael Baxter",
  title: "Game Developer",
  tagline: "I create immersive gaming experiences.",
  profileImage: "assets/images/profile.jpg", // Put your photo in assets/images/
  resumeLink: "#", // Link to your resume (Google Drive, Dropbox, etc.)

  // ===== ABOUT ME =====
  aboutMe: `
    Hi! I'm a passionate game developer with experience in Unity and Unreal Engine.
    I love creating fun, engaging experiences for players. I specialize in gameplay 
    programming, level design, and game mechanics.
  `,

  // ===== SKILLS =====
  // Add or remove skills freely
  skills: [
    { name: "Unity", level: 90 },
    { name: "Unreal Engine", level: 75 },
    { name: "C#", level: 85 },
    { name: "C++", level: 70 },
    { name: "Blender", level: 60 },
    { name: "Pixel Art", level: 65 },
    { name: "Game Design", level: 80 },
    { name: "Level Design", level: 75 },
  ],

  // ===== PROJECTS =====
  // Add as many projects as you want by copying the {} block
  projects: [
    {
      title: "Space Explorer",
      description: "A 3D space exploration game built in Unity with procedural generation.",
      image: "assets/images/project1.jpg",
      tags: ["Unity", "C#", "3D"],
      liveLink: "https://yourgame.itch.io/space-explorer",
      codeLink: "https://github.com/yourusername/space-explorer",
      videoLink: "", // YouTube/Vimeo embed link (leave empty if none)
    },
    {
      title: "Dungeon Crawler",
      description: "A roguelike dungeon crawler with pixel art aesthetics.",
      image: "assets/images/project2.jpg",
      tags: ["Godot", "GDScript", "2D", "Pixel Art"],
      liveLink: "https://yourgame.itch.io/dungeon-crawler",
      codeLink: "https://github.com/yourusername/dungeon-crawler",
      videoLink: "https://www.youtube.com/embed/your-video-id",
    },
    {
      title: "Puzzle Kingdom",
      description: "A mobile puzzle game with 50+ handcrafted levels.",
      image: "assets/images/project3.jpg",
      tags: ["Unity", "C#", "Mobile", "Puzzle"],
      liveLink: "",
      codeLink: "",
      videoLink: "",
    },
  ],

  // ===== EXPERIENCE / GAME JAMS =====
  experience: [
    {
      role: "Game Developer",
      company: "Indie Studio XYZ",
      period: "2023 - Present",
      description: "Developing gameplay systems and UI for a multiplayer action game.",
    },
    {
      role: "Ludum Dare 54 Participant",
      company: "Game Jam",
      period: "October 2023",
      description: "Built a complete game in 48 hours. Ranked top 100 in Fun category.",
    },
    {
      role: "Freelance Game Developer",
      company: "Self-Employed",
      period: "2021 - 2023",
      description: "Created prototypes and small games for clients on various platforms.",
    },
  ],

  // ===== SOCIAL LINKS =====
  // Leave any link empty ("") to hide that icon
  socials: {
    github: "https://github.com/yourusername",
    itchio: "https://yourusername.itch.io",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    youtube: "https://youtube.com/@yourusername",
    email: "your.email@example.com",
  },

  // ===== THEME COLORS =====
  // Change these to customize your site's look
  colors: {
    primary: "#6c5ce7",     // Main accent color (buttons, highlights)
    secondary: "#00cec9",   // Secondary accent
    background: "#0a0a0f",  // Page background
    cardBg: "#15151f",      // Card/section background
    text: "#e0e0e0",        // Main text color
    heading: "#ffffff",     // Heading text color
  },
};
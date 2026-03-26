const CONFIG = {

  // ===== PERSONAL INFO =====
  name: "Michael Baxter",
  title: "Game Developer",
  tagline: "I create immersive gaming experiences.",
  profileImage: "assets/images/ProfilePicture.png", // Put your photo in assets/images/
  resumeLink: "#", // Link to your resume (Google Drive, Dropbox, etc.)

  // ===== ABOUT ME =====
  aboutMe: `
    Hi! I'm a passionate game developer Specializing in Unreal Engine 5.
    I love creating fun, engaging experiences for players. I specialize in gameplay 
    programming, level design, and game mechanics.
  `,

  // ===== SKILLS =====
  // Add or remove skills freely
  skills: [
    { name: "Unreal Engine", level: 80 },
    { name: "C++", level: 40 },
    { name: "3Ds MAX", level: 60 },
    { name: "Pixel Art", level: 65 },
    { name: "Game Design", level: 80 },
    { name: "Level Design", level: 75 },
  ],

  // ===== PROJECTS =====
  // Add as many projects as you want by copying the {} block
  projects: [
    {
      title: "Caves of The Dweller",
      description: "A VR Dungeon Crawler with procedural Generation and Deck Building made in Unreal Engine",
      image: "assets/images/project1.jpg",
      tags: ["UE5", "VR", "Procedural", "Blueprints"],
      liveLink: "https://michaelbaxtergamedev.itch.io/caves-of-the-dweller",
      codeLink: "", // github or link to open code project files
      videoLink: "", // YouTube/Vimeo embed link (leave empty if none)
    },
    {
      title: "Niagara VFX Gallery",
      description: "A collection of the VFX I have made using UE5 Niagara System.",
      image: "assets/images/project2.jpg",
      tags: ["UE5", "VFX", "Niagara"],
      liveLink: "",
      codeLink: "",
      videoLink: "",
    }
  ],

  // ===== EXPERIENCE / GAME JAMS =====
  experience: [
    {
      role: "Student",
      company: "Canadore College",
      period: "2023 - Present",
      description: "Taking the 3 year Game Design & Development Advanced Diploma.",
    },
    {
      role: "Game Design & Development Tech",
      company: "Canadore Colege - Game Design & Development",
      period: "November 2025 - Present",
      description: "Maintain the technology in the Game Design Classroom at Canadore, assisted students with their coursework.",
    },
    {
      role: "Game Design Club VP",
      company: "Canadore College",
      period: "2025 - Present",
      description: "Create a fun, educational environment for all students across the campus to learn and collaborate on making games from Board games - Video Games",
    },
  ],

  // ===== SOCIAL LINKS =====
  // Leave any link empty ("") to hide that icon
  socials: {
    github: "",
    itchio: "https://michaelbaxtergamedev.itch.io",
    linkedin: "www.linkedin.com/in/michael-baxter-game-dev",
    twitter: "",
    youtube: "https://www.youtube.com/@MichaelBaxter-GameDev",
    email: "michaelbaxter.gamedev@gmail.com",
  },

  // ===== THEME COLORS =====
  // Change these to customize your site's look
  colors: {
    primary: "#1a3f22",     // Main accent color (buttons, highlights)
    secondary: "#58761b",   // Secondary accent
    background: "#d99201",  // Page background
    cardBg: "#656d4a",      // Card/section background
    text: "#e0e0e0",        // Main text color
    heading: "#ffffff",     // Heading text color
  },
};

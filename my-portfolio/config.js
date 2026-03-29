const CONFIG = {

  // ===== PERSONAL INFO =====
  name: "Your Name",
  title: "Game Developer",
  tagline: "I create immersive gaming experiences.",
  profileImage: "assets/images/profile.png",
  resumeLink: "#",

  // ===== ABOUT ME =====
  aboutMe: `
    Hi! I'm a passionate game developer with experience in Unity and Unreal Engine.
    I love creating fun, engaging experiences for players.
  `,

  // ===== SKILLS =====
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
  projects: [
    {
      // --- Card Info (shows on main page) ---
      title: "Space Explorer",
      description: "A 3D space exploration game built in Unity with procedural generation.",
      image: "assets/images/project1.jpg",
      tags: ["Unity", "C#", "3D"],

      // --- Sidebar Links (shows on project page) ---
      // Leave any link empty ("") to hide it
      sidebar: {
        playLink: "https://yourgame.itch.io/space-explorer",
        playLabel: "Play on Itch.io",           // Custom button text
        codeLink: "https://github.com/yourusername/space-explorer",
        codeLabel: "View Source Code",
        extraLinks: [
          // Add as many extra links as you want
          { label: "Steam Page", url: "https://store.steampowered.com", icon: "fab fa-steam" },
          { label: "Dev Blog", url: "https://yourblog.com", icon: "fas fa-blog" },
        ],
        // Quick info displayed in sidebar
        info: [
          { label: "Engine", value: "Unity 2022.3" },
          { label: "Platform", value: "PC, WebGL" },
          { label: "Team Size", value: "Solo" },
          { label: "Duration", value: "3 months" },
          { label: "Status", value: "Released" },
        ],
      },

      // --- Blog Content (shows on project page) ---
      // Add blocks in the order you want them to appear
      // Types: "text", "heading", "image", "video", "gallery"
      content: [
        {
          type: "heading",
          text: "About This Project",
        },
        {
          type: "text",
          text: `Space Explorer is a 3D space exploration game where players pilot 
          a ship through procedurally generated galaxies. The game features realistic 
          physics, resource management, and a dynamic economy system. I built this 
          project over 3 months as a solo developer using Unity.`,
        },
        {
          type: "image",
          src: "assets/images/space-explorer-screenshot1.jpg",
          caption: "Exploring a newly discovered planet",
        },
        {
          type: "heading",
          text: "Development Process",
        },
        {
          type: "text",
          text: `The biggest challenge was implementing the procedural generation system.
          I used a combination of Perlin noise and wave function collapse to create 
          planets that feel unique but still natural. Each planet has its own biome, 
          resources, and environmental hazards.`,
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/your-video-id",
          caption: "Gameplay trailer",
        },
        {
          type: "text",
          text: `The flight mechanics went through multiple iterations. I started with 
          a fully realistic Newtonian physics model but found it wasn't fun for most 
          players. I ended up with a hybrid system that feels realistic but is still 
          accessible and enjoyable.`,
        },
        {
          type: "gallery",
          images: [
            { src: "assets/images/space-1.jpg", caption: "Ship customization" },
            { src: "assets/images/space-2.jpg", caption: "Planet surface" },
            { src: "assets/images/space-3.jpg", caption: "Space station" },
            { src: "assets/images/space-4.jpg", caption: "Combat system" },
          ],
        },
        {
          type: "heading",
          text: "What I Learned",
        },
        {
          type: "text",
          text: `This project taught me a lot about scope management, optimization 
          for WebGL builds, and the importance of playtesting early and often. If I 
          were to start over, I would prototype the core loop faster before investing 
          time in procedural generation.`,
        },
      ],
    },

    {
      title: "Dungeon Crawler",
      description: "A roguelike dungeon crawler with pixel art aesthetics.",
      image: "assets/images/project2.jpg",
      tags: ["Godot", "GDScript", "2D", "Pixel Art"],

      sidebar: {
        playLink: "https://yourgame.itch.io/dungeon-crawler",
        playLabel: "Play on Itch.io",
        codeLink: "https://github.com/yourusername/dungeon-crawler",
        codeLabel: "View Source Code",
        extraLinks: [],
        info: [
          { label: "Engine", value: "Godot 4.0" },
          { label: "Platform", value: "PC" },
          { label: "Team Size", value: "2 people" },
          { label: "Duration", value: "48 hours (Game Jam)" },
          { label: "Status", value: "Prototype" },
        ],
      },

      content: [
        {
          type: "heading",
          text: "About This Project",
        },
        {
          type: "text",
          text: `Dungeon Crawler is a roguelike made during a 48-hour game jam.
          Players descend through procedurally generated floors, fighting monsters 
          and collecting loot. The pixel art was created by my teammate while I 
          handled all the programming.`,
        },
        {
          type: "image",
          src: "assets/images/dungeon-screenshot1.jpg",
          caption: "Exploring the first dungeon floor",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/your-video-id",
          caption: "Dungeon Crawler gameplay",
        },
        {
          type: "heading",
          text: "Game Jam Experience",
        },
        {
          type: "text",
          text: `This was my first game jam and it taught me the importance of 
          scoping small. We originally planned 10 enemy types but shipped with 4, 
          and the game was better for it. Every mechanic we kept was polished 
          and felt good to play.`,
        },
      ],
    },

    {
      title: "Puzzle Kingdom",
      description: "A mobile puzzle game with 50+ handcrafted levels.",
      image: "assets/images/project3.jpg",
      tags: ["Unity", "C#", "Mobile", "Puzzle"],

      sidebar: {
        playLink: "",
        playLabel: "",
        codeLink: "",
        codeLabel: "",
        extraLinks: [
          { label: "App Store", url: "https://apps.apple.com", icon: "fab fa-apple" },
          { label: "Google Play", url: "https://play.google.com", icon: "fab fa-google-play" },
        ],
        info: [
          { label: "Engine", value: "Unity 2021.3" },
          { label: "Platform", value: "iOS, Android" },
          { label: "Team Size", value: "Solo" },
          { label: "Duration", value: "6 months" },
          { label: "Status", value: "Released" },
        ],
      },

      content: [
        {
          type: "heading",
          text: "About This Project",
        },
        {
          type: "text",
          text: `Puzzle Kingdom is a mobile puzzle game featuring 50+ handcrafted 
          levels. Players manipulate tiles to guide a character to the exit. 
          The game features a relaxing soundtrack and colorful art style.`,
        },
        {
          type: "image",
          src: "assets/images/puzzle-screenshot1.jpg",
          caption: "Level selection screen",
        },
      ],
    },
  ],

  // ===== EXPERIENCE =====
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
  ],

  // ===== SOCIAL LINKS =====
  socials: {
    github: "https://github.com/yourusername",
    itchio: "https://yourusername.itch.io",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    youtube: "https://youtube.com/@yourusername",
    email: "your.email@example.com",
  },

  // ===== THEME COLORS =====
  colors: {
    primary: "#d4a017",
    secondary: "#2e86ab",
    background: "#0b1a0f",
    cardBg: "#132a1a",
    text: "#c8d5b9",
    heading: "#f0e6c0",
    tagBg: "#1a3352",
    tagText: "#d4a017",
  },
};

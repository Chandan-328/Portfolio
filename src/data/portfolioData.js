export const personalInfo = {
  name: "Chandan S Muragod",
  title: "Computer Vision & Full-Stack Developer",
  badge: "Computer Vision & Full-Stack",
  email: "chandanmuragod1@gmail.com",
  phone: "+91 8073730328",
  location: "Karnataka, India",
  linkedin: "https://www.linkedin.com/in/chandan-muragod-8050142a8",
  github: "https://github.com/Chandan-328",
  resumeUrl: "/download-resume.pdf",
  bio: [
    "I am an enthusiastic Electronics and Communication Engineering (ECE) graduate with a deep passion for blending hardware, intelligent software, and modern web architectures.",
    "My expertise lies in developing and deploying end-to-end computer vision pipelines. During my onsite internship at DocketRun Tech Pvt Ltd, I trained and optimized YOLO models for critical industrial applications like safety compliance and automated inventory systems.",
    "Beyond AI models, I enjoy building tools that solve practical problems. Whether it's developing custom cross-platform APIs linking Zoho Cliq to Google Sheets, building full-stack applications with React and TypeScript, or programming low-latency firmware for IoT devices using Embedded C, I thrive on writing clean, efficient, and well-documented code."
  ]
};

export const stats = [
  { label: "Location", value: "Karnataka, India", icon: "MapPin" },
  { label: "Degree", value: "B.E. in ECE (8.22 CGPA)", icon: "GraduationCap" }
];

export const projectCategories = ["All", "Computer Vision", "Full Stack", "IoT & Hardware", "HCI & AI"];

export const projects = [
  {
    id: 1,
    title: "Forklifter Object Detection",
    description: "A specialized real-time computer vision system built on YOLOv11s. Designed to identify and track industrial forklifts in warehouse camera feeds to optimize safety and logistics operations.",
    tech: ["Python", "YOLOv11s", "OpenCV", "Roboflow"],
    category: "Computer Vision",
    icon: "Truck",
    gradientClass: "bg-grad-purple",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/Object-detection--Forklifter", icon: "Github" }
    ]
  },
  {
    id: 2,
    title: "Zoho Cliq Task Tracker Bot",
    description: "An enterprise-grade automation system mapping Zoho Cliq chat commands directly to Google Sheets using Apps Script Web App APIs. Parses `#update` commands for tracking daily tasks.",
    tech: ["JavaScript", "Deluge Script", "Google Apps Script", "Webhooks"],
    category: "Full Stack",
    icon: "Bot",
    gradientClass: "bg-grad-blue",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/Zoho-Cliq-Bot", icon: "Github" }
    ]
  },
  {
    id: 3,
    title: "ShopHub E-Commerce",
    description: "A modern e-commerce storefront web application designed with type safety and optimized state management. Built with TypeScript and seamlessly deployed on Vercel.",
    tech: ["TypeScript", "React", "HTML5/CSS3", "Vercel"],
    category: "Full Stack",
    icon: "ShoppingBag",
    gradientClass: "bg-grad-cyan",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/ShopHub", icon: "Github" },
      { text: "Live Demo", url: "https://shop-hub-98io.vercel.app/", icon: "ExternalLink" }
    ]
  },
  {
    id: 4,
    title: "Steel Rods Count & Detection",
    description: "An industrial computer vision script designed to count steel reinforcement rods in factory bundles. Reduces manual auditing overhead and error rates in steel shipping logs.",
    tech: ["Python", "YOLO", "OpenCV", "Image Processing"],
    category: "Computer Vision",
    icon: "Hash",
    gradientClass: "bg-grad-emerald",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/steel-rods-detection", icon: "Github" }
    ]
  },
  {
    id: 5,
    title: "Traffic Vehicle Detection",
    description: "A computer vision tracking script built for real-time vehicular counting and speed analysis on highways. Trained to extract multi-class vehicles from raw surveillance streams.",
    tech: ["Python", "YOLOv8", "OpenCV", "NumPy"],
    category: "Computer Vision",
    icon: "Car",
    gradientClass: "bg-grad-rose",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/vehicle-detection", icon: "Github" }
    ]
  },
  {
    id: 6,
    title: "Virtual Gesture Cursor",
    description: "A touchless computer-human interaction (HCI) project. Leverages hand-landmark mapping to translate custom finger gestures into mouse cursor movements, clicks, and scrolling actions.",
    tech: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
    category: "HCI & AI",
    icon: "HandPointer",
    gradientClass: "bg-grad-orange",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/virtual-cursor", icon: "Github" }
    ]
  },
  {
    id: 7,
    title: "WiFi-Based V2V Communication",
    description: "An embedded hardware design implementing real-time vehicle-to-vehicle wireless communication using NodeMCU controllers. Enables localized crash warnings and sensor telemetry sharing.",
    tech: ["NodeMCU ESP8266", "Embedded C", "IoT", "Sensors"],
    category: "IoT & Hardware",
    icon: "Wifi",
    gradientClass: "bg-grad-sunset",
    links: [
      { text: "Academic Capstone", url: "#", icon: "Lock", disabled: true }
    ]
  },
  {
    id: 8,
    title: "Sante Price Index",
    description: "A clean, responsive web interface tracking market indices and product prices for Sante. Built as a lightweight, layout-focused frontend dashboard.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Full Stack",
    icon: "BarChart",
    gradientClass: "bg-grad-indigo",
    links: [
      { text: "Source Code", url: "https://github.com/Chandan-328/Sante-price-index", icon: "Github" }
    ]
  }
];

export const skillsData = [
  {
    category: "Languages",
    icon: "Code",
    skills: [
      { name: "Python", icon: "Python", class: "text-python" },
      { name: "JavaScript", icon: "JS", class: "text-javascript" },
      { name: "TypeScript", icon: "TS", class: "text-typescript" },
      { name: "C / C++", icon: "Cpp", class: "text-cpp" },
      { name: "SQL (Basic)", icon: "Sql", class: "text-sql" }
    ]
  },
  {
    category: "AI & Computer Vision",
    icon: "Cpu",
    skills: [
      { name: "OpenCV", icon: "Opencv", class: "text-opencv" },
      { name: "TensorFlow", icon: "Tensorflow", class: "text-tensorflow" },
      { name: "MediaPipe", icon: "Mediapipe", class: "text-mediapipe" },
      { name: "YOLO (v8, v11)", icon: "Yolo", class: "text-yolo" },
      { name: "Machine Learning", icon: "Ml", class: "text-ml" }
    ]
  },
  {
    category: "Web & Automation",
    icon: "Globe",
    skills: [
      { name: "React", icon: "React", class: "text-react" },
      { name: "Google Apps Script", icon: "Gas", class: "text-gas" },
      { name: "Zoho Deluge Scripting", icon: "Deluge", class: "text-deluge" },
      { name: "HTML5 & CSS3", icon: "Html", class: "text-html" }
    ]
  },
  {
    category: "Tools & Hardware",
    icon: "Hammer",
    skills: [
      { name: "Git & GitHub", icon: "Git", class: "text-git" },
      { name: "NodeMCU ESP8266", icon: "Iot", class: "text-iot" },
      { name: "Jupyter Notebook", icon: "Jupyter", class: "text-jupyter" },
      { name: "VS Code", icon: "Vscode", class: "text-vscode" }
    ]
  }
];

export const experience = [
  {
    title: "Onsite Intern – Computer Vision, ML & Full Stack",
    company: "DocketRun Tech Pvt Ltd",
    date: "Feb 2026 – Present",
    bullets: [
      "Engaged in training and tuning custom YOLOv8 and YOLOv11 deep learning architectures for specific industrial tasks including vehicle identification and steel rebar object detection.",
      "Engineered real-time video inference pipelines leveraging OpenCV, NumPy, and python script workers.",
      "Prepared datasets, managed annotation flows in Roboflow, and parsed model optimization logs.",
      "Integrated full-stack features, verifying end-to-end model deployments on edge devices."
    ]
  }
];

export const education = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Engineering in ECE",
    institution: "KLS VDIT Haliyal",
    grade: "CGPA: 8.22 / 10"
  },
  {
    year: "2020 - 2022",
    degree: "Pre-University (PUC)",
    institution: "Government PU College, Bailhongal",
    grade: "Score: 77.50%"
  },
  {
    year: "2020",
    degree: "Secondary School (SSLC)",
    institution: "Adarsha Kids Scholars Foundation Convent School",
    grade: "Score: 83.80%"
  }
];

export const certifications = [
  {
    title: "Introduction to HTML, CSS, JavaScript",
    issuer: "IBM",
    icon: "Ibm"
  },
  {
    title: "SQL for Beginners",
    issuer: "Scaler",
    icon: "Scaler"
  },
  {
    title: "Introduction to Git & GitHub",
    issuer: "Google",
    icon: "Google"
  },
  {
    title: "Career Edge - Young Professional",
    issuer: "TCS iON",
    icon: "Tcs"
  },
  {
    title: "Salesforce Trailhead",
    issuer: "Completed 20+ Badges",
    icon: "Salesforce"
  }
];

// ==========================================================================
// ACCURATE PORTFOLIO DATA - MUHAMMAD SUHAIB USMAN
// ==========================================================================

// Video Assets (Real Flutter App Recordings)
import sadapayVideo from "../assets/sadapay.mp4";
import doctorVideo from "../assets/doctorappointmentapp.mp4";
import geminiVideo from "../assets/geminiai.mp4";
import netflixVideo from "../assets/netflixclone.mp4";
import chatgptVideo from "../assets/chatgpt.mp4";
import cvPdf from "../assets/SuhaibCv.pdf";

// Image Assets
import suhaibPhoto from "../Images/suhaibsPicture.png";
import suhaibAltPhoto from "../Images/suhaibsPicture.jpg";
import countryImg from "../Images/country.png";
import figmaReactImg from "../Images/portfolio.jpg";
import foodDelImg from "../Images/project1.png";
import quizAppImg from "../Images/quizapp.jpg";
import teenziImg from "../Images/portfolioo.jpg";
import certificateImg from "../Images/certificate.png";
import palestineFlag from "../Images/palestineflag.webp";

// Tech Logos
import flutterLogo from "../Images/flutterlogo.svg";
import dartLogo from "../Images/dart.webp";
import firebaseLogo from "../Images/firebase.svg";
import reactLogo from "../Images/reactjs.svg";
import tailwindLogo from "../Images/tailwind.svg";
import sassLogo from "../Images/sass.svg";
import sqlLogo from "../Images/sql.png";
import htmlLogo from "../Images/html5.svg";
import cssLogo from "../Images/css3.svg";
import jsLogo from "../Images/js.svg";
import photoshopLogo from "../Images/adobeps.png";

export const PERSONAL_INFO = {
  name: "Muhammad Suhaib Usman",
  title: "Flutter Developer",
  tagline: "Passionate Flutter & Dart Developer based in Karachi, Pakistan.",
  location: "Karachi, Pakistan",
  availability: "Available for new projects & opportunities",
  bio: "Hi, I'm Muhammad Suhaib Usman. A passionate Flutter Developer based in Karachi, Pakistan. I specialize in building responsive, high-performance mobile applications using Flutter and Dart, with clean code, smooth UI interactions, and Firebase/API integrations.",
  photo: suhaibPhoto,
  altPhoto: suhaibAltPhoto,
  cvFile: cvPdf,
  palestineFlag: palestineFlag,
  email: "suhaibusman54@gmail.com",
  phone: "+92 311 2136120",
  phoneDisplay: "0311 2136120",
  whatsappUrl: "https://api.whatsapp.com/send?phone=923112136120&text=Hello!%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20Flutter%20project.",
  githubUrl: "https://github.com/Suhaibusman",
  linkedinUrl: "https://www.linkedin.com/in/suhaibusman/",
  upworkUrl: "https://www.upwork.com/freelancers/~015f706a438a826586",
  fiverrUrl: "https://www.fiverr.com/suhaibusman?up_rollout=true",
  facebookUrl: "https://www.facebook.com/MuhammadSuhaib0",
  instagramUrl: "https://instagram.com/suhaib__usman",
};

export const MOBILE_PROJECTS = [
  {
    id: "sadapay",
    name: "Sadapay Clone 🤑",
    subtitle: "Mobile Fintech UI Experience",
    badge: "Flutter & Dart",
    category: "mobile",
    mediaType: "video",
    mediaSrc: sadapayVideo,
    techStack: ["Flutter", "Dart", "Custom UI", "Animations"],
    platforms: ["iOS", "Android"],
    shortDesc:
      "A complete SadaPay digital wallet clone built using Flutter and Dart. Features dynamic cards, responsive layout, and smooth custom animations.",
    githubUrl: "https://github.com/Suhaibusman/Sadapay-Clone",
    liveDemoUrl: null,
  },
  {
    id: "doctor-appointment",
    name: "Doctor Appointment App 🏥",
    subtitle: "Healthcare & Booking Application",
    badge: "Flutter & Dart",
    category: "mobile",
    mediaType: "video",
    mediaSrc: doctorVideo,
    techStack: ["Flutter", "Dart", "Firebase", "Clean UI"],
    platforms: ["iOS", "Android"],
    shortDesc:
      "Doctor Appointment and Telehealth mobile application built using Flutter and Dart. Helps users search doctors, view specialties, and select appointments.",
    githubUrl: "https://github.com/Suhaibusman/Doctor-App-Flutter",
    liveDemoUrl: null,
  },
  {
    id: "gemini-ai",
    name: "Gemini AI App 🤖",
    subtitle: "Google Gemini AI Assistant",
    badge: "Flutter & AI",
    category: "mobile",
    mediaType: "video",
    mediaSrc: geminiVideo,
    techStack: ["Flutter", "Dart", "Gemini API", "Chat UI"],
    platforms: ["iOS", "Android"],
    shortDesc:
      "An intelligent AI chat assistant mobile app powered by Google Gemini API, built using Flutter and Dart with real-time prompt responses.",
    githubUrl: "https://github.com/Suhaibusman/GeminiAi-Flutter-",
    liveDemoUrl: null,
  },
  {
    id: "netflix-clone",
    name: "Netflix Clone 🎥",
    subtitle: "Media & Streaming UI",
    badge: "Flutter & Dart",
    category: "mobile",
    mediaType: "video",
    mediaSrc: netflixVideo,
    techStack: ["Flutter", "Dart", "Video Player", "Media UI"],
    platforms: ["iOS", "Android"],
    shortDesc:
      "A Netflix mobile interface clone created in Flutter and Dart, featuring movie carousels, responsive grid layouts, and video trailer players.",
    githubUrl: "https://github.com/Suhaibusman/Netflix-Clone",
    liveDemoUrl: null,
  },
  {
    id: "chatgpt-app",
    name: "Chat GPT App 💬",
    subtitle: "Conversational Mobile Client",
    badge: "Flutter & Dart",
    category: "mobile",
    mediaType: "video",
    mediaSrc: chatgptVideo,
    techStack: ["Flutter", "Dart", "API Integration", "Chat UI"],
    platforms: ["iOS", "Android"],
    shortDesc:
      "A fast and responsive ChatGPT conversational AI mobile client built using Flutter and Dart with custom chat bubble styling.",
    githubUrl: "https://github.com/Suhaibusman/Chat-Gpt-Flutter-",
    liveDemoUrl: null,
  },
];

export const TECHNICAL_SKILLS = [
  { id: 1, name: "Flutter", icon: flutterLogo, category: "Mobile" },
  { id: 2, name: "Dart", icon: dartLogo, category: "Mobile" },
  { id: 3, name: "Firebase", icon: firebaseLogo, category: "Backend" },
  { id: 4, name: "HTML5", icon: htmlLogo, category: "Frontend" },
  { id: 5, name: "CSS3", icon: cssLogo, category: "Frontend" },
  { id: 6, name: "JavaScript", icon: jsLogo, category: "Frontend" },
  { id: 7, name: "React.js", icon: reactLogo, category: "Frontend" },
  { id: 8, name: "Tailwind CSS", icon: tailwindLogo, category: "Frontend" },
  { id: 9, name: "Sass", icon: sassLogo, category: "Frontend" },
  { id: 10, name: "SQL", icon: sqlLogo, category: "Database" },
  { id: 11, name: "Adobe Photoshop", icon: photoshopLogo, category: "Design" },
];

export const METRICS = [
  {
    id: "apps",
    value: "5+",
    label: "Flutter Mobile Apps",
    desc: "Real interactive video demos",
  },
  {
    id: "tech",
    value: "10+",
    label: "Technologies Mastered",
    desc: "Flutter, Dart, Firebase & Web",
  },
  {
    id: "presence",
    value: "100%",
    label: "Dedicated & Responsive",
    desc: "Fast delivery & clean code",
  },
];

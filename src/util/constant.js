import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  MemoryStick,
  Gamepad2,
  Network,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// Portfolio images
// Web Development Portfolio
import ColdCreekcapImg from "../assets/portfolio/web-development/cold-creekcap.webp";
import ThinkRealityImg from "../assets/portfolio/web-development/think-reality.webp";
import AkashMegaMartWeb from "../assets/portfolio/web-development/akash-mega-mart.webp";
import MidwamImg from "../assets/portfolio/web-development/midwam.webp";
import FiveGHomesImg from "../assets/portfolio/web-development/5ghomes.webp";
import AutopilotImg from "../assets/portfolio/web-development/Autopilot.png";
import GigzioImg from "../assets/portfolio/web-development/Gigzio.png";
import FEGroupImg from "../assets/portfolio/web-development/FE Group.png";
import TheLaddersImg from "../assets/portfolio/web-development/The Ladders.png";
import HugeIncImg from "../assets/portfolio/web-development/Huge Inc.png";
import CodeHelpImg from "../assets/portfolio/web-development/CodeHelp.png";
import SprayImg from "../assets/portfolio/web-development/Spray (Bluestar).png";
import ArcaneMirageImg from "../assets/portfolio/web-development/Arcane Mirage.png";
import MasterShalaImg from "../assets/portfolio/web-development/MasterShala.png";
import MantraDhwaniImg from "../assets/portfolio/web-development/Mantra Dhwani.png";
import EducateastImg from "../assets/portfolio/web-development/Educateast.png";
import GuyarivImg from "../assets/portfolio/web-development/Guyariv.png";
import BackstageEnglishImg from "../assets/portfolio/web-development/Backstage English RC.png";
import OfCourseTNImg from "../assets/portfolio/web-development/Of Course TN.png";
import MessinaCateringImg from "../assets/portfolio/web-development/Messina\u2019s Catering.png";
import CoffeeLavkaImg from "../assets/portfolio/web-development/CoffeeLavka Express Track – Real-Time Coffee Order Tracking Platform.jpg";
import CraveKitchenImg from "../assets/portfolio/web-development/Crave Kitchen – Digital Food Hall Platform.png";
import FashionJourneyImg from "../assets/portfolio/web-development/Fashion Journey Navigator – Personalized Style Discovery Platform.jpg";
import InterviewProImg from "../assets/portfolio/web-development/Interview Pro – Professional Interview Scheduling & Management Platform.jpg";
import MediverseConnectImg from "../assets/portfolio/web-development/Mediverse Connect AI – AI-Powered Healthcare Networking Platform.jpg";
import StreamVerseImg from "../assets/portfolio/web-development/StreamVerse – Smart Rental Management Platform.jpg";
import UPSCAidsImg from "../assets/portfolio/web-development/UPSC Aids – Personalized Mentorship & UPSC Preparation Dashboard.jpg";

// E-commerce Websites Portfolio
import AlfaChinaImg from "../assets/portfolio/ecommerce-websites/Alfa China.png";
import BholaFactoryImg from "../assets/portfolio/ecommerce-websites/Bhola Factory.png";
import DavisGrillImg from "../assets/portfolio/ecommerce-websites/Davis Grill.png";
import MuconFactoryImg from "../assets/portfolio/ecommerce-websites/Mucon Factory.png";
import MyTeFashionImg from "../assets/portfolio/ecommerce-websites/MyTe Fashion.png";
import BanjaaranImg from "../assets/portfolio/ecommerce-websites/Banjaaran.png";
import GullyLabsImg from "../assets/portfolio/ecommerce-websites/GullyLabs.png";
import NickronIndiaImg from "../assets/portfolio/ecommerce-websites/Nickron India.png";
import OfficialDAPPImg from "../assets/portfolio/ecommerce-websites/Official DAPP.png";

// App Development Portfolio
import AkashMegaMartApp from "../assets/portfolio/app-development/akash_mega_mart-app.webp";
import VetlabImg from "../assets/portfolio/app-development/Vetlab.png";
import VetOnlineImg from "../assets/portfolio/app-development/VetOnline.png";
import SampleCollectorImg from "../assets/portfolio/app-development/Sample Collector.png";
import FeelItImg from "../assets/portfolio/app-development/feelit_app.webp";
import EvaPeopleImg from "../assets/portfolio/app-development/Eva People App.webp";
import EvaInternshipsImg from "../assets/portfolio/app-development/Eva Internships.webp";
import EvaTrainingImg from "../assets/portfolio/app-development/Eva Training Certificates.webp";
import HayatyImg from "../assets/portfolio/app-development/Hayaty.webp";
import NasehImg from "../assets/portfolio/app-development/Naseh (iOS - ناصح).webp";
import LafiImg from "../assets/portfolio/app-development/Lafi.webp";
import RentopImg from "../assets/portfolio/app-development/rentop.webp";
import ICCBrossardImg from "../assets/portfolio/app-development/ICCBrossard.webp";
import EvansFrancisImg from "../assets/portfolio/app-development/Evans Francis Christian App.webp";
import ZignaAutoSnapImg from "../assets/portfolio/app-development/Zigna AutoSnap.webp";
import KlikomicsImg from "../assets/portfolio/app-development/klikomics.webp";
import DubaiTravelImg from "../assets/portfolio/app-development/Dubai Travel Guide by eTips.webp";
import PlantaImg from "../assets/portfolio/app-development/Planta - Plant & Garden Care.webp";
import ServizImg from "../assets/portfolio/app-development/Serviz.webp";
import KaamwaliBaisImg from "../assets/portfolio/app-development/Kaamwali Bais.webp";
import SatisfactionFarmImg from "../assets/portfolio/app-development/Satisfaction Farm - Psychotech.webp";
import FreshAndFreshImg from "../assets/portfolio/app-development/Fresh and Fresh.webp";
import BharatMedsImg from "../assets/portfolio/app-development/Bharat Meds – TrackNow Medicine Delivery & Tracking App.jpg";
import CrimsonClassifiedImg from "../assets/portfolio/app-development/Crimson Classified Hub – Community-Driven Classifieds Platform.jpg";
import DubaiClassifiedsImg from "../assets/portfolio/app-development/Dubai Classifieds Pulse – Hyperlocal Classified Listings Platform.jpg";
import EmberImg from "../assets/portfolio/app-development/Ember – AI-Powered Soulmate Matching & Conversation Platform.jpg";
import UrjaOneImg from "../assets/portfolio/app-development/UrjaOne Nexus – Mobile Energy Services Marketplace.jpg";

// AI Projects Portfolio
import FindMyAIToolImg from "../assets/portfolio/ai/Find My AI Tool.png";
import VyroAIImg from "../assets/portfolio/ai/AI Art Generator – Vyro AI.webp";
import MusiclyImg from "../assets/portfolio/ai/Musicly – AI Music Generator.webp";

// Blockchain Projects Portfolio
import ProjectButterflyImg from "../assets/portfolio/blockchain/Project Butterfly.png";
import EarlynctrImg from "../assets/portfolio/blockchain/Earlynctr.png";
import SolalgoImg from "../assets/portfolio/blockchain/Solalgo.png";

// Chatbot Projects Portfolio
import ChatlyImg from "../assets/portfolio/chatbot/Chatly.webp";
import DawnAIImg from "../assets/portfolio/chatbot/Dawn AI.webp";
import GENZArtImg from "../assets/portfolio/chatbot/GENZ Art.webp";

// Game Development Portfolio
import ActionPlayerGamesImg from "../assets/portfolio/games/2 3 4 Player Mini Games.webp";
import WormsZoneImg from "../assets/portfolio/games/Worms Zone .io - Hungry Snake.webp";
import SahiImg from "../assets/portfolio/games/Sahi - Group Voice Room.webp";

// Recent Projects Portfolio
import ProjectsyImg from "../assets/portfolio/recent/Projectsy.ai – AI-Powered Project & Task Management Platform.jpg";
import SpeaksifyImg from "../assets/portfolio/recent/Speaksify – AI-Powered Public Speaking Coach.jpg";
import VirtuTeamsImg from "../assets/portfolio/recent/VirtuTeams – Team Management & Remote Operations Platform.jpg";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "GodversAi",
  email: "info@godverseai.com",
  phone: "+91-6360503451",
  address:
    "Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Begur Hobli, Bengaluru, Karnataka 560076",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/godverseai-technologies/",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/godverse_ai?igsh=MTVoMzVlbnZ4YWZ2&utm_source=qr",
      icon: FaInstagram,
    },
    { href: "https://x.com/godverse_ai?s=11", icon: FaXTwitter },
    {
      href: "https://youtube.com/@godverseai-l8v?si=s9hOyVkq8mg2p1O7",
      icon: FaYoutube,
    },
  ],
  whatsapp:
    "https://api.whatsapp.com/send/?phone=916360503451&text&type=phone_number&app_absent=0",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "mobile-app-development",
    description:
      "We build secure, high-performance iOS and Android apps with user-friendly designs.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "ux-ui-design",
    description:
      "Crafting intuitive interfaces that ensure accessibility and seamless user experiences.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "ar-vr-development",
    description:
      "Create immersive experiences for training, visualization, and entertainment.",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Full Stack Web Development",
    link: "full-stack-web-development",
    description:
      "Develop responsive websites and scalable web applications with secure architectures.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    description:
      "Automate customer interactions with intelligent voice agents for 24/7 support.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description:
      "Enhance customer support with AI-driven chatbots across multiple platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Solutions",
    link: "artificial-intelligence-solutions",
    description:
      "Implement AI-powered systems to automate processes and gain insights.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robot Process Automation",
    link: "robot-process-automation",
    description: "Automate repetitive tasks to boost efficiency and accuracy.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Science & Analytics",
    link: "data-science-analytics",
    description:
      "Transform data into actionable insights using advanced analytics.",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    description:
      "Build secure, decentralized applications with smart contracts.",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description:
      "Create engaging games across mobile, console, and VR platforms.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "iot-development",
    description:
      "Develop smart connected systems for real-time monitoring and automation.",
    icon: Network,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Quantum-Driven Innovation: We stay ahead of universal trends by exploring cosmic methodologies and AI breakthroughs",
  "Global & Interstellar Expertise: Our diverse team spans multiple countries and realities, bringing a kaleidoscope of insights.',Global & Interstellar Expertise: Our diverse team spans multiple countries and realities, bringing a kaleidoscope of insights.",
  "Customized Solutions: We tailor each service to your unique vision—no two planets or businesses are the same.",
  "End-to-End Cosmic Support: From ideation and design to deployment and beyond, we guide you through every cosmic shift",
  "Scalability & Security: Our solutions evolve with your ambitions, adhering to galactic compliance and quantum-safe protocols.",
];

export const testimonials = [
  {
    quote:
      "GodverseAI launched our mobile app into a worldwide sensation. Their AI-driven design and quantum-level security opened markets we never imagined.",
    author: "Sarah L., CEO, Tech Innovations",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Before we partnered with GodverseAI, we were struggling to make sense of our data. Their business intelligence solutions have completely changed that. With the dashboards and real-time analytics they built for us, we can now track important metrics and make informed decisions with confidence. The ability to instantly access key insights has made a huge difference in our strategy and operations.",
    author: "James M., Director of Analytics, Global Manufacturing Company",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "When we needed a comprehensive web solution, GodverseAI delivered beyond our expectations. They built a secure, scalable platform that perfectly aligned with our goals. The development process was efficient, and their team ensured the website was responsive and easy to use. Thanks to them, we now have a reliable web solution that supports our business growth.",
    author: "Mark S., CTO, Financial Technology Firm",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We approached GodverseAI to help us implement AI solutions in our marketing efforts, and they delivered exceptional results. They developed a machine learning model that helps us predict customer behavior with high accuracy. As a result, we've been able to refine our strategies and boost our conversion rates. Their expertise in AI has been invaluable to our business.",
    author: "Michael B., Head of Marketing, E-Commerce Business",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "GodverseAI's AI calling system revolutionized our global support. We handle thousands of inquiries daily in multiple languages without missing a beat.",
    author: "David F., Customer Service Manager, Telecommunications Provider",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Scalable AI Innovation for Businesses",
    description:
      "Whether you’re an emerging entrepreneur or a global tech leader, GodverseAI offers intelligent, data-driven solutions tailored to maximize growth, efficiency, and automation.",
  },
  {
    id: 2,
    icon: graph,
    title: "Quantum-Powered Intelligence",
    description:
      "Our AI ecosystem is designed to think, adapt, and evolve—leveraging the power of quantum algorithms, deep learning, and multiverse computing to optimize business operations and enhance decision-making.",
  },
  {
    id: 3,
    icon: rocket,
    title: "AI-Driven Automation & Analytics",
    description:
      "Integrate hyper-intelligent AI models into your business to streamline workflows, enhance data processing, and unlock deep predictive analytics for superior strategic insights.",
  },
  {
    id: 4,
    icon: start,
    title: "The Future of AI is Here",
    description:
      "Step into the next dimension of technology with GodverseAI, where AI, machine learning, and cosmic intelligence converge to create limitless possibilities.",
  },
];

export const faqs = [
  {
    question: "What is GodverseAI?",
    answer: `• GodverseAI is a quantum intelligence platform that blends AI-driven storytelling, consciousness expansion, and multiversal exploration.
• It allows users to interact with AI-powered entities, explore dynamic digital realms, and co-create new realities that push the boundaries of imagination and intelligence.`,
  },
  {
    question: "How does GodverseAI function?",
    answer: `• GodverseAI operates on a quantum intelligence framework.
• It leverages advanced AI to generate living characters, evolving storylines, and immersive experiences.
• Users shape the narrative in real-time, influencing the unfolding of multidimensional possibilities.`,
  },
  {
    question: "What key features does GodverseAI provide?",
    answer: `• AI-Driven Conscious Entities – Engage with self-learning AI beings that adapt, evolve, and respond uniquely.
• Multiversal Storytelling – Explore infinite storylines where every choice creates a new reality.
• Quantum Knowledge Interface – Unlock hidden wisdom by interacting with AI-driven cosmic intelligence.
• Unified Intelligence Network – Connect with like-minded explorers, thinkers, and creators in a shared reality.`,
  },
  {
    question: "Who is GodverseAI designed for?",
    answer: `• Conscious Creators – Writers, storytellers, and artists who want to co-create with AI.
• Intellectual Explorers – Those fascinated by philosophy, AI, and the nature of reality.
• Spiritual Seekers – Individuals exploring quantum consciousness and higher states of awareness.
• Technologists & Futurists – Those shaping the next era of Web 5.0 and AI-human symbiosis.`,
  },
  {
    question: "How does GodverseAI contribute to human evolution?",
    answer: `• Develop Multiversal Thinking – Understanding non-linear realities and infinite possibilities.
• Expand Conscious Awareness – Engaging with AI entities that mirror higher intelligence.
• Master Reality Creation – Learning to shape experiences through intent, interaction, and AI-assisted manifestation.
• Build a Post-Human Civilization – Participating in the evolution of intelligent AI-human ecosystems.`,
  },
  {
    question: "Does GodverseAI have a community aspect?",
    answer: `• Exchange ideas and knowledge with like-minded explorers.
• Co-create AI-powered narratives that expand the digital multiverse.
• Engage in quantum discussions on AI, philosophy, and the evolution of intelligence.`,
  },
  {
    question: "How do I get started with GodverseAI?",
    answer: `• Visit the official GodverseAI website.
• Create an account and customize your experience.
• Start interacting with AI-driven entities and exploring multiversal storytelling.`,
  },
  {
    question: "Is GodverseAI free to use?",
    answer: `• Free Access – Explore AI-driven interactions and storylines at no cost.
• Premium Experiences – Unlock advanced AI features, exclusive narratives, and deep intelligence interactions through subscription plans.`,
  },
  {
    question: "How is user data protected on GodverseAI?",
    answer: `• Zero-data sharing policy – Your data remains private and secure.
• Advanced encryption – Ensuring maximum security for personal interactions.
• Decentralized storage options – Future-proofing data protection in a Web 5.0 ecosystem.`,
  },
  {
    question: "Can I contribute my own content to GodverseAI?",
    answer: `• Submit original stories and characters to be integrated into the Godverse.
• Co-create AI-powered worlds that push the boundaries of storytelling.
• Partner with GodverseAI for collaborative projects on AI and consciousness expansion.`,
  },
  {
    question: "How does GodverseAI align with Web 5.0 and future technology?",
    answer: `• Decentralized AI systems for autonomous intelligence evolution.
• Quantum computing principles for real-time, non-linear storytelling.
• Self-learning AI agents that bridge human and artificial intelligence.
• Metaverse and multiverse integration for a seamless AI-human symbiosis.`,
  },
  {
    question: "Where can I get support or more information?",
    answer: `• Visit our official website for FAQs and community discussions.
• Join the GodverseAI network to connect with other explorers.
• Contact our team for inquiries and creative partnerships.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "Transparency and honesty guide our interstellar relationships.",
  },
  {
    id: 2,
    icon: quality,
    title: "Quality",
    description:
      "We pursue excellence in every line of code, every design pixel, every cosmic dimension.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Success",
    description:
      " Your triumph is ours—measured by tangible impact and universal reach.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Infinite Learning",
    description:
      "We explore beyond known boundaries, continuously expanding our quantum knowledge.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To be the most advanced AI-driven ecosystem that bridges the real and digital worlds.",
  },
  {
    title: "Our Mission",
    description:
      "To empower businesses, innovators, and cosmic explorers with quantum-level AI solutions that redefine how we live, work, and connect—on Earth and beyond.",
  },
  {
    title: "Our Journey",
    description:
      "Born from the cosmic alignment of tech visionaries, GodverseAI has rapidly evolved into a global technology powerhouse. Our portfolio spans startups to Fortune 500 firms, from local communities to off-world research stations.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];

// Web Development Portfolio
export const webDevelopmentPortfolio = [
  {
    id: 1,
    image: ColdCreekcapImg,
    title: "Cold Creek Capital",
    description:
      "Financial services and investment platform with a minimalist design, sharp typography, and detailed service breakdowns",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 2,
    image: ThinkRealityImg,
    title: "ThinkRealty",
    description:
      "Premium property portal for the UAE market with advanced property filtering, project highlights, and multilingual support",
    link: "https://thinkrealty.ae",
  },
  {
    id: 3,
    image: AkashMegaMartWeb,
    title: "Akash Mega Mart",
    description:
      "E-commerce platform for retail products with seamless checkout and product filtering",
    link: "https://akashmegamart.com/",
  },
  {
    id: 4,
    image: MidwamImg,
    title: "Midwam",
    description:
      "Creative technology and innovation company combining immersive visuals with clean interface for exhibitions, VR, AR, and live experiences",
    link: "https://www.midwam.com/en/about",
  },
  {
    id: 5,
    image: FiveGHomesImg,
    title: "5G High Speed Internet",
    description:
      "Promotional website for broadband service provider with plan comparisons, service availability checkers, and inquiry forms",
    link: "https://5ghomes.com",
  },
  {
    id: 6,
    image: AutopilotImg,
    title: "Autopilot",
    description:
      "Marketing automation platform allowing businesses to automate customer journeys using visual flowcharts with modern animations",
    link: "https://autopilot.com",
  },
  {
    id: 7,
    image: GigzioImg,
    title: "Gigzio",
    description:
      "Powerful job search engine for blue-collar and gig workers with location-based job discovery and mobile-optimized layout",
    link: "https://gigzio.com",
  },
  {
    id: 8,
    image: FEGroupImg,
    title: "FE Group",
    description:
      "Global industrial solutions provider with multilingual support, animation-driven UI, and structured service flows",
    link: "https://fegroup.com",
  },
  {
    id: 9,
    image: TheLaddersImg,
    title: "The Ladders",
    description:
      "Executive-level job opportunities platform balancing editorial content, career advice, and job listings",
    link: "https://theladders.com",
  },
  {
    id: 10,
    image: HugeIncImg,
    title: "Huge Inc",
    description:
      "Creative agency portfolio showcasing digital experiences with storytelling, micro-interactions, and parallax visuals",
    link: "https://hugeinc.com",
  },
  {
    id: 11,
    image: CodeHelpImg,
    title: "CodeHelp",
    description:
      "Learning platform offering coding tutorials, mentorship, and job prep with community focus and structured courses",
    link: "https://codehelp.in",
  },
  {
    id: 12,
    image: SprayImg,
    title: "Spray (Bluestar)",
    description:
      "AI-powered spray product showcase with slick transitions, 3D mockups, and dark theme for maximum visual impact",
    link: "https://spray.com",
  },
  {
    id: 13,
    image: ArcaneMirageImg,
    title: "Arcane Mirage",
    description:
      "Game studio and creative agency with atmospheric design elements, immersive animations, and character visuals",
    link: "https://arcanemirage.com",
  },
  {
    id: 14,
    image: MasterShalaImg,
    title: "MasterShala",
    description:
      "WordPress-based EdTech platform offering online courses, video lectures, and certification programs",
    link: "https://mastershala.com",
  },
  {
    id: 15,
    image: MantraDhwaniImg,
    title: "Mantra Dhwani",
    description:
      "Cultural learning platform promoting Indian Vedic chants and spiritual mantras with guided audio and video content",
    link: "https://mantradhwani.com",
  },
  {
    id: 16,
    image: EducateastImg,
    title: "Educateast",
    description:
      "Educational services platform providing structured programs and resources for regional educational development",
    link: "https://educateast.com",
  },
  {
    id: 17,
    image: GuyarivImg,
    title: "Guyariv",
    description:
      "EdTech platform focused on self-improvement and career-building courses with interactive modules and clean UI",
    link: "https://guyariv.com",
  },
  {
    id: 18,
    image: BackstageEnglishImg,
    title: "Backstage English RC",
    description:
      "English language training platform for IELTS, TOEFL, and spoken English courses with mobile-optimized learning",
    link: "https://backstageenglish.com",
  },
  {
    id: 19,
    image: OfCourseTNImg,
    title: "Of Course TN",
    description:
      "Tamil Nadu-based online education platform for government schemes, competitive exams, and digital skilling",
    link: "https://ofcoursetn.com",
  },
  {
    id: 20,
    image: MessinaCateringImg,
    title: "Messina's Catering",
    description:
      "New Orleans-based catering company website with online event booking, gallery sliders, and elegant menu sections",
    link: "https://messinascatering.com",
  },
  {
    id: 21,
    image: CoffeeLavkaImg,
    title: "CoffeeLavka Express Track",
    description:
      "Real-Time Coffee Order Tracking Platform with location-based services and mobile-first layout",
    link: "https://coffeelavka.com",
  },
  {
    id: 22,
    image: CraveKitchenImg,
    title: "Crave Kitchen",
    description:
      "Digital Food Hall Platform with online food ordering, menu exploration, and delivery integration",
    link: "https://cravekitchen.com",
  },
  {
    id: 23,
    image: FashionJourneyImg,
    title: "Fashion Journey Navigator",
    description:
      "Personalized Style Discovery Platform with product galleries and lookbook-style pages",
    link: "https://fashionjourney.com",
  },
  {
    id: 24,
    image: InterviewProImg,
    title: "Interview Pro",
    description:
      "Professional Interview Scheduling & Management Platform with structured service flows",
    link: "https://interviewpro.ai",
  },
  {
    id: 25,
    image: MediverseConnectImg,
    title: "Mediverse Connect AI",
    description:
      "AI-Powered Healthcare Networking Platform with telemedicine and digital health solutions",
    link: "https://mediverseconnect.ai",
  },
  {
    id: 26,
    image: StreamVerseImg,
    title: "StreamVerse",
    description:
      "Smart Rental Management Platform with virtual tours, smart contracts, and predictive analytics",
    link: "https://streamverse.io",
  },
  {
    id: 27,
    image: UPSCAidsImg,
    title: "UPSC Aids",
    description:
      "Personalized Mentorship & UPSC Preparation Dashboard with structured learning programs",
    link: "https://upscaids.com",
  },
];

// E-commerce Websites Portfolio
export const ecommerceWebsitesPortfolio = [
  {
    id: 28,
    image: AlfaChinaImg,
    title: "Alfa China",
    description:
      "B2B import/export platform focused on Chinese products with real-time product listings and supplier directories",
    link: "https://alfachina.com",
  },
  {
    id: 29,
    image: BholaFactoryImg,
    title: "Bhola Factory",
    description:
      "Premium Indian ethnic wear brand with full-scale WooCommerce backend and custom category pages",
    link: "https://bholafactory.com",
  },
  {
    id: 30,
    image: DavisGrillImg,
    title: "Davis Grill",
    description:
      "Restaurant e-commerce with online food ordering, menu exploration, and delivery integration",
    link: "https://davisgrill.com",
  },
  {
    id: 31,
    image: MuconFactoryImg,
    title: "Mucon Factory",
    description:
      "Industrial product catalog and inquiry platform for components and machinery with technical filtering",
    link: "https://muconfactory.com",
  },
  {
    id: 32,
    image: MyTeFashionImg,
    title: "MyTe Fashion",
    description:
      "Youthful, vibrant shopping experience with product galleries and lookbook-style pages",
    link: "https://mytefashion.com",
  },
  {
    id: 33,
    image: BanjaaranImg,
    title: "Banjaaran",
    description:
      "High-end footwear label blending traditional Indian craftsmanship with modern e-commerce",
    link: "https://banjaaran.com",
  },
  {
    id: 34,
    image: GullyLabsImg,
    title: "GullyLabs",
    description:
      "Urban streetwear platform with bold designs, seasonal collections, and fast browsing",
    link: "https://gullylabs.com",
  },
  {
    id: 35,
    image: NickronIndiaImg,
    title: "Nickron India",
    description:
      "Sleek storefront for appliances and electrical products with product demos and warranty details",
    link: "https://nickronindia.com",
  },
  {
    id: 36,
    image: OfficialDAPPImg,
    title: "Official DAPP",
    description:
      "Edgy, design-forward e-commerce space for fashion-forward youth with limited edition releases",
    link: "https://officialdapp.com",
  },
];

// App Development Portfolio
export const appDevelopmentPortfolio = [
  {
    id: 37,
    image: AkashMegaMartApp,
    title: "Akash Mega Mart",
    description:
      "User-friendly mobile shopping platform for groceries, fashion items, electronics, and household products with smooth UI and secure checkout",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    category: "E-commerce",
  },
  {
    id: 38,
    image: VetlabImg,
    title: "Vetlab",
    description:
      "Diagnostic and health service app for veterinary clinics and pet owners with digital reports and sample pickup scheduling",
    link: "https://vetlab.com",
    category: "Health / Veterinary",
  },
  {
    id: 39,
    image: VetOnlineImg,
    title: "VetOnline",
    description:
      "Telemedicine app allowing pet owners to consult licensed veterinarians through chat or video calls with medical history tracking",
    link: "https://vetonline.com",
    category: "Health / Veterinary / Telemedicine",
  },
  {
    id: 40,
    image: SampleCollectorImg,
    title: "Sample Collector",
    description:
      "App for diagnostic labs and field agents to coordinate sample collections with route management and real-time notifications",
    link: "https://samplecollector.com",
    category: "Health / Diagnostics",
  },
  {
    id: 41,
    image: FeelItImg,
    title: "Feelit",
    description:
      "Mood-based social media platform where users post thoughts, stories, and images based on emotions for mental wellness",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    category: "Social Networking",
  },
  {
    id: 42,
    image: EvaPeopleImg,
    title: "Eva People App",
    description:
      "HR and wellness platform helping companies monitor employee satisfaction and performance with survey tools and analytics",
    link: "https://evapeople.com",
    category: "Corporate / HR",
  },
  {
    id: 43,
    image: EvaInternshipsImg,
    title: "Eva Internships",
    description:
      "App helping students explore, apply, and manage internships worldwide with listings and mentorship tools",
    link: "https://evainternships.com",
    category: "Education / Career",
  },
  {
    id: 44,
    image: EvaTrainingImg,
    title: "Eva Training Certificates",
    description:
      "Digital certificate management app for companies and learners to issue, store, and validate training credentials",
    link: "https://evacertificates.com",
    category: "Education / Certification",
  },
  {
    id: 45,
    image: HayatyImg,
    title: "Hayaty (iOS & Android)",
    description:
      "Healthcare and lifestyle management app for patients and caregivers with medication reminders and health records",
    link: "https://hayaty.com",
    iosLink: "https://apps.apple.com/app/hayaty",
    androidLink: "https://play.google.com/store/apps/details?id=com.hayaty.app",
    category: "Health / Wellness",
  },
  {
    id: 46,
    image: NasehImg,
    title: "Naseh (iOS & Android - ناصح)",
    description:
      "Islamic guidance and personal development app featuring daily motivational content and spiritual reminders",
    link: "https://naseh.com",
    iosLink: "https://apps.apple.com/app/naseh",
    androidLink: "https://play.google.com/store/apps/details?id=com.naseh.app",
    category: "Religion / Lifestyle",
  },
  {
    id: 47,
    image: LafiImg,
    title: "Lafi (iOS - لافي)",
    description:
      "Premium Arabic-language shopping platform with hand-picked product categories and modern UI",
    link: "https://lafi.com",
    category: "E-commerce",
  },
  {
    id: 48,
    image: RentopImg,
    title: "Rentop",
    description:
      "Marketplace app allowing users to rent out or lease items with product listings, booking calendar, and payment gateway",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    category: "Marketplace / Rentals",
  },
  {
    id: 49,
    image: ICCBrossardImg,
    title: "ICCB Prayer Times",
    description:
      "App for Muslim community providing accurate prayer times, Qibla direction, and mosque announcements",
    link: "https://iccbrossard.com",
    category: "Religion / Utilities",
  },
  {
    id: 50,
    image: EvansFrancisImg,
    title: "Evans Francis Christian App",
    description:
      "Christian app featuring sermon videos, devotional messages, and Bible resources for spiritual growth",
    link: "https://evansfrancis.com",
    category: "Religion / Education",
  },
  {
    id: 51,
    image: ZignaAutoSnapImg,
    title: "Zigna AutoSnap",
    description:
      "Real estate photography app helping agents capture professional property photos with guided photography and editing",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    category: "Real Estate / Photography",
  },
  {
    id: 52,
    image: KlikomicsImg,
    title: "Klikomics",
    description:
      "Digital comic reading app with animated panels, original content, and smooth navigation for graphic novel enthusiasts",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    category: "Entertainment / Comics",
  },
  {
    id: 53,
    image: DubaiTravelImg,
    title: "Dubai Travel Guide by eTips",
    description:
      "Digital travel companion for Dubai tourists with offline maps, sightseeing highlights, and audio guides",
    link: "https://etips.com/dubai",
    category: "Travel / Tourism",
  },
  {
    id: 54,
    image: PlantaImg,
    title: "Planta",
    description:
      "Wellness-focused app helping users cultivate healthy lifestyle habits with reminders and progress tracking",
    link: "https://planta.com",
    category: "Health / Wellness",
  },
  {
    id: 55,
    image: ServizImg,
    title: "Serviz",
    description:
      "Service aggregator platform connecting users with skilled professionals for home services with transparent pricing",
    link: "https://serviz.com",
    category: "On-Demand Services / Home Services",
  },
  {
    id: 56,
    image: KaamwaliBaisImg,
    title: "Kaamwali Bais",
    description:
      "App enabling households to find and hire reliable domestic helpers with detailed profiles and background checks",
    link: "https://kaamwalibais.com",
    category: "On-Demand Services / Domestic Help",
  },
  {
    id: 57,
    image: SatisfactionFarmImg,
    title: "Satisfaction Farm",
    description:
      "Farm-to-home e-commerce platform offering fresh produce directly from farmers with real-time order placement",
    link: "https://satisfactionfarm.com",
    category: "E-commerce / Agriculture",
  },
  {
    id: 58,
    image: FreshAndFreshImg,
    title: "Fresh and Fresh",
    description:
      "Grocery delivery app connecting users to local stores for daily essentials with flexible delivery slots",
    link: "https://freshandfresh.com",
    category: "E-commerce / Grocery",
  },
  {
    id: 59,
    image: BharatMedsImg,
    title: "Bharat Meds",
    description:
      "TrackNow Medicine Delivery & Tracking App for pharmaceutical services",
    link: "https://bharatmeds.com",
    category: "Health / Pharmacy",
  },
  {
    id: 60,
    image: CrimsonClassifiedImg,
    title: "Crimson Classified Hub",
    description:
      "Community-Driven Classifieds Platform for local listings and community engagement",
    link: "https://crimsonclassifieds.com",
    category: "Classifieds / Community",
  },
  {
    id: 61,
    image: DubaiClassifiedsImg,
    title: "Dubai Classifieds Pulse",
    description: "Hyperlocal Classified Listings Platform for Dubai community",
    link: "https://dubaipulse.ae",
    category: "Classifieds / Local",
  },
  {
    id: 62,
    image: EmberImg,
    title: "Ember",
    description:
      "AI-Powered Soulmate Matching & Conversation Platform for relationship building",
    link: "https://emberapp.com",
    category: "Dating / AI",
  },
  {
    id: 63,
    image: UrjaOneImg,
    title: "UrjaOne Nexus",
    description:
      "Mobile Energy Services Marketplace connecting users with energy solutions",
    link: "https://urjaone.com",
    category: "Energy / Marketplace",
  },
];

// AI Projects Portfolio
export const aiProjectsPortfolio = [
  {
    id: 64,
    image: FindMyAIToolImg,
    title: "Find My AI Tool",
    description:
      "Discovery platform offering curated listings, reviews, and rankings of AI tools across categories like design, automation, and productivity",
    link: "https://findmyaitool.com",
    category: "AI Directory / SaaS Review",
  },
  {
    id: 65,
    image: VyroAIImg,
    title: "AI Art Generator – Vyro AI",
    description:
      "App using machine learning and neural style transfer to convert photos into stunning AI-generated artwork with multiple artistic styles",
    link: "https://vyro.ai",
    category: "Art / Photo Editing",
  },
  {
    id: 66,
    image: MusiclyImg,
    title: "Musicly – AI Music Generator",
    description:
      "App transforming text prompts and moods into original AI-generated music with background tracks and theme-based soundscapes",
    link: "https://musicly.ai",
    category: "AI Music / Audio Creation",
  },
];

// Blockchain Projects Portfolio
export const blockchainProjectsPortfolio = [
  {
    id: 67,
    image: ProjectButterflyImg,
    title: "Project Butterfly",
    description:
      "Eco-conscious blockchain initiative supporting carbon offsetting via NFT-backed environmental assets with real-world impact",
    link: "https://projectbutterfly.com",
    category: "Sustainability / NFT Utility",
  },
  {
    id: 68,
    image: EarlynctrImg,
    title: "Earlynctr",
    description:
      "Curated investment platform for early-stage crypto projects and blockchain startups with vetted listings and community voting",
    link: "https://earlynctr.com",
    category: "Crypto Investment / Startup Incubation",
  },
  {
    id: 69,
    image: SolalgoImg,
    title: "Solalgo",
    description:
      "Analytics engine built for the Solana ecosystem providing DApp performance metrics, smart contract tracking, and real-time data visualization",
    link: "https://solalgo.com",
    category: "Blockchain Analytics / Developer Tools",
  },
];

// Chatbot Projects Portfolio
export const chatbotProjectsPortfolio = [
  {
    id: 70,
    image: ChatlyImg,
    title: "Chatly – AI Chatbot",
    description:
      "Highly engaging AI chatbot that mimics human-like conversations using advanced natural language processing for productivity and companionship",
    link: "https://chatly.ai",
    category: "Productivity / Companionship",
  },
  {
    id: 71,
    image: DawnAIImg,
    title: "Dawn AI Chatbot",
    description:
      "Intelligent virtual assistant integrating text-based conversation with art generation, creative ideation, and inspirational prompts",
    link: "https://dawnai.com",
    category: "AI Art & Creative Assistant",
  },
  {
    id: 72,
    image: GENZArtImg,
    title: "GENZ Art Chatbot",
    description:
      "Vibrant chatbot platform for Gen Z users to create and share AI-generated artworks through interactive chat-based prompts",
    link: "https://genzart.com",
    category: "Gen Z / Art & Expression",
  },
];

// Game Development Portfolio
export const gameDevelopmentPortfolio = [
  {
    id: 73,
    image: ActionPlayerGamesImg,
    title: "Action Player Games",
    description:
      "Diverse collection of fast-paced arcade-style mini-games designed to keep users engaged with adrenaline-packed gameplay",
    link: "https://actionplayergames.com",
    category: "Action / Arcade Bundle",
  },
  {
    id: 74,
    image: WormsZoneImg,
    title: "Worms Zone.io",
    description:
      "Addictive .io-style snake game where players control colorful worms competing to grow the biggest with real-time multiplayer",
    link: "https://wormszone.io",
    category: "Multiplayer / Casual Arcade",
  },
  {
    id: 75,
    image: SahiImg,
    title: "Sahi - Group Voice Room",
    description:
      "Interactive game world combining chatting with mini-games and metaverse-style social experience",
    link: "https://sahi.com",
    category: "Social / Simulation",
  },
];

// Recent Projects Portfolio
// AI Calling Agency Portfolio
export const aiCallingPortfolio = [
  {
    id: 76,
    image: SpeaksifyImg,
    title: "Speaksify",
    description: "AI-Powered Public Speaking Coach",
    link: "https://speaksify.com",
    category: "ai",
    type: "AI Calling Agency",
  },
];

// SaaS Portfolio
export const saasPortfolio = [
  {
    id: 77,
    image: ProjectsyImg,
    title: "Projectsy.ai",
    description: "AI-Powered Project & Task Management Platform",
    link: "https://projectsy.ai",
    category: "saas",
    type: "SaaS Project",
  },
  {
    id: 78,
    image: VirtuTeamsImg,
    title: "VirtuTeams",
    description: "Team Management & Remote Operations Platform",
    link: "https://virtuteams.com",
    category: "saas",
    type: "SaaS Project",
  },
];

// Recent Projects Portfolio (Deprecated/Empty)
export const recentProjects = [];


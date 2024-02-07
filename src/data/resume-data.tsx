import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Webster Mbangani",
  initials: "WM",
  location: "Harare, Zimbabwe, CAT",
  locationLink: "",
  about:
    "Software engineer focused on building products with extra attention to detail.",
  summary:
    "A dependable worker who has operated in high-stress environments and is capable of keeping composure. Has amassed a wealth of experience, expert technical and social skills that I am passionately seeking to leverage to add value to the organization. Core competencies include excellent interpersonal communication with great networking skills. Handles tasks with accuracy and efficiency. Very good at delivering results and meeting targets. Currently, I work mostly with C#, HTML5/CSS3 and JavaScript. I have over 4 years of experience working with companies and people around the world.",
  avatarUrl: "https://imgur.com/a/H2VAMW3",
  personalWebsiteUrl: "",
  contact: {
    email: "mirronai@gmail.com",
    tel: "+263779050002",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/websm/",
        icon: LinkedInIcon,
      },
    ],
  },
  work: [
    {
      company: "Oanob Private Hospital",
      link: "",
      badges: [],
      title: "IT Technician",
      logo: ,
      start: "01/2022",
      end: "01/2024",
      description:
        "Administration of Trifour’s TriMed Health Information System. Led teams to install on-site equipment then maintained and monitored them. Managed networks, servers and digital inventory and information. Data sorting. Set up security measures for data protection. Headed teams for stock auditing. Trained groups of employees in usage of company technology. Mediation and assistance between Trifour and the hospital during larger scale software breakdowns.",
    },
    {
      company: "Vertical Momentum",
      link: "https://www.facebook.com/verticalmomentum/",
      badges: [],
      title: "Technical Product Manager",
      logo: ,
      start: "08/2019",
      end: "07/2021",
      description:
        "Management of servers, digital inventory and information. Acquisition and installation of technological assets. Website design and development and data sorting. Maintenance of equipment and assets. Set up and monitoring of systems during events. Managed databases. Assisted employees in operation of equipment.",
    },
  ],
  skills: [
    "C#",
    "Unity",
    "HTML5",
    "CSS3",
    "JavaScript",
    "C",
    "C++"
    "Bash"
    "Expert Critical Thinking"
    "Adept at Hardware And Software Maintenance"
    "Fast Learner"
    "Meticulous Time Keeping"
    "Excellent Organization",
  ],
  projects: [
    {
      title: "Point and Click Adventure Game Framework",
      techStack: [
        "C#",
        "Unity",
      ],
      description: "Designed and built the framework for a mouse and keyboard controlled game in Unity using C#, with options for branching dialogue choices and paths, UI and pictures drawn and manipulated within the engine, robust saving and automatic saving system, adjustable fonts, volume and brightness controls and adapted that framework to be usable by persons with less expertise through writing in a txt file with simple commands.",
      logo: ,
      link: {
        label: "itch.io",
        href: "https://starlequins.itch.io",
      },
    },
    {
      title: "Vertical Momentum Website",
      techStack: ["HTML5", "CSS3"],
      description:
        "Created a website using HTML5 and CSS3 with both desktop and mobile versions and a data collection system for questions, bookings and other information.",
      logo: ,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Add-On Development",
      techStack: ["JavaScript"],
      description:
        "Creating add-ons in JavaScript for an engine to give users more control and functionality over the engines capabilities.",
      logo: ,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "POS Software",
      techStack: ["HTML5"],
      description:
        "Wrote a simple program that allows taking of orders, processing of payments, printing of receipts and invoices, tracking of inventory and management of employees in HTML5.",
      logo: ,
      link: {
        label: "",
        href: "",
      },
    },
    },
  ],
  education: [
    {
      school: "ALX Africa",
      degree: "Diploma in Software Engineering",
      start: "02/2023",
      end: "02/2024",
    },
    {
      school: "Gateway High School",
      degree: "Advanced Level Sciences (2 Bs, 1 C) and IGCSE (5 As and 5Bs)",
      start: "01/2016",
      end: "11/2021",
    },
  ],
  hobbies: [
    "Illustration",
    "Reading and writing literature",
    "Playing/Developing video games",
    "Listening to and composing music",
    "Playing tabletop roleplaying games",
  ],
} as const;

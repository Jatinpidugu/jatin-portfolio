import { FaLinkedin } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
import { GiRobotGolem } from "react-icons/gi";
import { FcScatterPlot } from "react-icons/fc";
import { TbFileTypeSql } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiTableau } from "react-icons/si";
import { GrBusinessService } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa";
import { SiDatadog } from "react-icons/si";
import { MdHistoryEdu } from "react-icons/md";
import { SiCredly } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";

import PROJECT_IMG_1 from "../assets/images/project_1.png"; 
import PROJECT_IMG_2 from "../assets/images/project_2.png"; 
import PROJECT_IMG_3 from "../assets/images/project_3.png"; 
import PROJECT_IMG_4 from "../assets/images/project_4.png"; 
import PROJECT_IMG_5 from "../assets/images/project_5.png"; 
import PROJECT_IMG_6 from "../assets/images/project_6.png"; 

export const MENU_LINKS = [
        { id: "01", label: "Home", offset: -100, to: "hero" }, 
        { id: "02", label: "Skills", offset: -80, to: "skills"}, 
        { id: "03", label: "About Me", offset: -80, to: "about" }, 
        { id: "04", label: "Projects", offset: -80, to: "projects"}, 
        { id: "05", label: "Contact", offset: -80, to: "contact"}, 
    ]; 
    
export const STATS = [
        {id: "01", count :"2024", label: 'Year of \nPassout'},
        {id: "02", count: "5", label: 'Certifications \nEarned'},
        {id: "03", count: "10", label: 'Projects \ndeveloped'},
        {id: "04", count: "15+", label: 'Skill \nlearned'},
    ]; 
        
export const SKILL_TABS = [ 
        { id: "01", label: "All", value: "all" },
        { id: "02", label: "Data Science", value: "data_science"},
        { id: "03", label: "Web Development", value: "web devlopment" }, 
        { id: "04", label: "Tools", value: "tools" }, 
        { id: "05", label: "Soft-Skills", value: "soft-skills" }, 
    ]; 

export const SKILLS = [
    {
        id: "01", 
        icon: IoLogoPython, 
        skil: "Python", 
        progress: 70, 
        type: "data_science", 
        description: "Experience in Python development aplication using Tkinter and Computer Vision Projects OpenCV and MediaPipe"
    },
    {    
        id: "02", 
        icon: GiArtificialIntelligence, 
        skil: "SuperVised Leaning", 
        progress: 80, 
        type: "data_science", 
        description: "Experience on datasets using Linear Regression, KNN, Ridge & Lassp Regression, SVR, Decsion Tree Regression and Random forest"
    }, 
    {  
        id: "03", 
        icon: FaRobot, 
        skil: "Un-SuperVised Leaning", 
        progress: 70, 
        type: "data_science", 
        description: "Experience on datasets using Classification Models"
    },
    {  
        id: "04", 
        icon: GiRobotGolem, 
        skil: "Deep leanring NLTP", 
        progress: 60, 
        type: "data_science", 
        description: "Created in Computer Vision projects using CNN, Mediapipe"
    },
    {  
        id: "05", 
        icon: FcScatterPlot, 
        skil: "Visualization", 
        progress: 75, 
        type: "data_science", 
        description: "Created visualization in dataset for various dataset using Machine Learning Models"
    },
    {  
        id: "06", 
        icon: TbFileTypeSql, 
        skil: "EDA", 
        progress: 80, 
        type: "data_science", 
        description: "Used SQL for data Analysis and Manipulation of large datasets"
    },
    {  
        id: "07", 
        icon: IoLogoHtml5, 
        skil: "HTML5", 
        progress: 70, 
        type: "web devlopment", 
        description: "Designed structural framework for service shops"
    },
    {  
        id: "08", 
        icon: FaCss3Alt, 
        skil: "CSS", 
        progress: 60, 
        type: "web devlopment", 
        description: "Used CSS and TailWind along with bootstrap to add and animate the website"
    },
    {  
        id: "09", 
        icon:  IoLogoReact, 
        skil: "React", 
        progress: 70, 
        type: "web devlopment", 
        description: "Basic Exprience in React+vite based projects and deployment"
    },
    {  
        id: "10", 
        icon:  SiTableau, 
        skil: "Tableau", 
        progress: 70, 
        type: "tools", 
        description: "Create Dashboards and dataset analaysis for the various datasets of the kaggle"
    },
    {  
        id: "11", 
        icon: GrBusinessService, 
        skil: "Power-BI", 
        progress: 80, 
        type: "tools", 
        description: "Basic Knowledge of PowerBI data relations and columns Manipulation and data cleaning"
    },
    {  
        id: "12", 
        icon: FaNetworkWired, 
        skil: "Networking Basics", 
        progress: 90, 
        type: "tools", 
        description: "Basics of hardware of the networking and the tools used in the networking"
    },
    {  
        id: "13", 
        icon:  SiDatadog, 
        skil: "Context Understanding", 
        progress: 90, 
        type: "soft-skills", 
        description: "Coursera Business Intelligence cerified in the Context Understanding and storys of data"
    },
    {  
        id: "14", 
        icon:  MdHistoryEdu, 
        skil: "Data Story Telling", 
        progress: 90, 
        type: "soft-skills", 
        description: "Coursera Business Intelligence and Data analytics certified in the Context Understanding and storytelling of data"
    },

];

export const ABOUT_ME = { 
    content: "As a Bachler of Technology Graduate in Computer Science and Engineering of Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, Madhya Pradesh. I am eager to fully utilize my skill of quick comprehension, diligent work ethic, and effective communication to contribute to organizational goals. I am committed to learning and growing within a dynamic where I can apply my skills to complete tasks efficiently, develop innovative solutions, and make a meaningful impact.",
    socialLinks: [
        { id: "01", label: "Kaggle", icon: SiKaggle, link: "https://www.kaggle.com/jatinpidugu" },
        { id: "02", label: "Github", icon: FaSquareGithub, link: "https://github.com/Jatinpidugu"},
        { id: "03", label: "Credly", icon: SiCredly, link: "https://www.credly.com/users/jatin-pidugu" }, 
        { id: "04", label: "Linkedln", icon: FaLinkedin, link: "jatin-pidugu" }, 
    ],
    email: "jatinpidugu@gmail.com", 
    phone: "+91 7988989479", 
    LinkedIn: "https://www.linkedin.com/in/jatin-pidugu-857b82218", 
};

export const PROJECTS = [
    {
        id: 1,
        title: "Sign Language Real-time Detection using Media-pipe",
        image: PROJECT_IMG_1,
        tag: ["Tkinter", "Media-pipe", "Mediapipe","CNN","TensorFlow","Python","Pytextspeech"]
    },
    {
        id: 2,
        title: "Personal Portfolio using React+vite",
        image: PROJECT_IMG_2,
        tag: ["React", "VITE", "Taiwind","CSS","Javascipt"]
    },
    {
        id: 3,
        title: "Data Science and Analytics Projects",
        image: PROJECT_IMG_3,
        tag: ["Pandas","Python", "Sci-kit Learn", "MatplotLib","Numpy","SQL"]
    },
    {
        id: 4,
        title: "SQL Connectivity and DATA Manipulation in EDA",
        image: PROJECT_IMG_4,
        tag: ["EDA", "STATs-Model", "Connectivity","Query management"]
    },
    {
        id: 5,
        title: "Power-BI Projects using EXCEL, CSV Files",
        image: PROJECT_IMG_5,
        tag: ["Power-BI", "DAX", "DATA Cleaning", "Visualization of Data","Data Relation Management"]
    },
    {
        id: 6,
        title: "Voting Site Frontend",
        image: PROJECT_IMG_6,
        tag: ["HTML", "CSS", "Flask", "Python", "SQL","EXCEL"]
    },
];

export const myProjects = [
  {
    id: 1,
    title: "Study Notion",
    description:
      "Provides an online learning platform where students can access courses, track progress, and engage with educators for skill development and knowledge growth.",
    subDescription: [
      "Developed a full-stack e-learning platform using the MERN stack, enabling course creation, enrollment, and content delivery.",  
      "Implemented secure authentication and authorization with JWT and bcrypt for user data protection.",  
      "Designed an intuitive, responsive frontend with React and Tailwind CSS for enhanced usability.",  
      "Integrated payment gateway, progress tracking, and instructor dashboards for improved functionality.",

    ],
    href: "https://github.com/TejasDhamankar/Study-Notion/tree/master",
    logo: "",
    image: "/assets/projects/StudyNotion.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 6,
        name: "JWT",
        path: "/assets/logos/jwt.svg",
      },
    ],
    
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A Netflix Clone with secure authentication and authorization system built on Firebase Firestore.",
    subDescription: [
      "Implemented authentication using Firebase Authentication with JWT support for secure login and signup.",
      "Designed role-based access control (RBAC) for managing different levels of user access.",
      "Built a React-based frontend styled with Tailwind CSS for a responsive and modern UI.",
      "Integrated Firestore as the backend database to store user data and subscription details.",
    ],
    href: "https://github.com/TejasDhamankar/Nterflix-clone", // add your deployed link here if you want
    logo: "",
    image: "/assets/projects/netflix-clone.png", // update with your actual image
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  
  {
    id: 3,
    title: "Employee Management System",
    description:
      "A full-stack MERN application to manage employee records with a modern UI for creating, storing, and managing employee details in a database.",
    subDescription: [
      "Developed a full-stack MERN app where users can add and manage employee details such as name, email, title, department, and role.",
      "Built RESTful APIs with Express.js and Node.js for employee data management.",
      "Integrated MongoDB for secure and efficient storage of employee information.",
      "Designed a clean and responsive frontend using React and TailwindCSS.",
      "Implemented form validation and error handling for smooth user experience.",
    ],
    href: "https://github.com/TejasDhamankar/Employee-Tracker.github.io", 
    logo: "",
    image: "/assets/projects/employee-management.png", 
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  
  {
    id: 4,
    title: "GIF Generator",
    description:
      "A React app that fetches random GIFs and supports keyword search, wrapped in a clean Tailwind UI.",
    subDescription: [
      "Built with React and Tailwind CSS using reusable components (Random, Tag, Spinner).",
      "Implemented random GIF retrieval and search via a GIF API with an API key stored in .env.",
      "Created a custom hook to fetch by tag and manage loading/error states.",
      "Added a responsive layout and smooth UX with a loading spinner and form validation.",
    ],
    href: "https://github.com/TejasDhamankar/React-Gif-Generator", // add your repo or live link
    logo: "",
    image: "/assets/projects/gif.png", // point to your screenshot
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 5,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  }
  
];

export const experiences = [
  {
    date: "January 2024",
    title: "Codesoft",
    job: "C++ Intern",
    contents: [
      "Completed a 1-month internship focused on C++ programming.",
      "Worked on developing and debugging small modules and algorithms.",
      "Learned practical implementation of data structures and object-oriented programming.",
    ],
  },
 
];

// src/constants/index.js (or wherever you keep constants)
export const certificates = [
  {
    title: "C++ Programming Certificate",
    issuer: "Codesoft",
    img: "/assets/certificates/cpp-certificate.png",
    link: "https://example.com/cpp-certificate", // optional
  },
  {
    title: "Java Programming Certificate",
    issuer: "Some Institute",
    img: "/assets/certificates/java-certificate.png",
    link: "https://example.com/java-certificate", // optional
  },
];


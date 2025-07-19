type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string | null;
  githubLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ad & Costsheet Generator",
    subtitle: "Designed for efficient ad creation and cost sheet generation.",
    description:
      "Ad & Costsheet Generator is an early coding project designed to streamline tasks for car dealerships by automating the creation of folders and advertisements. Developed for use in a Command Terminal, it allows efficient input of vehicle information, saving time and improving reliability. Despite its lack of visual design due to being created before I learned HTML and CSS, the program is currently used by two dealerships in Birmingham, UK. This project highlights my ability to deliver practical, efficient solutions to real-world problems.",
    image: "Ad&CostsheetGenerator.png",
    link: null,
    githubLink: "https://github.com/Usman241002/Ad-CostsheetGenerator",
  },
  {
    id: 2,
    title: "ExTracker",
    subtitle: "User friendly team expense tracker for businesses",
    description:
      "ExTracker is a user-friendly web application for managing financial records. It allows users to log expenses, track spending, and manage unapproved claims with an approval workflow for managers. Featuring a clean green-themed interface, it ensures usability and readability. Built with PHP and MySQL, this project demonstrates my ability to create efficient full-stack applications with secure user authentication and dynamic front-end functionality.",
    image: "ExpenseTracker.png",
    link: null,
    githubLink: "https://github.coventry.ac.uk/5019CMD-2425/khalidu5-sem1",
  },
  {
    id: 3,
    title: "Portfolio MK1",
    subtitle: "My first attempt at creating a personal development portfolio",
    description:
      "Portfolio MK1 was my first attempt at creating a personal development portfolio. The portfolio was created using Standard HTML, CSS and JavaScript. It showcases my early skills in web development and provides a glimpse into my journey as a developer, how certain skills and patterns have been developed over time. It also serves as a testament to my ability to learn and adapt quickly to new technologies and frameworks, when compared to the current portfolio.",
    image: "Portfoliomk1.png",
    link: null,
    githubLink: "https://github.com/Usman241002/Usman241002.github.io",
  },
  {
    id: 4,
    title: "ChatApp",
    subtitle:
      "A real time anonymous chat application using Typescript, React and Redux",
    description:
      "ChatApp is a real-time anonymous chat application built using React, Redux and a library called Socket.IO. It allows users to sign up anonymously and chat with users across the globe in real-time without revealing their identity. The application is designed to be user-friendly and easy to use, with a clean and modern interface. It also features a variety of features such as message notifications, private messaging, and profile searching.",
    image: "ChatApp.png",
    link: "https://chat-app-mk4.vercel.app/",
    githubLink: "https://github.com/Usman241002/ChatApp-Mk4",
  },
];

export default projects;

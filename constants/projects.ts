import { Project } from "@/Interface/projects";
import Wave from "../public/wave.jpg";
import Medicare from "../public/medicare.jpg";
import Shop from "../public/e-commerce.png";
import Security from "../public/security.jpg";
import Java from "../public/java.jpg";
import Swiftwheels from "../public/swiftwheels.png"
import Readly from "../public/readly.jpg"

export const projects: Project[] = [
  {
    slug: "readly",
    title: "Readly",
    brief: "A platform for sharing, borrowing, and returning books.",
    description:
      "A Book Social Network for sharing, borrowing, and returning books. Built with Spring Boot and Angular, featuring user-friendly interfaces, file upload for book covers, email verification, and secure account management.",
    image: Readly,
    stack: [
      "Java",
      "Spring Boot",
      "keycloak",
      "Spring Data JPA",
      "TypeScript",
      "PostgreSQL",
      "Angular",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions",
    ],
    url: "",
    repository: "https://github.com/MohamedBoukthir/readly",
  },
  {
    slug: "swiftwheels",
    title: "SwiftWheels",
    brief: "Redefining car rentals with a dynamic web app that offers seamless booking, real-time availability, and an intuitive user interface.",
    description:
      "SwiftWheels is a powerful Car Rental Project! I'll show you how to build a dynamic web app with Spring Boot, Angular, daisy UI, tailwindCSS, and MySQL.",
    image: Swiftwheels,
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "TypeScript",
      "MySQL",
      "Angular",
      "Tailwind CSS",
    ],
    url: "",
    repository: "https://github.com/MohamedBoukthir/Car_Rental",
  },
  {
    slug: "wave",
    title: "Wave",
    brief: "Share thoughts in a snap, connect with friends, and stay updated.",
    description:
      "Meet Wave – share your thoughts in a snap, connect with friends, and stay updated with what's happening. It's social media made easy.",
    image: Wave,
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Clerk",
      "Tailwind CSS",
    ],
    url: "https://wave-pi.vercel.app/",
    repository: "https://github.com/MohamedBoukthir/Wave",
  },
  {
    slug: "medicare",
    title: "Medicare",
    brief: "Easy doctor appointments, quick bookings.",
    description:
      "Book doctor appointments hassle-free with our simple web app. Quick and secure payments included.",
    image: Medicare,
    stack: [
      "React",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    url: "",
    repository:
      "https://github.com/MohamedBoukthir/Doctor-Appointment-Booking-MERN-Stack",
  },
  {
    slug: "shop",
    title: "Shop",
    brief:
      "Your go-to for easy, secure online shopping. Explore, click, and enjoy doorstep delivery. ",
    description:
      "Welcome to Shop Now – where your online shopping experience is simplified. Discover a world of products, click to purchase, and enjoy seamless doorstep delivery. Easy, secure, and at your fingertips.",
    image: Shop,
    stack: [
      "React",
      "JavaScript",
      "Redux",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
    ],
    url: "",
    repository: "https://github.com/MohamedBoukthir/Shop-Ecommerce",
  },
  {
    slug: "java-growth",
    title: "JavaGrowth",
    brief:
      "Your quick reference for mastering Java programming. Essential syntax, key concepts, and tips at your fingertips.",
    description:
      "your go-to resource for mastering Java programming. Whether you're a beginner or an experienced developer, this concise guide provides essential syntax, key concepts, and valuable tips to enhance your coding skills. ",
    image: Java,
    stack: ["Java", "OOP", "IntelliJ idea"],
    url: "",
    repository: "https://github.com/MohamedBoukthir/JavaGrowth",
  },
  {
    slug: "web-security",
    title: "WebSecurity",
    brief:
      "Set up authentication, user registration, and control access effortlessly. Explore the world of safe coding with RESTful APIs.",
    description:
      "Learn to easily add authentication, manage user registration, and control access. Dive into the secure realm of RESTful APIs, where coding becomes safer and more straightforward.",
    image: Security,
    stack: [
      "Java",
      "JWT",
      "IntelliJ idea",
      "Spring",
      "Spring Security",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
    ],
    url: "",
    repository: "https://github.com/MohamedBoukthir/webSecurity",
  },
];

import {
  FiPenTool,
  FiCode,
  FiMonitor,
} from "react-icons/fi";

export const services = [
  {
    id: 1,
    slug: "frontend-development",
    number: "01",
    icon: FiPenTool,

    title: "Frontend Development",

    description:
      "Modern, responsive and user-friendly web interfaces built with clean code and a strong focus on user experience.",

    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    price: "$600",

    features: [
      "Responsive website development",
      "React.js frontend development",
      "Mobile, tablet, and desktop optimization",
      "Reusable and maintainable components",
      "Modern UI interactions and animations",
    ],
  },

  {
    id: 2,
    slug: "react-development",
    number: "02",
    icon: FiCode,

    title: "React.js Development",

    description:
      "Scalable and interactive React.js applications built with reusable components, clean architecture, and smooth performance.",

    technologies: [
      "React.js",
      "React Router",
      "JavaScript",
      "REST API",
    ],

    price: "$700",

    features: [
      "Custom React.js applications",
      "Reusable component development",
      "React Router integration",
      "REST API integration",
      "Clean and scalable frontend architecture",
    ],
  },

  {
    id: 3,
    slug: "responsive-ui-development",
    number: "03",
    icon: FiMonitor,

    title: "Responsive UI Development",

    description:
      "Clean and professional user interfaces that work smoothly across desktops, tablets, and mobile devices.",

    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],

    price: "$500",

    features: [
      "Responsive UI implementation",
      "Desktop and mobile optimization",
      "Modern website layouts",
      "Cross-device compatibility",
      "Clean and consistent styling",
    ],
  },
];
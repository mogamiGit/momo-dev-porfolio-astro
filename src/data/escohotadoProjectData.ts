import type { CardData } from "../components/organism/DetailProject/types";

export const description =
  "I contributed to the end-to-end creation of a website and knowledge community from scratch, working collaboratively with another developer. I was responsible for designing the interface, ensuring visual consistency and efficient component reuse throughout React by implementing a well-structured design system implemented in Storybook. <br><br>I led the integration of functional components in the prototype, prioritizing optimization of the user experience and scalability. To ensure high-quality, secure code, I utilized advanced tools and approaches that facilitated the development of a robust solution.";

export const button = {
  link: "https://escohotado-design.nexolabs.dev/?path=/docs/atoms-button--docs",
  text: "Design System Storybook",
};

export const tags = ["Storybook", "React", "Tailwind CSS", "TypeScript", "motion.dev"];

export const infoDetail = {
  year: "2025",
  client: "La Emboscadura SL",
  description: description,
  tags: tags,
  button: button,
};

export const techs = [
  {
    title: "Interface Design",
    description:
      "Led the design of a clean, modern, and cohesive interface using <span class='font-bold text-black dark:text-white'>Figma</span>, ensuring an engaging visual experience aligned with the project’s identity.",
    emoji: "🎨",
  },
  {
    title: "Componentization",
    description:
      "Developed functional components using <span class='font-bold text-black dark:text-white'>React</span> and <span class='font-bold text-black dark:text-white'>Tailwind CSS</span>, ensuring a robust and flexible structure that streamlined project development and maintenance.",
    emoji: "🔧",
  },
  {
    title: "Design System",
    description:
      "Created and implemented a comprehensive design system using <span class='font-bold text-black dark:text-white'>Storybook</span>, ensuring visual consistency and efficient component reuse across the project.",
    emoji: "📚",
  },
  {
    title: "Dynamic Animations",
    description:
      "Integrated interactive animations using <span class='font-bold text-black dark:text-white'>motion.dev</span> to enhance user experience, adding dynamic elements to' the interface without compromising performance.",
    emoji: "💫",
  },
];

export const cards: CardData[] = [
  {
    url: "/images/projects/escohotado/top_03_community.jpg",
    title: "Dynamic Grid Content",
    id: 1,
    type: 'image',
  },
  {
    url: "/images/projects/escohotado/top_01_community.jpg",
    title: "User Login",
    id: 1,
    type: 'image',
  },
  {
    url: "/images/projects/escohotado/top_02_community.jpg",
    title: "Responsive design",
    id: 1,
    type: 'image',
  },
  {
    url: "/images/projects/escohotado/top_04_community.jpg",
    title: "User interactions and animations",
    id: 1,
    type: 'image',
  },
];

export const horizontalScrollCarousel = {
  title: "Design and UX: Dynamic Grid and Interactive Elements",
  description:
    "The project involved creating a dynamic grid to display various content types in an organized and flexible way, using a dynamic board concept. <br><br>Components were designed to adjust to different screen sizes, ensuring a smooth, consistent user experience across devices. A parallax effect was applied to the books on hover, adding interactivity and enhancing the user experience.",
  cards: cards,
};
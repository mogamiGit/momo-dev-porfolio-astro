import type { CardData } from "../components/organism/DetailProject/types";

export const description =
  "I was responsible for the complete development of a modern website for a private English teacher, working autonomously to deliver a solution tailored to the client's needs. I designed and implemented an intuitive, visually appealing interface using React and Tailwind CSS, ensuring a seamless and engaging user experience across devices. <br><br>My work focused on creating reusable and well-structured components, optimizing the codebase for maintainability and scalability. I ensured best practices in accessibility and performance, and collaborated closely with the client to reflect their teaching style and values throughout the digital presence.";

export const button = {
  link: "https://jayfaris.nexolabs.xyz/",
  text: "Visit Website",
};

export const tags = ["React", "Astro","Tailwind CSS", "TypeScript","Rive", "Motion.dev"];

export const infoDetail = {
  year: "2025",
  client: "Jay Faris",
  description: description,
  tags: tags,
  button: button,
};

export const techs = [
  {
    title: "Interactive Animations",
    description:
      "Integrated advanced, interactive animations using <span class='font-bold text-black dark:text-white'>Rive</span> and <span class='font-bold text-black dark:text-white'>Motion.dev</span>, bringing motion and personality to the website.",
    emoji: "✨",
  },
  {
    title: "Component Architecture",
    description:
      "Built modular and reusable components with <span class='font-bold text-black dark:text-white'>React</span> and <span class='font-bold text-black dark:text-white'>Tailwind CSS</span>, facilitating rapid development and easy maintenance.",
    emoji: "🔧",
  },
  {
    title: "UI/UX Design",
    description:
      "Designed a user-friendly and visually attractive interface with <span class='font-bold text-black dark:text-white'>Figma</span>, ensuring the website is engaging and accessible to a wide range of users.",
    emoji: "🎨",
  },
];

export const cards: CardData[] = [
  {
    url: "/videos/englishTeacher/jay_icons_animated.mp4",
    title: "Icons Animation by Rive",
    id: 1,
    type: 'video',
  },
  {
    url: "/videos/englishTeacher/jay_carousel_video.mp4",
    title: "Interactive Carousel Animated",
    id: 2,
    type: 'video',
  },
  {
    url: "/videos/englishTeacher/jay_social_media.mp4",
    title: "Social Media",
    id: 3,
    type: 'video',
  },
];

export const horizontalScrollCarousel = {
  title: "Immersive Animations: Rive & Motion.dev in Action",
  description:
    "The project highlights a responsive layout that adapts seamlessly across devices, ensuring clarity and usability for all visitors. <br><br>Special emphasis was placed on interactive and animated experiences: advanced animations were integrated using <span class='font-bold text-black dark:text-white'>Rive</span> and <span class='font-bold text-black dark:text-white'>Motion.dev</span>, bringing dynamic, engaging motion to the interface. These animations not only enhance the visual appeal but also create a memorable and lively user experience throughout the site.",
  cards: cards,
};

export const iconsRiveDecoration = [
  {
    src: "/images/projects/englishTeacher/ninjaCombat.riv",
    stateMachine: "State Machine 1",
    className: "w-36 h-36 absolute bottom-0 right-0 pr-5 sm:w-[200px] md:h-[200px]",
  },
  {
    src: "/images/projects/englishTeacher/claquetaClap.riv",
    stateMachine: "State Machine 1",
    className: "hidden md:block w-28 h-28 absolute -top-20 md:top-0 left-0 md:w-44 md:h-44",
  },
]
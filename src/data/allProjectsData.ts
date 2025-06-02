export const projects = [
  {
    title: 'Animate Your English',
    subtitle: 'React · Rive',
    description: 'Personal English tutoring website combining custom animations and a seamless user experience.',
    buttons: [
      {
        text: 'Go to Detail project',
        link: '/projectEnglishTeacher',
        icon: {
          src: 'images/code-analysis.svg',
          alt: 'magnifying glass code icon'
        }
      },
    ],
    checks: [
      "React",
      "Astro",
      "Rive",
      "Motion.dev"
    ],
    mobileImgUrl: "englishTeacher/project04-image-mobile.jpg",
    desktopImgUrl: "englishTeacher/project04-image-desktop.jpg",
    altImage: 'Jay faris Home Project',
    onClick: () => console.log('Animate Your English')
  },
  {
    title: 'Dynamic Knowledge Hub',
    subtitle: 'React · Storybook',
    description: 'This website will serve as the official central hub for the community of philosopher and thinker Escohotado.',
    buttons: [
      {
        text: 'Go to Detail project',
        link: '/projectCommunity',
        icon: {
          src: 'images/code-analysis.svg',
          alt: 'magnifying glass code icon'
        }
      },
    ],
    checks: [
      "React",
      "Storybook",
      "Motion.dev"
    ],
    mobileImgUrl: "escohotado/project03-image-mobile.jpg",
    desktopImgUrl: "escohotado/project03-image-desktop.jpg",
    altImage: 'Collage photos of screens of Escohotado Project',
    onClick: () => console.log('Dynamic Knowledge Hub Clicked')
  },
  {
    title: 'Dungeon Crawl',
    subtitle: 'iOS 17',
    description: 'Empowers Dungeon Masters (DMs) to effortlessly manage their parties and access crucial Dungeons & Dragons data, streamlining the game experience',
    buttons: [
      {
        text: 'See the flow of dungeon',
        link: 'https://www.figma.com/proto/1P0S2xuMXPOnG1txYnEDmI/Dungeon-Crawl-DnD-App?node-id=593-5760&viewport=-1169%2C238%2C0.16&t=hSmtEpWWlch2yrjX-0&scaling=scale-down&starting-point-node-id=593%3A5760',
        icon: {
          src: 'images/figma-icon.svg',
          alt: 'figma icon'
        }
      },
      {
        text: 'Enter the dungeon',
        link: 'https://github.com/mogamiGit/Dungeon-Crawl',
        icon: {
          src: 'images/github-icon.svg',
          alt: 'github icon'
        }
      },
    ],
    checks: [
      "iOS17 - ScrollView new",
      "SwiftData",
      "Async Await"
    ],
    mobileImgUrl: "project01-image-mobile.jpg",
    desktopImgUrl: "project01-image-desktop.jpg",
    altImage: 'user profile picture',
    onClick: () => console.log('Dungeon Crawl Clicked')
  },
  {
    title: 'OhTaku!',
    subtitle: 'iOS 16',
    description: 'Discover and track your favorite anime. Dive into a vast database of titles, consult detailed information, and effortlessly track your progress with a tap.',
    buttons: [
      {
        text: 'Start your Isekai Adventure',
        link: 'https://github.com/mogamiGit/Ohtaku',
        icon: {
          src: 'images/github-icon.svg',
          alt: 'github icon'
        }
      },
    ],
    checks: [
      "Lottie animation",
      "Local management"
    ],
    mobileImgUrl: "project02-image-mobile.jpg",
    desktopImgUrl: "project02-image-desktop.jpg",
    altImage: 'user profile picture',
    onClick: () => console.log('OhTaku! Clicked')
  }
]
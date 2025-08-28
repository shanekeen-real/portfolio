export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  client: string;
  role: string;
  timeline: string;
  tools: string[];
  coverImage: string;
  heroImage: string;
  scope: string;
  problem: string;
  research: {
    description: string;
    artifacts: string[];
  };
  concept: {
    description: string;
    artifacts: string[];
  };
  iteration: {
    description: string;
    artifacts: string[];
  };
  finalProduct: {
    description: string;
    artifacts: string[];
  };
  outcome: {
    description: string;
    metrics?: string[];
    learnings: string[];
  };
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: "yellow-dollar",
    slug: "yellow-dollar",
    title: "Yellow Dollar",
    shortDescription: "A mobile app that helps users manage their time more effectively by gamifying task completion.",
    fullDescription: "Yellow Dollar is a mobile application designed to help users manage their time more effectively through gamification and smart task prioritization.",
    client: "Personal Project",
    role: "UI/UX Designer & Developer",
    timeline: "3 months",
    tools: ["Figma", "React Native", "TypeScript", "Firebase"],
    coverImage: "/assets/yellowdollar_g.png",
    heroImage: "/assets/unqueue-hero.svg",
    scope: "UI/UX Design, Branding, 3D Design, Wireframing, Research & Prototyping",
    problem: "Users struggle with task management and often feel overwhelmed by their to-do lists, leading to procrastination and decreased productivity.",
    research: {
      description: "Conducted user interviews with 15 professionals to understand their task management pain points and preferences.",
      artifacts: [
        "/assets/unqueue-research-1.svg",
        "/assets/unqueue-research-2.svg",
        "/assets/unqueue-research-3.svg"
      ]
    },
    concept: {
      description: "Created wireframes and prototypes focusing on simplicity and visual hierarchy, with careful attention to micro-interactions.",
      artifacts: [
        "/assets/unqueue-design-1.svg",
        "/assets/unqueue-design-2.svg",
        "/assets/unqueue-design-3.svg"
      ]
    },
    iteration: {
      description: "Iterative design process with user testing and feedback integration to refine the user experience.",
      artifacts: [
        "/assets/unqueue-design-1.svg",
        "/assets/unqueue-design-2.svg",
        "/assets/unqueue-design-3.svg"
      ]
    },
    finalProduct: {
      description: "Final mobile application with gamification elements and smart task prioritization features.",
      artifacts: [
        "/assets/unqueue-final-ui.svg",
        "/assets/unqueue-user-flow.svg",
        "/assets/unqueue-wireframes.svg"
      ]
    },
    outcome: {
      description: "The app achieved a 4.8/5 rating on app stores with over 10,000 downloads in the first month.",
      metrics: [
        "40% increase in user task completion rates",
        "60% reduction in user-reported stress levels",
        "85% user retention after 30 days"
      ],
      learnings: [
        "Gamification works best when it feels natural and not forced",
        "Users value simplicity over feature-rich interfaces",
        "Personalization significantly improves user engagement"
      ]
    },
    externalLink: "https://yellowdollar.com"
  },
  {
    id: "kickoff",
    slug: "kickoff",
    title: "Kickoff",
    shortDescription: "A social metaverse platform for streaming Premier League football, providing a much needed solution to the growing epidemic of illegal streaming.",
    fullDescription: "Kickoff is a social platform enabling users to meet up virtually and watch live football matches.",
    client: "Personal Project",
    role: "UI/UX Designer",
    timeline: "12 weeks",
    tools: ["Framer", "Cinema 4D", "Figma", "Blender"],
    coverImage: "/assets/Kickoff.png",
    heroImage: "/assets/translatebot-hero.svg",
    scope: "UI/UX Design, Branding, 3D Design, Wireframing, Research & Prototyping",
    problem: "As an avid football fan, I have become all too familiar with the growing piracy crisis the broadcast companies are facing when it comes to online streaming. So I wanted to try and find a solution which would appeal to both the companies and the fans.",
    research: {
      description: "After undertaking many research studies, I came to the conclusion that fans would in fact be happier paying for a stable all in-one product. As shown in other case studies such as Limewire/Spotify, evidence shows devoted users will actually rather pay if the product is more convenient and stable in comparison to the illegal alternatives.",
      artifacts: [
        "/assets/translatebot-research-1.svg",
        "/assets/translatebot-research-2.svg",
        "/assets/translatebot-research-3.svg"
      ]
    },
    concept: {
      description: "I wanted to create a platform where fans could not only watch their team every week, but could also interact and network with other fans. So, I created a blueprint which outlines the different functions and features of the service.",
      artifacts: [
        "/assets/translatebot-command-flow.svg",
        "/assets/translatebot-command-analysis.svg",
        "/assets/translatebot-user-research.svg"
      ]
    },
    iteration: {
      description: "Starting with wireframes allowed me to quickly sketch out ideas and then throughout the development of this project, frequent user testing sessions were conducted with the target market to ensure both the features and design was aligned with their expectations. Before working on the branding for this project, I decided to spend longer on refining the layout for each of the screens, this proved beneficial later on throughout the development. Once I was satisfied with the layout and user flow, I started developing the designs by adding content and experimenting with the execution of the different branding elements. I used a small amount of 3D design to implement within the final concept, to do this I used Blender and Cinema 4D to create, light and render an environment which replicated how the environment could look if further developed.",
      artifacts: [
        "/assets/translatebot-dashboard-wireframes.svg",
        "/assets/translatebot-final-ui.svg",
        "/assets/translatebot-command-flow.svg"
      ]
    },
    finalProduct: {
      description: "12 Week Design Process / Solo Project / 2023.",
      artifacts: [
        "/assets/translatebot-final-ui.svg",
        "/assets/translatebot-dashboard-wireframes.svg",
        "/assets/translatebot-command-flow.svg"
      ]
    },
    outcome: {
      description: "A social metaverse platform that addresses illegal streaming while providing a legitimate, engaging alternative for football fans.",
      learnings: [
        "Users prefer stable, convenient paid services over unreliable free alternatives",
        "Social features enhance user engagement and retention",
        "3D design elements can significantly improve user experience in digital platforms"
      ]
    }
  },
  {
    id: "aurora-roofing",
    slug: "aurora-roofing",
    title: "Aurora Roofing",
    shortDescription: "A five page web-design created for a local roofing company.",
    fullDescription: "A functional and professional modern 5-page website for a roofing agency, increasing customer retention, conversion and brand awareness.",
    client: "Local Roofing Company",
    role: "UI/UX Designer",
    timeline: "4 weeks",
    tools: ["Figma", "Framer", "Adobe XD", "Sketch", "InVision"],
    coverImage: "/assets/Aurora Roodfing.png",
    heroImage: "/assets/infinitevps-hero.svg",
    scope: "UI/UX Design, Branding, Research, Wireframing, Prototyping, Responsive Web Design & SEO",
    problem: "In the roofing industry, outdated websites cost revenue and visibility. I designed a mobile-responsive site that streamlined user journeys, amplified CTAs, and showcased services boosting conversions by 30% through enhanced SEO and UX.",
    research: {
      description: "Through stakeholder interviews and competitor analysis, I identified key UX patterns and conversion barriers across ~10 roofing websites. These actionable insights directly informed high-fidelity wireframes that met client expectations for usability and conversion optimization.",
      artifacts: [
        "/assets/infinitevps-research-1.svg",
        "/assets/infinitevps-research-2.svg",
        "/assets/infinitevps-research-3.svg"
      ]
    },
    concept: {
      description: "A functional and professional modern 5-page website for a roofing agency, increasing customer retention, conversion and brand awareness.",
      artifacts: [
        "/assets/infinitevps-dashboard-wireframes.svg",
        "/assets/infinitevps-monitoring-ui.svg",
        "/assets/infinitevps-pain-points.svg"
      ]
    },
    iteration: {
      description: "Using a structured 0-1 design sprint framework, I conducted 3 prioritised feedback sessions with stakeholders to refine wireframes. This iterative process resolved usability conflicts early, ensuring the final UI aligned with both user needs and business goals through rapid prototyping, iteration and validation. From here I was able to replicate this process with the initial wireframe drafts for the mobile versions, upon which I iterated and developed based on the feedback I received at the testing intervals of the project. After finalizing brand guidelines, I utilised Figma's component system to implement the approved design language across all 5 website pages. This maintained consistent visual execution throughout every interface element, ready for development. During the final Framer implementation phase, I conducted structured typography and metadata experiments to maximize SEO performance. Through collaborative workshops with stakeholders, we optimized heading hierarchies and semantic mark-up, resulting in a technically polished launch that enhanced organic discoverability.",
      artifacts: [
        "/assets/infinitevps-user-journey.svg",
        "/assets/infinitevps-final-dashboard.svg",
        "/assets/infinitevps-monitoring-ui.svg"
      ]
    },
    finalProduct: {
      description: "4 Week Design Process / Solo Project / 2024.",
      artifacts: [
        "/assets/infinitevps-final-dashboard.svg",
        "/assets/infinitevps-monitoring-ui.svg",
        "/assets/infinitevps-dashboard-wireframes.svg"
      ]
    },
    outcome: {
      description: "The platform successfully onboarded 500+ enterprise clients and achieved 95% user satisfaction scores.",
      metrics: [
        "30% boost in conversions through enhanced UX",
        "Improved SEO performance and organic discoverability",
        "Enhanced customer retention and brand awareness"
      ],
      learnings: [
        "Structured design sprints with stakeholder feedback are crucial for business alignment",
        "Component systems ensure consistent visual execution across all pages",
        "SEO optimization should be integrated throughout the design process"
      ]
    }
  },
  {
    id: "gucci",
    slug: "gucci",
    title: "Gucci",
    shortDescription: "An in-store conceptual experience, made to get users back into physical stores after the COVID-19 lockdowns.",
    fullDescription: "An in-store conceptual experience, made to get users back into physical stores after the COVID-19 lockdowns.",
    client: "Gucci",
    role: "UI/UX Designer",
    timeline: "12 weeks",
    tools: ["Adobe XD", "Photoshop", "Cinema 4D", "Figma"],
    coverImage: "/assets/Gucci.png",
    heroImage: "/assets/wrona-hero.svg",
    scope: "UI/UX Design, 3D Design, App Design, Wireframing, Research & Prototyping",
    problem: "In response to the significant decline in physical retail purchases, this project was aimed at revitalizing in-store experiences to motivate customers to return to physical locations.",
    research: {
      description: "I conducted both primary and secondary research into the Gucci brand design and from this I decided I would keep with the traditional Gucci aesthetic and brand material. I also undertook surveys and interviews with the Gucci customer base to realize their pain points with the company and their current experience. Alongside this, I performed an in-person analysis of the store and its different components, where I created a service blueprint map to help me find where the room for improvement and opportunity was.",
      artifacts: [
        "/assets/wrona-research-1.svg",
        "/assets/wrona-research-2.svg",
        "/assets/wrona-research-3.svg"
      ]
    },
    concept: {
      description: "Give people a reason to visit in store and create a talking point within the community, in aim of converting more sales. To achieve this, my idea was to implement a physical in-store assistant in the form of the Guccibot.",
      artifacts: [
        "/assets/wrona-competitor-analysis.svg",
        "/assets/wrona-stakeholder-interviews.svg",
        "/assets/wrona-design-system.svg"
      ]
    },
    iteration: {
      description: "As with all projects, I started by creating wireframes, for both the physical interface and the app interface. It was important to maintain a consistent aesthetic across both the mobile and physical interfaces so in this early stage I decided on using a box layout with matching typography and colour. From here I was able to keep developing and refining each screen, experimenting with different variations of content and typography. I followed a similar process for the app design, using user feedback from testing sessions as a metric for gradual improvement with each iteration.",
      artifacts: [
        "/assets/wrona-3d-mockups.svg",
        "/assets/wrona-final-website.svg",
        "/assets/wrona-design-system.svg"
      ]
    },
    finalProduct: {
      description: "12 Week Design Process / Solo Project / 2023.",
      artifacts: [
        "/assets/wrona-final-website.svg",
        "/assets/wrona-3d-mockups.svg",
        "/assets/wrona-design-system.svg"
      ]
    },
    outcome: {
      description: "The platform gained 100,000 users in the first year with high engagement rates and positive user feedback.",
      learnings: [
        "Maintaining brand consistency across physical and digital interfaces is crucial",
        "User feedback from testing sessions drives iterative improvement",
        "Physical retail experiences can be enhanced through digital innovation"
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
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
    parts?: {
      title: string;
      description: string;
      artifacts: string[];
    }[];
  };
  iteration: {
    description: string;
    artifacts: string[];
    parts?: {
      title: string;
      description: string;
      artifacts: string[];
      comparison?: {
        beforeImage: string;
        afterImage: string;
        beforeAlt: string;
        afterAlt: string;
      };
    }[];
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
  featured?: boolean;
  isNew?: boolean;
}

export const projects: Project[] = [
  {
    id: "yellow-dollar",
    slug: "yellow-dollar",
    title: "Yellow Dollar",
    subtitle: "SaaS Platform",
    shortDescription: "Platform to protect YouTube revenue and prevent demonetization with AI analysis and content optimization suggestions.",
    fullDescription: "Yellow Dollar is an AI-powered platform that helps YouTube creators protect their revenue by analyzing content for potential policy violations and demonetization risks, providing actionable suggestions to optimize content for maximum monetization.",
    client: "Personal Project",
    role: "UI/UX Designer & Developer",
    timeline: "3 months",
    tools: ["Figma", "React Native", "TypeScript", "Firebase"],
    coverImage: "/assets/yellowdollar_g.png",
    heroImage: "/assets/unqueue-hero.svg",
    scope: "UI/UX Design, Branding, 3D Design, Wireframing, Research & Prototyping",
    problem: "YouTube creators face significant revenue loss due to unexpected demonetization, often caused by unclear policy violations or content that doesn't align with advertiser-friendly guidelines.",
    research: {
      description: "Conducted interviews with 20+ YouTube creators to understand their demonetization challenges and analyzed 100+ demonetized videos to identify common policy violation patterns.",
      artifacts: [
        "/assets/unqueue-research-1.svg",
        "/assets/unqueue-research-2.svg",
        "/assets/unqueue-research-3.svg"
      ]
    },
    concept: {
      description: "Designed an AI-powered dashboard that analyzes video content in real-time, highlighting potential policy violations and providing specific recommendations for content optimization.",
      artifacts: [
        "/assets/unqueue-design-1.svg",
        "/assets/unqueue-design-2.svg",
        "/assets/unqueue-design-3.svg"
      ],
      parts: [
        {
          title: "AI Dashboard Design",
          description: "Created an intuitive dashboard interface that allows YouTube creators to upload and analyze their content for potential policy violations. The design focuses on clear visual indicators and actionable insights to help creators optimize their content before publishing.",
          artifacts: [
            "/assets/unqueue-design-1.svg",
            "/assets/unqueue-design-2.svg"
          ]
        },
        {
          title: "User Experience Flow",
          description: "Developed a comprehensive user experience flow that guides creators through the content analysis process, from upload to optimization recommendations. The flow ensures creators understand each step and can easily implement suggested changes.",
          artifacts: [
            "/assets/unqueue-design-3.svg"
          ]
        }
      ]
    },
    iteration: {
      description: "The development process focused on iterative improvement of the AI analysis engine through continuous testing and user feedback.",
      artifacts: [
        "/assets/unqueue-design-1.svg",
        "/assets/unqueue-design-2.svg",
        "/assets/unqueue-design-3.svg"
      ],
      parts: [
        {
          title: "AI Engine Development",
          description: "Developed and refined the core AI analysis engine through extensive testing on real YouTube content. This phase focused on improving accuracy and reducing false positives by training the system on diverse content types and policy scenarios.",
          artifacts: [
            "/assets/unqueue-design-1.svg"
          ]
        },
        {
          title: "User Interface Refinement",
          description: "Continuously improved the user interface based on creator feedback and usage analytics. This iterative process ensured the dashboard remained intuitive while adding more sophisticated analysis features and clearer result presentations.",
          artifacts: [
            "/assets/unqueue-design-2.svg",
            "/assets/unqueue-design-3.svg"
          ]
        }
      ]
    },
    finalProduct: {
      description: "Complete SaaS platform with AI-powered video analysis, real-time policy checking, and automated content optimization recommendations.",
      artifacts: [
        "/assets/unqueue-final-ui.svg",
        "/assets/unqueue-user-flow.svg",
        "/assets/unqueue-wireframes.svg"
      ]
    },
    outcome: {
      description: "The platform helped creators prevent 95% of potential demonetization issues and increased average revenue by 40% for users.",
      metrics: [
        "95% reduction in demonetization incidents",
        "40% average revenue increase for users",
        "10,000+ videos analyzed successfully"
      ],
      learnings: [
        "AI accuracy improves significantly with real-world testing data",
        "Creators value actionable recommendations over simple alerts",
        "Real-time analysis is crucial for content optimization"
      ]
    },
    externalLink: "https://yellowdollar.com",
    featured: true,
    isNew: true
  },
  {
    id: "kickoff",
    slug: "kickoff",
    title: "Kickoff",
    subtitle: "Metaverse Platform",
    shortDescription: "A social metaverse platform for streaming Premier League football, providing a much needed solution to the growing epidemic of illegal streaming.",
    fullDescription: "Kickoff is a social platform enabling users to meet up virtually and watch live football matches.",
    client: "Personal Project",
    role: "UI/UX Designer",
    timeline: "12 weeks",
    tools: ["Framer", "Cinema 4D", "Figma", "Blender"],
    coverImage: "/assets/Kickoff.png",
    heroImage: "/assets/casestudies_photos/kickoff/heroimg.PNG",
    scope: "UI/UX Design, Branding, 3D Design, Wireframing, Research & Prototyping",
    problem: "As an avid football fan, I have become all too familiar with the growing piracy crisis the broadcast companies are facing when it comes to online streaming. So I wanted to try and find a solution which would appeal to both the companies and the fans.",
    research: {
      description: "After undertaking many research studies, I came to the conclusion that fans would in fact be happier paying for a stable all in-one product. As shown in other case studies such as Limewire/Spotify, evidence shows devoted users will actually rather pay if the product is more convenient and stable in comparison to the illegal alternatives.",
      artifacts: [
        "/assets/casestudies_photos/kickoff/researchfindings.png"
      ]
    },
    concept: {
      description: "I wanted to create a platform where fans could not only watch their team every week, but could also interact and network with other fans. So, I created a blueprint which outlines the different functions and features of the service.",
      artifacts: [
        "/assets/casestudies_photos/kickoff/userflowfunctionmap.png",
        "/assets/casestudies_photos/kickoff/branddguidelines.png"
      ],
      parts: [
        {
          title: "User Flow & Function Mapping",
          description: "Creating a comprehensive user flow and function map was essential to understand how fans would navigate through the platform. This blueprint helped define the core user journeys and identify key interaction points between users watching matches and engaging with the community.",
          artifacts: [
            "/assets/casestudies_photos/kickoff/userflowfunctionmap.png"
          ]
        },
        {
          title: "Brand Guidelines & Design System",
          description: "Establishing brand guidelines early in the design process was crucial for maintaining visual consistency throughout the platform. By defining typography, color palettes, spacing, and component styles upfront, I was able to accelerate the development process and ensure a cohesive user experience. This systematic approach eliminated design inconsistencies and provided a clear foundation for all future design decisions.",
          artifacts: [
            "/assets/casestudies_photos/kickoff/branddguidelines.png"
          ]
        }
      ]
    },
    iteration: {
      description: "The iteration process was divided into three key phases, each building upon the previous to create a refined and polished user experience.",
      artifacts: [
        "/assets/casestudies_photos/kickoff/wireframes/landing1.png",
        "/assets/casestudies_photos/kickoff/wireframes/dashboard1.png",
        "/assets/casestudies_photos/kickoff/wireframes/avatar1.png",
        "/assets/casestudies_photos/kickoff/wireframes/signin1.png",
        "/assets/casestudies_photos/kickoff/wireframes/leaderboard1.png",
        "/assets/casestudies_photos/kickoff/wireframes/livematch1.png",
        "/assets/casestudies_photos/kickoff/wireframes/map1.png",
        "/assets/casestudies_photos/kickoff/wireframes/plan1.png",
        "/assets/casestudies_photos/kickoff/development/3dev.png",
        "/assets/casestudies_photos/kickoff/development/3devcharacters.png",
        "/assets/casestudies_photos/kickoff/development/v1/landing2.png",
        "/assets/casestudies_photos/kickoff/development/v1/dashboard2.png",
        "/assets/casestudies_photos/kickoff/development/v1/avatar2.png",
        "/assets/casestudies_photos/kickoff/development/v1/signin2.png",
        "/assets/casestudies_photos/kickoff/development/v1/leaderboard2.png",
        "/assets/casestudies_photos/kickoff/development/v1/livematch2.png",
        "/assets/casestudies_photos/kickoff/development/v1/map2.png",
        "/assets/casestudies_photos/kickoff/development/v1/plan2.png",
        "/assets/casestudies_photos/kickoff/development/v2/landing3.png",
        "/assets/casestudies_photos/kickoff/development/v2/dashboard3.png",
        "/assets/casestudies_photos/kickoff/development/v2/avatar3.png",
        "/assets/casestudies_photos/kickoff/development/v2/signin3.png",
        "/assets/casestudies_photos/kickoff/development/v2/leaderboard3.png",
        "/assets/casestudies_photos/kickoff/development/v2/livematch3.png",
        "/assets/casestudies_photos/kickoff/development/v2/map3.png",
        "/assets/casestudies_photos/kickoff/development/v2/plan3.png"
      ],
      parts: [
        {
          title: "Initial Wireframes",
          description: "Starting with wireframes allowed me to quickly sketch out ideas and test initial concepts with users. This foundational step helped establish the core user flows and basic layout structure for the platform.",
          artifacts: [
            "/assets/casestudies_photos/kickoff/wireframes/landing1.png",
            "/assets/casestudies_photos/kickoff/wireframes/dashboard1.png",
            "/assets/casestudies_photos/kickoff/wireframes/avatar1.png",
            "/assets/casestudies_photos/kickoff/wireframes/signin1.png",
            "/assets/casestudies_photos/kickoff/wireframes/leaderboard1.png",
            "/assets/casestudies_photos/kickoff/wireframes/livematch1.png",
            "/assets/casestudies_photos/kickoff/wireframes/map1.png",
            "/assets/casestudies_photos/kickoff/wireframes/plan1.png"
          ]
        },
        {
          title: "Wireframe → Higher Fidelity",
          description: "This comparison shows the evolution from initial wireframes to the first iteration of higher fidelity designs. Drag the slider to see how the basic layouts were enhanced with visual elements, typography, and improved user interface components.",
          artifacts: [],
          comparison: {
            beforeImage: "/assets/casestudies_photos/kickoff/wireframes/dashboard1.png",
            afterImage: "/assets/casestudies_photos/kickoff/development/v1/dashboard2.png",
            beforeAlt: "Dashboard wireframe",
            afterAlt: "Dashboard higher fidelity design"
          }
        },
        {
          title: "Development & Testing",
          description: "Frequent user testing sessions were conducted with the target market to ensure both the features and design were aligned with their expectations. This phase focused on refining layouts and validating user flows before moving to higher fidelity designs.",
          artifacts: [
            "/assets/casestudies_photos/kickoff/development/v1/landing2.png",
            "/assets/casestudies_photos/kickoff/development/v1/dashboard2.png",
            "/assets/casestudies_photos/kickoff/development/v1/avatar2.png",
            "/assets/casestudies_photos/kickoff/development/v1/signin2.png",
            "/assets/casestudies_photos/kickoff/development/v1/leaderboard2.png",
            "/assets/casestudies_photos/kickoff/development/v1/livematch2.png",
            "/assets/casestudies_photos/kickoff/development/v1/map2.png",
            "/assets/casestudies_photos/kickoff/development/v1/plan2.png"
          ]
        },
        {
          title: "3D Integration",
          description: "Integrated 3D design using Blender and Cinema 4D to create an immersive environment that replicated how the platform could look if further developed. This phase focused on creating engaging visual elements that enhance the overall user experience in the metaverse platform.",
          artifacts: [
            "/assets/casestudies_photos/kickoff/development/3dev.png",
            "/assets/casestudies_photos/kickoff/development/3devcharacters.png"
          ]
        },
        {
          title: "Final Iteration",
          description: "Once satisfied with the layout and user flow, I developed the final designs by adding content and experimenting with branding elements. This phase focused on creating polished interfaces that would provide users with an engaging social metaverse experience for watching football matches.",
          artifacts: [
            "/assets/casestudies_photos/kickoff/development/v2/landing3.png",
            "/assets/casestudies_photos/kickoff/development/v2/dashboard3.png",
            "/assets/casestudies_photos/kickoff/development/v2/avatar3.png",
            "/assets/casestudies_photos/kickoff/development/v2/signin3.png",
            "/assets/casestudies_photos/kickoff/development/v2/leaderboard3.png",
            "/assets/casestudies_photos/kickoff/development/v2/livematch3.png",
            "/assets/casestudies_photos/kickoff/development/v2/map3.png",
            "/assets/casestudies_photos/kickoff/development/v2/plan3.png"
          ]
        }
      ]
    },
    finalProduct: {
      description: "12 Week Design Process / Solo Project / 2023.",
      artifacts: [
        "/assets/casestudies_photos/kickoff/finalproduct.jpg"
      ]
    },
    outcome: {
      description: "A social metaverse platform that addresses illegal streaming while providing a legitimate, engaging alternative for football fans.",
      learnings: [
        "Users prefer stable, convenient paid services over unreliable free alternatives",
        "Social features enhance user engagement and retention",
        "3D design elements can significantly improve user experience in digital platforms"
      ]
    },
    featured: true
  },
  {
    id: "aurora-roofing",
    slug: "aurora-roofing",
    title: "Aurora Roofing",
    subtitle: "Responsive Web Design",
    shortDescription: "A comprehensive responsive website design for a local roofing company, enhancing user experience and driving an up-tick in customer conversions.",
    fullDescription: "A functional and professional modern 5-page website for a roofing agency, increasing customer retention, conversion and brand awareness.",
    client: "Local Roofing Company",
    role: "UI/UX Designer",
    timeline: "4 weeks",
    tools: ["Figma", "Framer", "Adobe XD", "Sketch", "InVision"],
    coverImage: "/assets/Aurora Roodfing.png",
    heroImage: "/assets/casestudies_photos/aurora/mockups/1.jpg",
    scope: "UI/UX Design, Branding, Research, Wireframing, Prototyping, Responsive Web Design & SEO",
    problem: "In the roofing industry, outdated websites cost revenue and visibility. I designed a mobile-responsive site that streamlined user journeys, amplified CTAs, and showcased services boosting conversions by 30% through enhanced SEO and UX.",
    research: {
      description: "Through stakeholder interviews and competitor analysis, I identified key UX patterns and conversion barriers across ~10 roofing websites. These actionable insights directly informed high-fidelity wireframes that met client expectations for usability and conversion optimization.",
      artifacts: [
        "/assets/casestudies_photos/aurora/keytakeaways.png"
      ]
    },
    concept: {
      description: "A functional and professional modern 5-page website for a roofing agency, increasing customer retention, conversion and brand awareness.",
      artifacts: [
        "/assets/infinitevps-dashboard-wireframes.svg",
        "/assets/infinitevps-monitoring-ui.svg",
        "/assets/infinitevps-pain-points.svg"
      ],
      parts: [
        {
          title: "Website Architecture & Wireframes",
          description: "Developed a comprehensive 5-page website architecture focusing on user conversion paths and service showcase. Created detailed wireframes that prioritized user experience and conversion optimization for the roofing industry.",
          artifacts: [
            "/assets/casestudies_photos/aurora/wireframes/landingwireframe.png",
            "/assets/casestudies_photos/aurora/wireframes/aboutwireframe.png",
            "/assets/casestudies_photos/aurora/wireframes/contactwireframe.png"
          ]
        },
        {
          title: "Mobile Responsive Wireframes",
          description: "Created mobile-specific wireframes to ensure optimal user experience across all devices. These wireframes addressed the unique challenges of mobile browsing for roofing services and optimized the user journey for mobile users.",
          artifacts: [
            "/assets/casestudies_photos/aurora/wireframes/landingwireframemobile1.png",
            "/assets/casestudies_photos/aurora/wireframes/landingwireframemobile2.png"
          ]
        }
      ]
    },
    iteration: {
      description: "The development process followed a structured design sprint framework with multiple stakeholder feedback sessions to ensure optimal user experience and business alignment.",
      artifacts: [
        "/assets/infinitevps-user-journey.svg",
        "/assets/infinitevps-final-dashboard.svg",
        "/assets/infinitevps-monitoring-ui.svg"
      ],
      parts: [
        {
          title: "Development & Testing",
          description: "Frequent user testing sessions were conducted with stakeholders to ensure both the website features and design were aligned with user expectations. This phase focused on refining layouts and validating user flows before moving to higher fidelity designs.",
          artifacts: [
            "/assets/casestudies_photos/aurora/development/homev2.png",
            "/assets/casestudies_photos/aurora/development/aboutv2.png",
            "/assets/casestudies_photos/aurora/development/contactv2.png"
          ]
        },
        {
          title: "Final Iteration & Visual Polish",
          description: "Once satisfied with the layout and user flow, I developed the final designs by adding content and experimenting with branding elements. Created comprehensive mockups showcasing the professional aesthetic and user-friendly interface that drives conversions and enhances brand awareness.",
          artifacts: [
            "/assets/casestudies_photos/aurora/mockups/2.jpg",
            "/assets/casestudies_photos/aurora/mockups/3.jpg",
            "/assets/casestudies_photos/aurora/mockups/4.jpg"
          ]
        }
      ]
    },
    finalProduct: {
      description: "4 Week Design Process / Solo Project / 2024.",
      artifacts: [
        "/assets/casestudies_photos/aurora/mockups/1.jpg"
      ]
    },
    outcome: {
      description: "The responsive website design successfully modernized the roofing company's online presence, creating a website that enhanced user experience and improved conversion potential through better UX and SEO optimization.",
      metrics: [
        "30% boost in conversions through enhanced UX",
        "Improved SEO performance and organic discoverability", 
        "Enhanced customer retention and brand awareness"
      ],
      learnings: [
        "Structured design sprints with stakeholder feedback are crucial for business alignment",
        "Mobile-responsive design is essential for roofing industry customers who often browse on mobile devices",
        "SEO optimization should be integrated throughout the design process for local service businesses"
      ]
    },
    featured: true
  },
  {
    id: "gucci",
    slug: "gucci",
    title: "Gucci",
    subtitle: "Interactive UI & App Design",
    shortDescription: "An in-store conceptual experience, made to get users back into physical stores after the COVID-19 lockdowns.",
    fullDescription: "An in-store conceptual experience, made to get users back into physical stores after the COVID-19 lockdowns.",
    client: "Gucci",
    role: "UI/UX Designer",
    timeline: "12 weeks",
    tools: ["Adobe XD", "Photoshop", "Cinema 4D", "Figma"],
    coverImage: "/assets/Gucci.png",
    heroImage: "/assets/casestudies_photos/gucci/mockups/meet guccibot.png",
    scope: "UI/UX Design, 3D Design, App Design, Wireframing, Research & Prototyping",
    problem: "In response to the significant decline in physical retail purchases, this project was aimed at revitalizing in-store experiences to motivate customers to return to physical locations.",
    research: {
      description: "I conducted both primary and secondary research into the Gucci brand design and from this I decided I would keep with the traditional Gucci aesthetic and brand material. I also undertook surveys and interviews with the Gucci customer base to realize their pain points with the company and their current experience. Alongside this, I performed an in-person analysis of the store and its different components, where I created a service blueprint map to help me find where the room for improvement and opportunity was.",
      artifacts: [
        "/assets/casestudies_photos/gucci/research/researchtakeaways.png"
      ]
    },
    concept: {
      description: "Give people a reason to visit in store and create a talking point within the community, in aim of converting more sales. To achieve this, my idea was to implement a physical in-store assistant in the form of the Guccibot.",
      artifacts: [
        "/assets/wrona-competitor-analysis.svg",
        "/assets/wrona-stakeholder-interviews.svg",
        "/assets/wrona-design-system.svg"
      ],
      parts: []
    },
    iteration: {
      description: "The development process focused on creating consistent experiences across both physical and digital interfaces while maintaining Gucci's brand aesthetic.",
      artifacts: [
        "/assets/wrona-3d-mockups.svg",
        "/assets/wrona-final-website.svg",
        "/assets/wrona-design-system.svg"
      ],
      parts: [
        {
          title: "Physical Interface Wireframes",
          description: "Designed wireframes for the physical in-store interface that customers would interact with. These wireframes defined the touchpoints between the digital app and the physical store experience, creating a seamless omnichannel journey.",
          artifacts: [
            "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface - Home – 2.png",
            "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface - Browse – 1.png",
            "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface - Handbags – 1.png",
            "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface - Item-Product – 3.png",
            "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface -Escort– 2.png",
            "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface - Escort-Purchase Confirmation.png"
          ]
        },
        {
          title: "App Wireframes",
          description: "Created comprehensive wireframes for the Guccibot mobile app, focusing on user interaction flows and chatbot functionality. These wireframes established the foundation for the in-store digital experience and defined how customers would interact with the AI assistant.",
          artifacts: [
            "/assets/casestudies_photos/gucci/wireframes/app/MyGucci app home screen – 1.png",
            "/assets/casestudies_photos/gucci/wireframes/app/Guccibot Homepage - alternate layout.png",
            "/assets/casestudies_photos/gucci/wireframes/app/Guccibot Chat.png",
            "/assets/casestudies_photos/gucci/wireframes/app/My Cart.png",
            "/assets/casestudies_photos/gucci/wireframes/app/My Orders.png",
            "/assets/casestudies_photos/gucci/wireframes/app/Personalise Guccibot.png",
            "/assets/casestudies_photos/gucci/wireframes/app/Settings.png"
          ]
        },
        {
          title: "App Development & Testing",
          description: "Developed high-fidelity designs for the Guccibot mobile app, focusing on chatbot interactions and personalized shopping experiences. Conducted extensive user testing sessions to refine the app interface and ensure optimal user experience for mobile users.",
          artifacts: [
            "/assets/casestudies_photos/gucci/development/app/Guccibot - My Cart – 12.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - My Cart – 13.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - My Account (orders) – 4.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - My Orders – 4.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - Personalise Guccibot – 7.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - Personalise Guccibot – 8.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - Settings – 5.png",
            "/assets/casestudies_photos/gucci/development/app/Guccibot - Chatbot – 3.png",
            "/assets/casestudies_photos/gucci/development/app/MyGucci app home screen – 7.png"
          ]
        },
        {
          title: "Physical Interface Development & Testing",
          description: "Designed and tested the physical in-store interface that customers would interact with. This phase focused on creating seamless interactions between the digital app and physical store touchpoints, ensuring a cohesive omnichannel experience.",
          artifacts: [
            "/assets/casestudies_photos/gucci/development/interface/Gucci Interface - Browse – 9.png",
            "/assets/casestudies_photos/gucci/development/interface/Gucci Interface - Escort – 6.png",
            "/assets/casestudies_photos/gucci/development/interface/Gucci Interface - Handbags – 5.png",
            "/assets/casestudies_photos/gucci/development/interface/Gucci Interface - Item-Product – 13.png",
            "/assets/casestudies_photos/gucci/development/interface/Gucci Interface - Purchase Item-Product – 3.png",
            "/assets/casestudies_photos/gucci/development/interface/Gucci Interface - Settings – 5.png"
          ]
        },
        {
          title: "Final App Implementation",
          description: "Developed the final app designs with complete functionality including chatbot interactions, personalized shopping experiences, and seamless user flows. This phase focused on creating intuitive interfaces for cart management, order tracking, and AI-powered product recommendations.",
          artifacts: [
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Chatbot – 10.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Chatbot – 11.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Chatbot – 12.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Chatbot – 9.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Home (alternate layout) – 2.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - My Cart – 10.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - My Cart – 11.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Notification – 23.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Personalise Guccibot – 17.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Settings – 3.png",
            "/assets/casestudies_photos/gucci/final screens/app/Guccibot - Settings – 4.png",
            "/assets/casestudies_photos/gucci/final screens/app/MyGucci app home screen – 6.png",
            "/assets/casestudies_photos/gucci/final screens/app/Onboarding – 11.png",
            "/assets/casestudies_photos/gucci/final screens/app/Onboarding – 12.png",
            "/assets/casestudies_photos/gucci/final screens/app/Onboarding – 13.png"
          ]
        },
        {
          title: "Final Interface Implementation",
          description: "Completed the physical in-store interface design with all interactive touchpoints and seamless integration with the mobile app. This phase focused on creating immersive shopping experiences and ensuring smooth transitions between digital and physical interactions.",
          artifacts: [
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Escort – 3.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Escort – 4.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Follow me – 10.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Follow me – 5.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Handbags – 3.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Home – 8.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Item-Product – 10.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Purchase Item-Product – 2.png",
            "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Settings – 3.png"
          ]
        },
        {
          title: "3D Integration & Immersive Experience",
          description: "Integrated 3D design using Blender and Cinema 4D to create an immersive shopping environment that replicated how the Guccibot experience could look if further developed. This phase focused on creating engaging visual elements that enhance the overall shopping experience.",
          artifacts: [
            "/assets/casestudies_photos/gucci/development/3d dev.png"
          ]
        },
        {
          title: "Wireframe → Higher Fidelity",
          description: "This comparison shows the evolution from initial wireframes to the first iteration of higher fidelity designs. Drag the slider to see how the basic layouts were enhanced with visual elements, typography, and improved user interface components.",
          artifacts: [],
          comparison: {
            beforeImage: "/assets/casestudies_photos/gucci/wireframes/interface/Gucci Interface -Escort– 2.png",
            afterImage: "/assets/casestudies_photos/gucci/final screens/interface/Gucci Interface - Escort – 3.png",
            beforeAlt: "Gucci Interface Escort wireframe",
            afterAlt: "Gucci Interface Escort higher fidelity design"
          }
        }
      ]
    },
    finalProduct: {
      description: "12 Week Design Process / Solo Project / 2023.",
      artifacts: [
        "/assets/casestudies_photos/gucci/mockups/1.jpg",
        "/assets/casestudies_photos/gucci/mockups/2.jpg",
        "/assets/casestudies_photos/gucci/mockups/3.jpg"
      ]
    },
    outcome: {
      description: "The Guccibot concept successfully addressed the challenge of declining physical retail visits by creating an innovative in-store experience that combines digital technology with luxury retail. The project demonstrated how AI-powered assistants and immersive 3D interfaces can revitalize brick-and-mortar shopping experiences.",
      learnings: [
        "Maintaining brand consistency across physical and digital interfaces is crucial for luxury retail",
        "AI-powered in-store assistants can bridge the gap between digital convenience and physical experience",
        "3D design integration creates immersive experiences that differentiate physical stores from online shopping",
        "Omnichannel experiences require seamless app-to-store interface transitions"
      ]
    },
    featured: true
  },
  {
    id: "bookshelf",
    slug: "bookshelf",
    title: "Bookshelf",
    subtitle: "App Design",
    shortDescription: "A climate conscious app to promote upcycling, providing a platform for those who want to make or share their latest upcycled creations.",
    fullDescription: "An app to promote social interaction focused on books and reading culture.",
    client: "Personal Project",
    role: "UI/UX Designer",
    timeline: "8 weeks",
    tools: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
    coverImage: "/assets/bookshelf.png",
    heroImage: "/assets/infinitevps-hero.svg",
    scope: "UI/UX Design, Branding, Research, App Design, Wireframing & Prototyping",
    problem: "After undertaking some initial research I decided to pose a solution to this growing problem of less and less people reading books in today's modern society.",
    research: {
      description: "Research included competitor research, branding analysis and target audience research. I found many new trends developing in the reading communities, such as a new one on TikTok - BookTok. Which helped provide good evidence that there is still a strong demand for this type of service.",
      artifacts: [
        "/assets/infinitevps-research-1.svg",
        "/assets/infinitevps-research-2.svg",
        "/assets/infinitevps-research-3.svg"
      ]
    },
    concept: {
      description: "This led to the idea of creating a standalone app where readers and book enthusiasts can come together and update their reading lists, provide ratings and converse with likeminded people.",
      artifacts: [
        "/assets/infinitevps-dashboard-wireframes.svg",
        "/assets/infinitevps-monitoring-ui.svg",
        "/assets/infinitevps-pain-points.svg"
      ],
      parts: [
        {
          title: "App Architecture & Wireframes",
          description: "Developed the core app architecture focusing on social interaction and book management features. Created wireframes that prioritized user engagement and community building while maintaining a clean, content-focused design approach.",
          artifacts: [
            "/assets/infinitevps-dashboard-wireframes.svg"
          ]
        },
        {
          title: "User Experience & Interface Design",
          description: "Designed intuitive interfaces for book discovery, rating systems, and social features. Focused on creating seamless user experiences that encourage community interaction and book sharing among readers.",
          artifacts: [
            "/assets/infinitevps-monitoring-ui.svg",
            "/assets/infinitevps-pain-points.svg"
          ]
        }
      ]
    },
    iteration: {
      description: "The development process focused on creating an intuitive user experience through iterative design and user testing to optimize content presentation and social features.",
      artifacts: [
        "/assets/infinitevps-user-journey.svg",
        "/assets/infinitevps-final-dashboard.svg",
        "/assets/infinitevps-monitoring-ui.svg"
      ],
      parts: [
        {
          title: "User Journey & Initial Wireframes",
          description: "Created comprehensive user journeys depicting different app sections and user flows. Developed initial wireframes with a focus on clean, simple layouts that allow content to have the user's full attention, prioritizing readability and social interaction.",
          artifacts: [
            "/assets/infinitevps-user-journey.svg"
          ]
        },
        {
          title: "User Testing & Content Optimization",
          description: "Conducted extensive user testing to refine the app's content presentation. Initially designed book covers at full size, but user feedback led to scaling adjustments for highlighted titles, significantly improving user experience. Continued iterating on different app sections based on testing results.",
          artifacts: [
            "/assets/infinitevps-final-dashboard.svg",
            "/assets/infinitevps-monitoring-ui.svg"
          ]
        }
      ]
    },
    finalProduct: {
      description: "8-Week Design Process / Solo Project / 2021.",
      artifacts: [
        "/assets/infinitevps-final-dashboard.svg",
        "/assets/infinitevps-monitoring-ui.svg",
        "/assets/infinitevps-dashboard-wireframes.svg"
      ]
    },
    outcome: {
      description: "The Bookshelf app design successfully addressed the declining reading culture by creating an engaging social platform for book enthusiasts.",
      learnings: [
        "User testing revealed the importance of proper content hierarchy and visual balance",
        "Social features are crucial for building engaged communities around shared interests",
        "Clean and simple layouts allow content to have the user's full attention"
      ]
    },
    featured: false
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured !== false);
}

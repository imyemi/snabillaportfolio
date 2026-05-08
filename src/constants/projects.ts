
export interface CaseStudySection {
  title: string;
  content: string;
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  url: string;
  description: string;
  image: string;
  meta: string;
  year: string;
  role: string;
  caseStudy?: {
    overview: string;
    sections: CaseStudySection[];
  };
}

export const projects: Project[] = [
  {
    slug: "riize-page",
    title: "RIIZE PAGE",
    tags: ["Google AI Studio", "GitHub", "Vercel"],
    url: "https://riizepagehub.vercel.app/",
    description: "Fan-focused digital hub developed using modern automation and AI-driven workflows.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=1200&q=80",
    meta: "2026 /////////////",
    year: "2026",
    role: "Creative Developer",
    caseStudy: {
      overview: "RIIZE PAGE is a modern fan community hub. It integrates real-time social feeds, media galleries, and interactive fan projects in a high-performance web environment.",
      sections: [
        {
          title: "Innovation",
          content: "By using Google AI Studio for content moderation and automation, we were able to create a self-sustaining community platform that scales effortlessly."
        },
        {
          title: "Performance",
          content: "Built with speed in mind, the site achieves near-perfect Lighthouse scores, ensuring fans can access content instantly even on limited mobile data."
        }
      ]
    }
  },
  {
    slug: "sekitar",
    title: "Sekitar",
    tags: ["UI/UX", "Figma", "Illustration", "Research"],
    url: "https://caridisekitar.com/",
    description: "Sekitar is a website platform for finding boarding houses (kost) in Jakarta and surrounding areas.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    meta: "2026 /////////////",
    year: "2026",
    role: "UI/UX Designer",
    caseStudy: {
      overview: "Sekitar is a website platform for finding boarding houses (kost) in Jakarta and surrounding areas. The project involved a comprehensive design process to solve the challenges of urban housing searches.",
      sections: [
        {
          title: "UX Research",
          content: "Conducted UX research to understand user needs and inform design decisions across the platform."
        },
        {
          title: "End-to-End Design",
          content: "Designed the full end to end website experience including all pages, user flows, and a mobile-responsive layout."
        },
        {
          title: "Prototyping",
          content: "Built interactive prototypes to validate design decisions before handoff."
        }
      ]
    }
  },
  {
    slug: "velosight",
    title: "Velosight",
    tags: ["Design System", "Research", "UI Design", "UX", "Copywriting"],
    url: "https://platform.velosight.ai/auth/login",
    description: "Enterprise analytics dashboard with a robust custom design system for data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    meta: "2025-2026 /////////////",
    year: "2025-2026",
    role: "Lead UI Designer",
    caseStudy: {
      overview: "Velosight is an enterprise-grade analytics platform. My role focused on creating a scalable design system that could handle complex data visualizations while maintaining ease of use for business analysts.",
      sections: [
        {
          title: "Design System",
          content: "We built a multi-themed design system from the ground up, ensuring consistent interaction patterns across hundreds of different data widgets and reporting tools."
        },
        {
          title: "Focus on Data",
          content: "The interface was designed to 'get out of the way' of the data. We used a neutral foundation with strategic pops of color for data alerts and critical metrics."
        }
      ]
    }
  },
  {
    slug: "porapos",
    title: "Porapos",
    tags: ["Wireframe", "UI Design"],
    url: "https://porapos.live/",
    description: "Modern POS system landing page designed for speed and clarity in business operations.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80",
    meta: "2025 /////////////",
    year: "2025",
    role: "Digital Designer",
    caseStudy: {
      overview: "Porapos is a cloud-based point of sale system. The landing page was designed to convert business owners by highlighting efficiency and ease of setup.",
      sections: [
        {
          title: "Visual Storytelling",
          content: "We used clear, bold calls-to-action and visualized the POS 'in-situ' to help potential customers imagine the product in their own businesses."
        }
      ]
    }
  },
  {
    slug: "ana-ai",
    title: "ANA AI",
    tags: ["UI Design", "Research"],
    url: "https://apps.apple.com/jp/app/ana-ai/id6480389244?l=en-US",
    description: "Ana is a personal AI assistant built specifically for women — a smart companion that goes beyond a generic chatbot to offer empathetic conversations, practical lifestyle support, and women-centered health tools, all in one place.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    meta: "2024-2025 /////////////",
    year: "2024-2025",
    role: "Product Designer",
    caseStudy: {
      overview: "Ana is a personal AI assistant built specifically for women — going beyond a generic chatbot to offer empathetic conversations, lifestyle support, and women-centered health tools in one place. Available on iOS, it targets women aged 18–35 who are urban, tech-savvy, and invested in their health, fashion, and personal growth.\n\nMy role was as Product Designer, responsible for the end-to-end experience — from user research and UI/UX design through to final implementation in close collaboration with developers and the client.",
      sections: [
        {
          title: "The Problem",
          content: "When this project began, the existing design had several critical gaps that needed to be addressed before Ana could truly serve its audience. The original interface failed to clearly communicate what Ana actually does. Users couldn't grasp its core features at a glance — a fundamental issue for any app that needs to earn trust and attention quickly. On top of that, the design lacked a distinctly women-centered voice. The visuals, tone, and experience felt too generic, missing the warmth and relevance the target audience needed to feel seen and understood. The user experience itself also had significant room for improvement. Navigation was unintuitive, the user flow had friction points, and there was no in-depth competitor analysis or user research backing the design decisions. Finally, the product had no cohesive design system — typography, colors, and UI components were inconsistent across screens, making the interface feel unpolished and difficult to scale. These four problems — unclear functionality, a weak women-centered direction, poor UX, and an absent design system — formed the foundation of everything that needed to change."
        },
        {
          title: "Research & Insights",
          content: "Before any design work began, I grounded the project in research to ensure decisions were evidence-based rather than assumption-driven.\n\nMarket Landscape\nThe AI companion space is growing fast, with apps like Replika and Woebot gaining traction for emotional and social support. Women's health and beauty is another major AI growth area. However, a clear gap emerged: no single product combined empathetic AI companionship with women-specific lifestyle tools — health tracking, fashion guidance, and personal coaching — in one seamless experience. Competitors each owned a piece of the picture. Replika offered emotional depth but wasn't tailored for women. Flo and Clue excelled at health tracking but lacked AI companionship. Woebot provided therapy-adjacent AI but ignored lifestyle needs entirely.\n\nWho Ana Is For\nThe target user is a woman between 18 and 35, living in an urban environment, active on social media, and deeply interested in health, self-care, fashion, and personal development. Through research, her key pain points became clear: existing AI companions felt too cold and generic; fashion and beauty suggestions from current apps were too broad to be useful; health information was difficult to verify and trust; and period tracking apps tended to feel clinical or overly complex.\n\nThe Opportunity\nAna's unique position is the intersection of empathy and utility. Not just a chatbot, and not just a tracker — a genuine digital companion that understands context, adapts to individual needs, and covers the full spectrum of a modern woman's daily life.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
        },
        {
          title: "Design Process",
          content: "With research in hand, the design work moved through a structured four-stage process.\n\nStage 1 — Solution Exploration\nI developed user personas and journey maps to capture the diverse needs of Ana's audience. This fed directly into the information architecture — defining how the app would be structured so that every feature felt discoverable and natural rather than buried or overwhelming.\n\nStage 2 — Initial Sketches\nEarly UI layouts were drafted for the key screens: onboarding, the main dashboard, the chat interface, and each core feature. This stage was about generating options quickly and identifying the most intuitive directions before committing to any single approach.\n\nStage 3 — Wireframes\nWireframes defined the layout hierarchy and navigation logic. The key screens prioritized for this phase were the home screen (featuring quick access to main features), the AI chat interface, the menstrual cycle tracker, and the fashion and health recommendation flows.\n\nStage 4 — Low-Fidelity Prototypes\nUsing Figma, I built interactive prototypes that could be tested and refined. This stage was critical for ensuring the app felt cohesive end-to-end — not just visually, but functionally.",
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?w=1200&q=80"
        },
        {
          title: "Testing & Validation",
          content: "Testing focused on the flows that matter most to users: account creation and login, home screen navigation, menstrual cycle tracking accuracy and usability, and the AI coaching and guidance responses. Usability tests were run, user feedback was collected, and the designs went through iterative improvement cycles before the final version was presented to the client and handed off for development. This structured process ensured that Ana arrived at launch as a genuinely user-friendly product — not just a design concept.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
        },
        {
          title: "Final Solution",
          content: "After client and developer approval, the high-fidelity design phase refined every detail. Typography and color systems were polished into a cohesive design language. Micro-interactions and transitions were added to make the experience feel fluid and alive rather than static.\n\nThe Core Features\n\nAI Companion (Ana)\nThe heart of the product is Ana herself — a conversational AI that supports text, voice chat, and voice calls. She's designed to feel empathetic and personal, not robotic. Users can also create and customize their own avatar, giving the companion a visual presence that makes interactions feel more connected.\n\Mood & Cycle Tracking\nAna's health module allows users to log and track their emotional state alongside their menstrual cycle, including visibility into fertility windows, ovulation, and menstruation periods. The goal was to make this feel supportive and intuitive — not clinical.\n\nTrend — Personalized Fashion\nThe Trend feature is one of Ana's most distinctive offerings. Through a style quiz, Ana learns a user's color palette, preferred aesthetic, and favorite brands, then generates outfit recommendations tailored to their personality, lifestyle, and current seasonal trends. A catalog view surfaces shoppable items with brand integration, and a dedicated stylist chat lets users dig deeper into any recommendation.\n\nYummy — Meal Planning\nAna's recipe feature generates personalized meal suggestions based on the ingredients a user already has at home, with healthy menu propositions supported by grocery API integrations. Meal planning becomes something users look forward to rather than dread.\n\nAgenda — Smart Scheduling\nAna's calendar and agenda feature offers AI-powered scheduling suggestions — from booking a taxi to finding a restaurant or planning family activities — all tailored to the user's routine and preferences.\n\nCoaching\nAna acts as a personal coach across multiple life areas: fitness, well-being, skill-building, and relationships. Users receive ongoing guidance and encouragement as they work toward their goals.\n\nAR Share & Help\nAn augmented reality feature lets users invite Ana into their physical environment for photos and shared moments. The Help feature enables users to send an SOS message to emergency contacts in a crisis — a meaningful safety net built with care.",
          image: "https://images.unsplash.com/photo-1622979135225-d2ba2697133e?w=1200&q=80"
        },
        {
          title: "Key Takeaways",
          content: "Working on Ana reinforced three things that I carry into every project.\n\nUnderstanding the audience deeply is not optional — it's the foundation everything else is built on. The features that landed most powerfully were the ones shaped directly by real user insights, not assumptions. Designing for women specifically meant listening to what women actually needed, not what a generic \"wellness app\" typically offers.\n\nPersonalization is what makes AI feel human. The difference between a tool users tolerate and one they love is whether it understands them as individuals. Ana's entire design philosophy orbits this idea — every recommendation, every interaction, every response is meant to feel relevant to that specific person in that specific moment.\n\nThe best design disappears. Ana's interface is built to integrate naturally into daily life, so the support it offers never feels intrusive or effortful. When design works, users don't notice it. They just feel better."
        }
      ]
    }
  },
  {
    slug: "satusehat",
    title: "Satusehat Portal Developer",
    tags: ["UI Design", "Illustration"],
    url: "https://satusehat.kemkes.go.id/platform/login",
    description: "Indonesia’s Ministry of Health, supports developers and healthcare institutions in integrating with national health data standards through API documentation, guidelines, and resources.",
    image: "https://images.unsplash.com/photo-1576091160550-21735999181c?w=1200&q=80",
    meta: "2024 /////////////",
    year: "2024",
    role: "UI Designer",
    caseStudy: {
      overview: "Satusehat is Indonesia's response to modern healthcare digitization. I worked on the core platform interface, focusing on making complex medical records easy for citizens to understand.",
      sections: [
        {
          title: "Accessibility First",
          content: "With a user base of millions, accessibility was non-negotiable. We strictly followed WCAG 2.1 guidelines and simplified the language to be understood by all demographic groups."
        }
      ]
    }
  },
  {
    slug: "ausrelief",
    title: "Ausrelief",
    tags: ["UI/UX", "Research"],
    url: "https://www.ausrelief.org/",
    description: "Non-profit humanitarian platform designed to facilitate global aid and donor engagement.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    meta: "2023 /////////////",
    year: "2023",
    role: "UX Researcher & Designer",
    caseStudy: {
      overview: "Ausrelief needed a platform that generated trust and made the donation process friction-free. We focused on transparency and emotional storytelling to connect donors with global causes.",
      sections: [
        {
          title: "Building Trust",
          content: "Our research showed that 'impact transparency' was the #1 psychological barrier for donors. We designed a clear reporting system where donors can see exactly where their funds go."
        }
      ]
    }
  },
  {
    slug: "mission-room",
    title: "Mission Room",
    tags: ["Integrations", "System Design", "UI/UX"],
    url: "https://missionroom.com/integrations.html",
    description: "Multi-software integration platform for immersive environments, connecting BIM, analytics, and project management tools.",
    image: "https://images.unsplash.com/photo-1581091226815-d9c3970fd619?w=1200&q=80",
    meta: "2023 /////////////",
    year: "2023",
    role: "Product Designer",
    caseStudy: {
      overview: "Mission Room provides immersive 360-degree display environments. This project focused on designing the integration layer that allows these rooms to run industry-standard software from partners like Bentley, 3D Repo, and PowerBI seamlessly.",
      sections: [
        {
          title: "The Ecosystem",
          content: "The challenge was to create a unified experience across disparate software packages. We developed a middleware interface that handles multi-source content delivery while maintaining low-latency interaction in a specialized hardware environment."
        },
        {
          title: "Visualization",
          content: "Integrating tools like PowerBI and 3D Repo required a deep understanding of spatial computing and large-scale data visualization. We optimized the UI layouts to ensure that critical information remains accessible across a wrap-around display surface."
        }
      ]
    }
  },
  {
    slug: "relay",
    title: "Antrian Sidang PN Depok",
    tags: ["Productivity", "Management System", "UI/UX"],
    url: "https://relay-on.andro.io/",
    description: "Antrian sidang PN Depok/Relay On is a court attendance management system implemented at the Depok District Court to ensure trial processes run efficiently and on schedule. It helps manage case scheduling, monitor attendance, and streamline administrative tasks, improving coordination between court officials, legal representatives, and attendees for a more organized judicial process.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    meta: "2022 /////////////",
    year: "2022",
    role: "Product Designer",
    caseStudy: {
      overview: "Relay (Antrian Sidang) is a specialized management system designed for the Depok District Court. It aims to modernize the trial scheduling process, ensuring that proceedings are organized, transparent, and timely for both court officials and the public.",
      sections: [
        {
          title: "The Objective",
          content: "The primary goal was to replace manual queue management with a digital solution that provides real-time updates. This reduces congestion in court waiting areas and improves the overall efficiency of judicial workflows."
        },
        {
          title: "User Experience",
          content: "We designed a straightforward interface that caters to various user groups, including court staff and attendees. The focus was on clarity, using high-visibility status indicators and intuitive navigation to ensure accessibility for all age groups."
        }
      ]
    }
  },
  {
    slug: "kasandz",
    title: "Kasandz",
    tags: ["eCommerce", "Marketing", "UI Design"],
    url: "https://kasandz.com/",
    description: "An eCommerce growth agency specializing in PPC, SEO, and Email marketing for online retailers.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80",
    meta: "2022 /////////////",
    year: "2022",
    role: "UI Designer",
    caseStudy: {
      overview: "Kasandz (KAMG) is a performance-driven eCommerce agency. The project involved designing a brand presence that positions them as experts in scaling online businesses through data-driven marketing strategies.",
      sections: [
        {
          title: "Marketing Strategy",
          content: "We focused on creating landing pages that emphasize performance metrics and client success stories, making complex marketing data accessible and convincing for potential eCommerce partners."
        },
        {
          title: "Conversion Optimization",
          content: "The design system was built to reflect transparency and results. We integrated interactive roadmap elements to show clients exactly how the agency scales their brand from audit to execution."
        }
      ]
    }
  },
  {
    slug: "linksehat",
    title: "LinkSehat",
    tags: ["UI/UX", "Graphic Design", "Illustration"],
    url: "https://linksehat.com/",
    description: "A comprehensive health application offering teleconsultation, scheduling, and medical assistance services.",
    image: "https://images.unsplash.com/photo-1576091160550-21735999181c?w=1200&q=80",
    meta: "2020 /////////////",
    year: "2020",
    role: "Graphic Designer & UI Designer",
    caseStudy: {
      overview: "LinkSehat is an integrated health platform in Indonesia. This project marked a pivotal shift in my career from graphic design to product design, where I delivered the full website version and established the visual language of the application.",
      sections: [
        {
          title: "Visual Foundation",
          content: "I started by creating the core visual assets, including mascots, icons, and daily social media content. This consistent visual storytelling helped build brand trust in the sensitive healthcare space."
        },
        {
          title: "Digital Transition",
          content: "Working closely with product managers and developers, I translated LinkSehat's core mobile services—like doctor consultations and appointment booking—into a fully responsive web experience."
        }
      ]
    }
  }
];


Portfolio Structure

Vivek-Portfolio/
│
├── public/
│   │
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile.png
│   │   │
│   │   └── projects/
│   │       ├── techstore.png
│   │       
│   │       
│   │   
│   │       
│   │    
│   │
│   └── resume/
│       └── Vivek-Singh-Resume.pdf
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTop.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   └── SocialLinks.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── About.tsx
│   │   │   ├── AboutCard.tsx
│   │   │   └── PersonalInfo.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectFilter.tsx
│   │   │
│   │   ├── skills/
│   │   │   ├── Skills.tsx
│   │   │   └── SkillCard.tsx
│   │   │
│   │   ├── education/
│   │   │   ├── Education.tsx
│   │   │   └── Experience.tsx
│   │   │
│   │   ├── contact/
│   │   │   ├── Contact.tsx
│   │   │   ├── ContactInfo.tsx
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── Container.tsx
│   │      
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── socialLinks.ts
│   │
│   ├── types/
│   │   ├── project.ts
│   │   └── skill.ts
│   │
│   |
│   |
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md


🎨 Final Page Architecture

Visual flow follow

┌─────────────────────────────────────┐
│              NAVBAR                 │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│               HERO                  │
│                                     │
│  Hello, I'm                         │
│  Vivek Singh       [ Your Photo ]   │
│  Frontend Developer                 │
│                                     │
│  [Projects] [Contact]               │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│              ABOUT                  │
│                                     │
│ About Me       Problem Solver       │
│                Quick Learner        │
│                Team Player          │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│             PROJECTS                │
│                                     │
│ [TechStore] [AI Chatbot] [Project] │
│ [Project]   [Project]   [Project]  │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│              SKILLS                 │
│                                     │
│ React TypeScript Tailwind Node ...  │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│        EDUCATION & EXPERIENCE       │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│             CONTACT                 │
│                                     │
│ Information       Contact Form      │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│              FOOTER                 │
└─────────────────────────────────────┘






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

Visual flow exactly ye hoga:

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



🚀 Ab hum isi architecture ko follow karenge

Development sequence fixed rakhenge:

1. Create React + TypeScript project
          ↓
2. Install/configure TailwindCSS
          ↓
3. Clean default Vite files
          ↓
4. Create folder architecture
          ↓
5. Setup global CSS + theme
          ↓
6. Navbar
          ↓
7. Hero
          ↓
8. About
          ↓
9. Projects
          ↓
10. Skills
          ↓
11. Education + Experience
          ↓
12. Contact
          ↓
13. Footer
          ↓
14. Responsive design
          ↓
15. Framer Motion
          ↓
16. SEO + performance
          ↓
17. GitHub
          ↓
18. Deployment

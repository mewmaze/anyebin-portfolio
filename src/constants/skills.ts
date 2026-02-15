export interface SkillCategory {
  category: string;
  badges: Array<{
    name: string;
    url: string;
  }>;
}

export interface Skill {
  title: string;
  details: string[];
}

export const DEFAULT_SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    badges: [
      {
        name: "Next.js",
        url: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
      },
      {
        name: "TypeScript",
        url: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        name: "React",
        url: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        name: "JavaScript",
        url: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        name: "Tailwind CSS",
        url: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
      {
        name: "Framer Motion",
        url: "https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue",
      },
      {
        name: "Zustand",
        url: "https://img.shields.io/badge/Zustand-brown?style=for-the-badge",
      },
      {
        name: "TanStack Query",
        url: "https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white",
      },
    ],
  },
  {
    category: "Backend",
    badges: [
      {
        name: "Node.js",
        url: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      },
      {
        name: "Express",
        url: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
      },
      {
        name: "MySQL",
        url: "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        name: "Supabase",
        url: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
      },
      {
        name: "Sequelize",
        url: "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white",
      },
    ],
  },
  {
    category: "Deployment",
    badges: [
      {
        name: "AWS",
        url: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
      },
      {
        name: "Vercel",
        url: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
      },
      {
        name: "GitHub Actions",
        url: "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
      },
      {
        name: "PM2",
        url: "https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    badges: [
      {
        name: "GitHub",
        url: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        name: "Figma",
        url: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
      },
      {
        name: "Jira",
        url: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
      },
      {
        name: "Slack",
        url: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
      },
    ],
  },
];

// 카드용 스킬 데이터
export const skillsData: Skill[] = [
  {
    title: "React",
    details: [
      "Hooks · Context API 기반 컴포넌트 설계",
      "컴포넌트 재사용 및 UI 구조화",
      "Zustand를 이용한 전역 상태 관리",
      "TanStack Query로 서버 상태 관리 · 캐싱",
    ],
  },
  {
    title: "Next.js",
    details: [
      "Server Actions로 백엔드 로직 처리",
      "SSR · SSG 최적화",
      "App Router 기반 페이지 구조 설계",
      "TypeScript 기반 안정적인 개발",
    ],
  },
  {
    title: "Backend",
    details: [
      "Node.js · Express로 REST API 설계",
      "MySQL 연동 및 DB 모델링",
      "클라이언트–서버 통신 구조 이해",
    ],
  },
  {
    title: "Deployment",
    details: [
      "AWS (EC2, RDS, CloudFront) 인프라 구축",
      "GitHub Actions 기반 CI/CD 파이프라인 구축",
      "PM2로 프로세스 관리",
      "Vercel을 통한 프론트엔드 배포",
    ],
  },
  {
    title: "UI · Styling",
    details: [
      "Tailwind CSS로 반응형 UI 구현",
      "MUI 컴포넌트 커스터마이징",
      "Framer Motion을 통한 인터랙션 구현",
    ],
  },
];

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
        url: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik02Ljc2MyAxMC4wMzZjMCAuMjk2LjAzMi41MzUuMDg4LjcxLjA2NC4xNzYuMTQ0LjM2OC4yNTYuNTc2LjA0LjA2My4wNTYuMTI3LjA1Ni4xODMgMCAuMDgtLjA0OC4xNi0uMTUyLjI0bC0uNTAzLjMzNWEuMzgzLjM4MyAwIDAgMS0uMjA4LjA3MmMtLjA4IDAtLjE2LS4wNC0uMjM5LS4xMTJhMi40NyAyLjQ3IDAgMCAxLS4yODctLjM3NSA2LjE4IDYuMTggMCAwIDEtLjI0OC0uNDcxYy0uNjIyLjczNC0xLjQwNSAxLjEwMS0yLjM0NyAxLjEwMS0uNjcgMC0xLjIwNS0uMTkxLTEuNTk2LS41NzQtLjM5MS0uMzg0LS41OS0uODk0LS41OS0xLjUzMyAwLS42NzguMjM5LTEuMjMuNzI2LTEuNjQ0LjQ4Ny0uNDE1IDEuMTMzLS42MjMgMS45NTUtLjYyMy4yNzIgMCAuNTUxLjAyNC44NDYuMDY0LjI5Ni4wNC42LjEwNC45MTguMTc2di0uNTgzYzAtLjYwNy0uMTI3LTEuMDMtLjM3NS0xLjI3Ny0uMjU1LS4yNDgtLjY4Ni0uMzY3LTEuMy0uMzY3LS4yOCAwLS41NjguMDMyLS44NjMuMTA0YTYuMzcgNi4zNyAwIDAgMC0uODYyLjI4OCAyLjMgMi4zIDAgMCAxLS4yOC4xMDQuNDg4LjQ4OCAwIDAgMS0uMTI3LjAyNGMtLjExMiAwLS4xNjgtLjA4LS4xNjgtLjI0N3YtLjM5MWMwLS4xMjguMDE2LS4yMjQuMDU2LS4yODhhLjU5Ni41OTYgMCAwIDEgLjIxNi0uMTYgNC40NzYgNC40NzYgMCAwIDEgLjk5LS4zNiA0LjgyIDQuODIgMCAwIDEgMS4yMi0uMTUyYy45MzYgMCAxLjYyLjIxMyAyLjA1OS42MzguNDMyLjQyNC42NTYgMS4wNjkuNjU2IDEuOTM0djIuNTQ4aC4wMDd6TTMuNTggMTEuODdjLjI2MyAwIC41MzQtLjA0OC44MjItLjE0NC4yODctLjA5Ni41NDMtLjI3MS43NTgtLjUxLjEyOC0uMTUyLjIyNC0uMzIuMjcyLS41MTIuMDQ3LS4xOTEuMDgtLjQyMy4wOC0uNjk0di0uMzM1YTYuNjYgNi42NiAwIDAgMC0uNzM1LS4xMzYgNi4wMiA2LjAyIDAgMCAwLS43NS0uMDQ4Yy0uNTM1IDAtLjkyNi4xMDQtMS4xOS4zMi0uMjYzLjIxNS0uMzkuNTE4LS4zOS45MTcgMCAuMzc1LjA5NS42NTUuMjk1Ljg0Ni4xOTEuMi40Ny4yOTYuODM4LjI5NnptNi4xNC45NWMtLjE0NCAwLS4yNC0uMDI0LS4zMDQtLjA4LS4wNjQtLjA0OC0uMTItLjE2LS4xNjgtLjMxMUw3LjU4NiA1LjU1YTEuMzk4IDEuMzk4IDAgMCAxLS4wNzItLjMyYzAtLjEyOC4wNjQtLjIuMTkxLS4yaC43ODNjLjE1MiAwIC4yNTYuMDI0LjMxMi4wOC4wNjQuMDQ4LjExMi4xNi4xNi4zMTJsMS4zNDIgNS4yODQgMS4yNDUtNS4yODRjLjA0LS4xNi4wODgtLjI2NC4xNTItLjMxMmEuNTQ5LjU0OSAwIDAgMSAuMzItLjA4aC42MzhjLjE1MiAwIC4yNTYuMDI0LjMyLjA4LjA2NC4wNDguMTIuMTYuMTUyLjMxMmwxLjI2MSA1LjM0OCAxLjM4MS01LjM0OGMuMDQ4LS4xNi4xMDQtLjI2NC4xNi0uMzEyYS41Mi41MiAwIDAgMSAuMzExLS4wOGguNzQzYy4xMjggMCAuMi4wNjQuMi4yIDAgLjA0LS4wMDguMDgtLjAxNi4xMjhhMS4xMzcgMS4xMzcgMCAwIDEtLjA1Ni4ybC0xLjkyMyA2Ljg3Yy0uMDQ4LjE2LS4xMDQuMjY0LS4xNjguMzEyYS41NDkuNTQ5IDAgMCAxLS4zMi4wOGgtLjY4N2MtLjE1MiAwLS4yNTYtLjAyNC0uMzItLjA4LS4wNjMtLjA1Ni0uMTItLjE2LS4xNTEtLjMybC0xLjIzOC01LjE0OC0xLjIzIDUuMTRjLS4wNC4xNi0uMDg4LjI2NC0uMTUyLjMyLS4wNjQuMDU2LS4xNzUuMDgtLjMyLjA4em0xMC4yOTMuMjRjLS40MTUgMC0uODMtLjA0OC0xLjIyOS0uMTUyLS4zOTktLjEwNC0uNzEtLjIxNi0uOTE4LS4zNDQtLjEyOC0uMDgtLjIxNi0uMTY4LS4yNC0uMjU2YS42MTUuNjE1IDAgMCAxLS4wNC0uMjE2di0uNDA3YzAtLjE2Ny4wNjQtLjI0Ny4xODMtLjI0Ny4wNDggMCAuMDk2LjAwOC4xNDQuMDI0cy4xMi4wNjQuMi4xMDRjLjI3MS4xMi41NjYuMjE2Ljg3OC4yODguMzIuMDcyLjYzLjEwNC45NS4xMDQuNTAyIDAgLjg5NC0uMDg4IDEuMTY1LS4yNjRhLjg2Ljg2IDAgMCAwIC40MTUtLjc1OC43NzcuNzc3IDAgMCAwLS4yMTUtLjU1OWMtLjE0NC0uMTUxLS40MTUtLjI4Ny0uODA2LS40MTVsLTEuMTU3LS4zNmMtLjU4My0uMTgzLTEuMDE0LS40NTUtMS4yNzctLjgxNGExLjk0MyAxLjk0MyAwIDAgMS0uNC0xLjE2NmMwLS4zMzUuMDczLS42My4yMTYtLjg4Ni4xNDQtLjI1NS4zMzUtLjQ3OS41NzUtLjY1NC4yNC0uMTg0LjUxLS4zMi44My0uNDE1YTMuNjYgMy42NiAwIDAgMSAxLjAxMy0uMTM2Yy4xNzUgMCAuMzYuMDA4LjUzNS4wMzIuMTgzLjAyNC4zNS4wNTYuNTE4LjA4OC4xNi4wNC4zMTIuMDguNDU1LjEyNy4xNDQuMDQ4LjI1Ni4wOTYuMzM2LjE1MmEuNjkuNjkgMCAwIDEgLjI0LjIuNDMuNDMgMCAwIDEgLjA3MS4yNjN2LjM3NWMwIC4xNjgtLjA2NC4yNTYtLjE4NC4yNTZhLjgzLjgzIDAgMCAxLS4zMDMtLjA5NiAzLjY1MiAzLjY1MiAwIDAgMC0xLjUzMi0uMzExYy0uNDU1IDAtLjgxNS4wNzItMS4wNjIuMjIzLS4yNDguMTUyLS4zNzUuMzgzLS4zNzUuNjk0IDAgLjIyNC4wOC40MTYuMjQuNTY3LjE2LjE1Mi40NTQuMzA0Ljg3LjQ0bDEuMTMzLjM1OGMuNTc0LjE4NC45OS40NCAxLjIzNy43NjcuMjQ3LjMyNy4zNjcuNzAyLjM2NyAxLjExNyAwIC4zNDMtLjA3Mi42NTUtLjIwNy45MjYtLjE0NC4yNzItLjMzNi41MTEtLjU4My43MDMtLjI0OC4yLS41NDMuMzQzLS44ODYuNDQ3LS4zNi4xMTEtLjczNC4xNjctMS4xNDIuMTY3eiIvPjwvc3ZnPgo=&logoColor=white",
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
        url: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik01LjA0MiAxNS4xNjVhMi41MjggMi41MjggMCAwIDEtMi41MiAyLjUyM0EyLjUyOCAyLjUyOCAwIDAgMSAwIDE1LjE2NWEyLjUyNyAyLjUyNyAwIDAgMSAyLjUyMi0yLjUyaDIuNTJ2Mi41MnptMS4yNzEgMGEyLjUyNyAyLjUyNyAwIDAgMSAyLjUyMS0yLjUyIDIuNTI3IDIuNTI3IDAgMCAxIDIuNTIxIDIuNTJ2Ni4zMTNBMi41MjggMi41MjggMCAwIDEgOC44MzQgMjRhMi41MjggMi41MjggMCAwIDEtMi41MjEtMi41MjJ2LTYuMzEzek04LjgzNCA1LjA0MmEyLjUyOCAyLjUyOCAwIDAgMS0yLjUyMS0yLjUyQTIuNTI4IDIuNTI4IDAgMCAxIDguODM0IDBhMi41MjggMi41MjggMCAwIDEgMi41MjEgMi41MjJ2Mi41Mkg4LjgzNHptMCAxLjI3MWEyLjUyOCAyLjUyOCAwIDAgMSAyLjUyMSAyLjUyMSAyLjUyOCAyLjUyOCAwIDAgMS0yLjUyMSAyLjUyMUgyLjUyMkEyLjUyOCAyLjUyOCAwIDAgMSAwIDguODM0YTIuNTI4IDIuNTI4IDAgMCAxIDIuNTIyLTIuNTIxaDYuMzEyem0xMC4xMjIgMi41MjFhMi41MjggMi41MjggMCAwIDEgMi41MjItMi41MjFBMi41MjggMi41MjggMCAwIDEgMjQgOC44MzRhMi41MjggMi41MjggMCAwIDEtMi41MjIgMi41MjFoLTIuNTIyVjguODM0em0tMS4yNjggMGEyLjUyOCAyLjUyOCAwIDAgMS0yLjUyMyAyLjUyMSAyLjUyNyAyLjUyNyAwIDAgMS0yLjUyLTIuNTIxVjIuNTIyQTIuNTI3IDIuNTI3IDAgMCAxIDE1LjE2NSAwYTIuNTI4IDIuNTI4IDAgMCAxIDIuNTIzIDIuNTIydjYuMzEyem0tMi41MjMgMTAuMTIyYTIuNTI4IDIuNTI4IDAgMCAxIDIuNTIzIDIuNTIyQTIuNTI4IDIuNTI4IDAgMCAxIDE1LjE2NSAyNGEyLjUyNyAyLjUyNyAwIDAgMS0yLjUyLTIuNTIydi0yLjUyMmgyLjUyem0wLTEuMjY4YTIuNTI3IDIuNTI3IDAgMCAxLTIuNTItMi41MjMgMi41MjYgMi41MjYgMCAwIDEgMi41Mi0yLjUyaDYuMzEzQTIuNTI3IDIuNTI3IDAgMCAxIDI0IDE1LjE2NWEyLjUyOCAyLjUyOCAwIDAgMS0yLjUyMiAyLjUyM2gtNi4zMTN6Ii8+PC9zdmc+Cg==&logoColor=white",
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

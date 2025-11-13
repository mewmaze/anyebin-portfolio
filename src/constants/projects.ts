interface TroubleShooting {
  title: string;
  description: string;
}

interface ProjectBase {
  readonly id: string;
  readonly title: string;
  readonly period: string;
  readonly team: string;
  readonly role: string;
  readonly tech: readonly string[];
  readonly description: string;
  readonly details: string;
  readonly troubleshooting?: readonly TroubleShooting[];
  readonly link: string;
  readonly github: string;
  readonly image: string;
}

export const projects = [
  {
    id: "traveloper",
    title: "Traveloper",
    period: "2025.08 ~ 2025.10",
    team: "1인 (개인)",
    role: "풀스택",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"] as const,
    description: "해외여행 중 지출을 관리하는 서비스",
    details: "Server Actions를 활용한 서버 로직 구현...",
    troubleshooting: [
      {
        title: "환율 API 연동",
        description: "실시간 환율 데이터 처리 시 캐싱 문제 해결...",
      },
      {
        title: "타입 안전성",
        description: "Zod를 통한 폼 검증으로 런타임 에러 방지...",
      },
    ] as const,
    link: "https://traveloper.vercel.app",
    github: "https://github.com/mewmaze/Traveloper",
    image: "/traveloper.png",
  },
  {
    id: "ss",
    title: "Traveloper",
    period: "2025.08 ~ 2025.10",
    team: "1인 (개인)",
    role: "풀스택",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"] as const,
    description: "해외여행 중 지출을 관리하는 서비스",
    details: "Server Actions를 활용한 서버 로직 구현...",
    troubleshooting: [
      {
        title: "환율 API 연동",
        description: "실시간 환율 데이터 처리 시 캐싱 문제 해결...",
      },
      {
        title: "타입 안전성",
        description: "Zod를 통한 폼 검증으로 런타임 에러 방지...",
      },
    ] as const,
    link: "https://traveloper.vercel.app",
    github: "https://github.com/mewmaze/Traveloper",
    image: "/traveloper.png",
  },
  {
    id: "dr",
    title: "Traveloper",
    period: "2025.08 ~ 2025.10",
    team: "1인 (개인)",
    role: "풀스택",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"] as const,
    description: "해외여행 중 지출을 관리하는 서비스",
    details: "Server Actions를 활용한 서버 로직 구현...",
    troubleshooting: [
      {
        title: "환율 API 연동",
        description: "실시간 환율 데이터 처리 시 캐싱 문제 해결...",
      },
      {
        title: "타입 안전성",
        description: "Zod를 통한 폼 검증으로 런타임 에러 방지...",
      },
    ] as const,
    link: "https://traveloper.vercel.app",
    github: "https://github.com/mewmaze/Traveloper",
    image: "/traveloper.png",
  },
  {
    id: "dper",
    title: "Traveloper",
    period: "2025.08 ~ 2025.10",
    team: "1인 (개인)",
    role: "풀스택",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"] as const,
    description: "해외여행 중 지출을 관리하는 서비스",
    details: "Server Actions를 활용한 서버 로직 구현...",
    troubleshooting: [
      {
        title: "환율 API 연동",
        description: "실시간 환율 데이터 처리 시 캐싱 문제 해결...",
      },
      {
        title: "타입 안전성",
        description: "Zod를 통한 폼 검증으로 런타임 에러 방지...",
      },
    ] as const,
    link: "https://traveloper.vercel.app",
    github: "https://github.com/mewmaze/Traveloper",
    image: "/traveloper.png",
  },
] as const;
export type Project = (typeof projects)[number];

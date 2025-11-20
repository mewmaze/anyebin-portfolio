// constants/projects.ts
interface DetailSection {
  title: string;
  items: readonly string[];
}

interface TroubleShooting {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

interface ProjectBase {
  id: string;
  title: string;
  period: string;
  team: string;
  role: string;
  tech: string[];
  description: string;
  details: string[];
  implementedFeatures?: DetailSection[];
  troubleshooting?: TroubleShooting[];
  link: string;
  github: string;
  image: string;
  screenshots: string[];
}

export const projects = [
  {
    id: "findmymeme",
    title: "Find My Meme",
    period: "2024.08 ~ 2025.01",
    team: "2인 (프론트엔드 1명, 백엔드 1명) • 기여도 100%",
    role: "프론트엔드 전반 구현",
    tech: ["React", "JavaScript", "Zustand", "Tanstack Query"] as const,
    description: "이미지 공유 커뮤니티",
    details: [
      "Masonry 레이아웃 + 무한 스크롤 구현",
      "좋아요 기능 낙관적 업데이트",
      "사용자 인증 상태 관리 및 JWT 토큰 만료 대응",
      "질문 게시판 및 S3 이미지 업로드 기능",
      "댓글 데이터 구조 최적화",
    ],
    implementedFeatures: [
      {
        title: "Masonry & 무한 스크롤을 활용한 이미지 제공",
        items: [
          "**Intersection Observer API**를 사용하여 스크롤이 문서 하단에 도달할 때 데이터 로드",
          "**React Query**의 **useInfiniteQuery**를 활용한 페이지네이션 관리",
          "**Masonry 레이아웃**을 적용해 불러온 이미지를 벽돌 형태로 정렬",
        ],
      },
      {
        title: "질문 게시판 및 이미지 업로드",
        items: [
          "**React Quill**을 사용해 에디터 기능 구현",
          "**presignedUrl**을 통해 이미지를 **S3**에 직접 업로드하고, 반환된 URL을 에디터에 삽입",
          "**useMemo**로 **Quill** 모듈을 감싸 불필요한 리렌더링 방지",
        ],
      },
      {
        title: "인증 및 API 통신 관리",
        items: [
          "**Zustand** 기반 전역 상태 관리로 로그인 상태, **JWT 토큰(access/refresh)**, 사용자 정보 관리",
          "**Axios 인터셉터**를 통한 **JWT** 자동 관리",
          "모든 요청 시 **access token** 자동 추가",
          "응답 **401 에러** 발생 시 **refresh token**으로 token 재발급 시도",
          "재발급 실패 시 강제 로그아웃 처리 (**무한 루프 방지**)",
        ],
      },
      {
        title: "좋아요 기능 - 낙관적 업데이트",
        items: [
          "**React Query**의 **useMutation**을 활용하여 사용자가 좋아요 버튼 클릭 시 서버 응답을 기다리지 않고 즉시 **UI 반영**",
          "요청 실패 시 **자동 롤백**으로 데이터 일관성 유지",
        ],
      },
      {
        title: "댓글 및 답댓글 구조 최적화",
        items: [
          "중첩 댓글 구조를 **parentId** 기반으로 평탄화하여 불필요한 재귀 렌더링 제거",
          "답댓글 깊이를 **1단계**로 제한하고 동일 계층에서 렌더링하도록 개선",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "로그아웃 시 의도치 않은 401 에러 및 페이지 이동",
        problem:
          "로그아웃 버튼 클릭 시 메인 페이지(/)로 이동해야 하는데 마이페이지(/users/username)로 이동했고, 동시에 React Query가 /meme-posts/me 요청을 보내 401 Unauthorized 에러 발생",
        solution:
          "로그아웃 함수에서 Zustand 상태 초기화 전에 queryClient.cancelQueries()로 진행 중인 모든 요청을 취소하고, queryClient.clear()로 캐시를 전체 초기화. useInfiniteQuery의 enabled 옵션을 !!username && isLoggedIn으로 설정하여 로그아웃 후 요청이 비활성화되도록 함. 로그아웃 버튼에 stopPropagation()을 추가하여 이벤트 버블링 방지",
        result:
          "로그아웃 직후 불필요한 서버 요청이 제거되어 401 에러가 발생하지 않았고, React Query 상태와 Zustand 상태가 동기화되면서 메인 페이지로 정상 이동",
      },
      {
        title: "좋아요 기능 - 낙관적 업데이트로 UX 개선",
        problem:
          "밈 게시물의 좋아요 버튼 클릭 시 서버 응답을 기다리는 동안 UI가 반응하지 않아 사용자가 버튼이 작동하지 않는 것처럼 느낌. 특히 네트워크 지연이 있을 때 사용자 경험 저하",
        solution:
          "React Query의 useMutation에서 onMutate 콜백으로 요청 전에 캐시를 즉시 수정하여 UI를 먼저 업데이트하고, onError에서 요청 실패 시 이전 상태로 자동 롤백되도록 구현. 특히 useInfiniteQuery의 페이지네이션 구조를 고려하여 pages 배열을 순회하며 정확한 게시물만 타겟팅하여 업데이트",
        result:
          "좋아요 버튼 클릭 시 좋아요 수와 하트 아이콘이 즉시 반영되어 사용자 체감 응답성이 향상됨. 요청 실패 시에도 자동 롤백으로 데이터 일관성이 유지됨",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://findmymeme.online",
    github: "https://github.com/AhnSeene/find-my-meme-frontend",
    image: "/findmymeme.png",
    screenshots: [
      "/projects/findmymeme/main.png",
      "/projects/findmymeme/main-mobile.png",
      "/projects/findmymeme/best.png",
      "/projects/findmymeme/upload.png",
      "/projects/findmymeme/findmymeme-detail.png",
      "/projects/findmymeme/findmymeme-list.png",
      "/projects/findmymeme/findmymeme.png",
      "/projects/findmymeme/write.png",
      "/projects/findmymeme/profile.png",
    ],
  },
  {
    id: "traveloper",
    title: "Traveloper",
    period: "2025.08 ~ 2025.10",
    team: "1인 • 기여도 100%",
    role: "풀스택",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"] as const,
    description: "여행 지출 관리 서비스",
    details: [
      "Server Actions를 활용한 서버 로직 구현",
      "타입 안전 폼 검증 (Zod + React Hook Form)",
      "날짜별 지출 필터링 및 통계 대시보드",
      "실시간 환율 API 연동",
    ],
    implementedFeatures: [
      {
        title: "Server Actions를 활용한 서버 로직 구현",
        items: [
          "**Next.js Server Actions**로 서버 로직 구현",
          "클라이언트/서버 코드 분리로 **보안성 강화**",
        ],
      },
      {
        title: "타입 안전 폼 검증 (Zod + React Hook Form)",
        items: [
          "**Zod** 스키마로 여행 생성 폼의 입력값 런타임 검증",
          "**React Hook Form**과 연동하여 실시간 검증 및 에러 메시지 제공",
        ],
      },
      {
        title: "실시간 환율 API 연동 및 자동 계산",
        items: [
          "국가 선택 시 **countryCode** → 통화코드 매핑 → 환율 API 호출",
          "**useExchange** 훅으로 환율 정보 재사용 가능하게 구현",
        ],
      },
      {
        title: "날짜별 지출 필터링 및 통계 대시보드",
        items: [
          "지출 내역을 **날짜별**로 필터링하여 일일 지출 현황 파악",
          "지출 통계 대시보드로 **날짜별 지출액 그래프**, **카테고리별 사용 금액 원형 그래프** 제공",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "환율 API 캐싱 및 성능 최적화",
        problem: "국가 선택할 때마다 환율 API를 호출해 네트워크 지연 발생",
        solution:
          "useCallback으로 함수 메모이제이션, 환율 데이터를 상태에 캐싱하여 불필요한 재계산 방지",
        result: "API 호출 최소화로 초기 렌더링 성능 개선 및 사용자 경험 향상",
      },
      {
        title: "폼 검증 에러 처리",
        problem: "잘못된 입력값이 제출될 때 사용자 피드백 부족",
        solution:
          "Zod 스키마로 런타임 검증, React Hook Form과 연동하여 각 필드별 에러 메시지 실시간 표시",
        result: "사용자가 폼 제출 전에 입력 오류를 인식하고 수정 가능",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://traveloper.vercel.app",
    github: "https://github.com/mewmaze/Traveloper",
    image: "/traveloper.png",
    screenshots: [
      "/projects/traveloper/list.png",
      "/projects/traveloper/newexchange.png",
      "/projects/traveloper/newTrip.png",
      "/projects/traveloper/TripData.png",
    ],
  },
  {
    id: "healthconnect",
    title: "HealthConnect",
    period: "2024.06 ~ 2024.08",
    team: "3인 (프론트, 백엔드, 기능별 구현) • 기여도 60%",
    role: "UI/UX 디자인, 챌린지 기능, 메인 페이지",
    tech: ["React", "JavaScript", "Node.js", "MySQL", "MUI"] as const,
    description: "운동 챌린지 커뮤니티",
    details: [
      "챌린지 정보 시각화 (달력 기반)",
      "시간대 동기화 (UTC ↔ Local)",
      "DB 설계 및 API 개발",
    ],
    implementedFeatures: [
      {
        title: "챌린지 정보 시각화 (달력 기반)",
        items: [
          "**React Calendar**를 사용하여 챌린지 기간을 시각적으로 표시",
          "현재 날짜와 챌린지 기간, 달성 조건에 따라 동적으로 **예상 뱃지 개수** 계산",
          "현재 날짜부터 챌린지 종료일까지 획득 가능한 뱃지를 시각적으로 표시",
        ],
      },
      {
        title: "시간대 동기화 (UTC ↔ Local)",
        items: [
          "서버에서는 **UTC** 기준으로 시간 저장하고, 클라이언트에서 **Luxon** 라이브러리로 로컬 시간으로 변환",
          "시간 차이로 인한 **날짜 불일치 문제 해결**",
          "다양한 지역의 사용자도 정확한 시간 정보 제공",
        ],
      },
      {
        title: "DB 설계 및 API 개발",
        items: [
          "**Sequelize ORM**을 사용해 **MySQL** 기반으로 Challenge, Participant, ChallengeRecord 테이블 설계",
          "테이블 간 관계를 명확히 정의하여 데이터 흐름 구조화",
          "**Express.js** 기반 **RESTful API** 서버 구현 (라우터 분리로 유지보수성 향상)",
          "**multer** 미들웨어를 사용하여 사용자 파일 업로드 처리 및 관리",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title:
          "클라이언트와 서버 간의 시간대(UTC) 차이로 인한 날짜 불일치 문제",
        problem:
          "서버에 UTC 기준 시간이 저장되어, 클라이언트에서 표시할 때 로컬 시간과 달라 날짜가 하루씩 밀리는 문제 발생",
        solution:
          "처음에는 클라이언트에서만 시간 보정을 하거나 서버에서 로컬 타임존 기준으로 저장하는 방법도 고려했으나, 여러 국가 환경에서 시간 기준을 일관되게 유지하기 어려움. 세계 공통 기준인 UTC로 저장하고 클라이언트에서 로컬 시간으로 변환하여 표시. Luxon 라이브러리의 toUTC()와 toLocal() 메서드를 활용하여 시간대 변환을 간결하게 처리",
        result:
          "배포 환경에서도 생길 수 있는 시간대 차이 오류를 방지. 다양한 서버 환경에서도 UTC 기준으로 일관된 시간 처리 가능. 사용자 환경에 맞는 정확한 시간 정보 제공",
      },
      {
        title:
          "챌린지 완료 여부 기록 시 날짜별 업데이트 오류 (서버와 로컬 데이터 동기화)",
        problem:
          "프로젝트에서 서버와 로컬 데이터 동기화는 가장 어려운 문제. 사용자가 챌린지 완료버튼을 클릭할 때, 로컬 상태는 즉시 업데이트되었지만 서버와 동기화되지 않아 상태가 일치하지 않음. 화면 새로고침이나 다른 페이지로 이동 후 기존 챌린지 완료 기록이 사라지거나 잘못 표시되는 상황 발생",
        solution:
          "로컬 상태에만 의존하면 사용자 반응이 빠르다는 장점이 있지만, 데이터가 최신 상태로 유지되지 않는 문제 발생. 모든 데이터를 서버에 의존하면 최신 상태는 보장되지만 과도한 요청으로 인한 성능 저하 가능. 이를 해결하기 위해 서버에서 받아온 데이터를 날짜별로 그룹화하고 이를 로컬 상태와 병합하는 방식으로 접근. 로컬 상태는 사용자에게 즉시 반영되도록 유지하면서도, 서버에서 주기적으로 데이터를 받아 변경된 부분만 업데이트",
        result:
          "로컬과 서버 각각의 역할을 구분하고, 상황에 맞게 조화롭게 사용하는 것의 중요성을 배움. 일관성과 성능을 모두 고려한 데이터 동기화 방식 구현 가능",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://github.com/mewmaze/HealthConnect",
    github: "https://github.com/mewmaze/HealthConnect",
    image: "/healthconnect.png",
    screenshots: [
      "/projects/healthconnect/main.png",
      "/projects/healthconnect/challengeList.png",
      "/projects/healthconnect/challengeDetail.png",
      "/projects/healthconnect/challengeDiary.png",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    period: "2025.11.10 ~ 2025.11.15",
    team: "1인 • 기여도 100%",
    role: "프론트엔드 전체 구현",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] as const,
    description: "포트폴리오 웹사이트",
    details: [
      "Next.js와 TypeScript로 SPA 구현",
      "Framer Motion을 사용한 애니메이션 적용",
      "Tailwind CSS를 활용한 반응형 UI 디자인",
    ],
    implementedFeatures: [
      {
        title: "프론트엔드 전반 구현",
        items: [
          "Next.js App Router 기반 페이지 구성",
          "React와 Tailwind CSS로 반응형 레이아웃 구현",
          "Framer Motion으로 스크롤 애니메이션 및 카드 모션 구현",
        ],
      },
      {
        title: "프로젝트 및 스킬 섹션",
        items: [
          "ProjectCard 컴포넌트로 프로젝트 상세 보기 구현",
          "툴팁과 버튼 모션으로 UI/UX 향상",
          "SkillsSection에서 배지/카드 토글 기능 구현",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "스크롤 기반 헤더 색상 변경 - 반응형 섹션 인식 구현",
        problem:
          "스크롤 위치에 따라 헤더 로고 색상을 각 섹션별로 변경하는 기능 구현 중, 초기 로드 시 의도한 검정색이 아닌 초록색으로 시작되고, 모바일과 데스크탑에서 색상 변경 타이밍이 달라지는 문제 발생. About 섹션의 offsetTop이 0으로 Hero 섹션과 구분이 안 되어 조건문이 제대로 작동하지 않음",
        solution:
          "Hero 섹션에 id를 추가하고 실제 offsetHeight를 기준점으로 사용. getBoundingClientRect()로 motion.section 래퍼를 포함한 정확한 섹션 위치를 계산하고, 임의의 오프셋(-100) 대신 실제 섹션 시작 지점을 기준으로 색상 전환 로직 수정. useEffect로 scroll 이벤트를 감지하여 각 섹션 경계에서 정확히 색상이 변경되도록 구현",
        result:
          "모든 화면 크기에서 일관되게 Hero(검정) → About(초록) → Skills(파랑) → Projects(연두) 순서로 색상 전환이 작동하며, 섹션 시작 지점에서 정확히 색상이 변경되어 자연스러운 스크롤 경험 제공. 반응형 디자인에서도 안정적으로 동작함",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://myportfolio.vercel.app",
    github: "https://github.com/username/my-portfolio",
    image: "/projects/myportfolio/thumbnail.png",
    screenshots: [
      "/projects/myportfolio/main.png",
      "/projects/myportfolio/skills.png",
      "/projects/myportfolio/projects.png",
      "/projects/myportfolio/contact.png",
    ],
  },
];

export type Project = (typeof projects)[number];

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
  isLinkDisabled?: boolean;
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
          "**useMemo**로 Quill 모듈을 감싸 불필요한 리렌더링 방지",
        ],
      },
      {
        title: "인증 및 API 통신 관리",
        items: [
          "**Zustand** 기반 전역 상태 관리로 **로그인 상태**, **JWT 토큰(access/refresh)**, **사용자 정보** 관리",
          "**Axios 인터셉터**를 통한 **JWT** 자동 관리",
          "모든 요청 시 **access token 자동 추가**",
          "응답 **401 에러** 발생 시 **refresh token**으로 **token 재발급** 시도",
          "**Token Refresh Queue 패턴** 적용 - 동시 다발 401 발생 시 첫 요청만 /reissue 호출, 나머지는 큐에 대기시켜 중복 리프레시 방지",
          "재발급 실패 시 강제 로그아웃 처리 (**무한 루프 방지**)",
        ],
      },
      {
        title: "좋아요 기능 - 낙관적 업데이트",
        items: [
          "**React Query**의 **useMutation**을 활용하여 사용자가 좋아요 버튼 클릭 시 서버 응답을 기다리지 않고 **즉시 UI 반영**",
          "요청 실패 시 **자동 롤백**으로 데이터 일관성 유지",
        ],
      },
      {
        title: "댓글 및 답댓글 구조 최적화",
        items: [
          "중첩 댓글 구조를 **parentId 기반**으로 **평탄화**하여 불필요한 재귀 렌더링 제거",
          "**답댓글 깊이**를 **1단계**로 제한하고 동일 계층에서 렌더링하도록 개선",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "로그아웃 시 401 에러 및 잘못된 페이지 이동",
        problem:
          "로그아웃 시 /users/username 페이지로 이동하고 React Query에서 /meme-posts/me 요청이 재발생해 401 에러가 출력됨.",
        solution:
          "Zustand 초기화 전에 queryClient.cancelQueries( )로 진행 중 요청 취소, queryClient.clear( )로 캐시 초기화. 또한 useInfiniteQuery의 enabled 조건을 !!username && isLoggedIn으로 수정하고, 클릭 이벤트는 stopPropagation( )으로 버블링 차단.",
        result:
          "로그아웃 직후 불필요한 요청이 발생하지 않고 401 에러 없이 정상적으로 메인 페이지로 이동.",
      },
      {
        title: "좋아요 기능 – 낙관적 업데이트 적용",
        problem:
          "좋아요 버튼 클릭 후 서버 응답이 느릴 때 UI 반응이 지연되어 버튼이 동작하지 않는 것처럼 보임.",
        solution:
          "React Query useMutation의 onMutate에서 캐시를 즉시 수정해 UI를 먼저 업데이트하고 실패 시 자동 롤백. 특히 useInfiniteQuery pages 구조에 맞게 특정 게시물만 정확히 수정하도록 구현.",
        result:
          "좋아요 수와 아이콘이 즉시 반영되어 체감 속도가 빨라졌으며 실패 시에도 일관된 데이터 유지.",
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
          "**Zod 스키마**로 여행 생성 폼의 입력값 런타임 검증",
          "**React Hook Form**과 연동하여 실시간 검증 및 에러 메시지 제공",
        ],
      },
      {
        title: "실시간 환율 API 연동 및 자동 계산",
        items: [
          "국가 선택 시 countryCode → 통화코드 매핑 → 환율 API 호출",
          "**useExchange 훅**으로 환율 정보 재사용 가능하게 구현",
        ],
      },
      {
        title: "날짜별 지출 필터링 및 통계 대시보드",
        items: [
          "지출 내역을 **날짜별**로 **필터링**하여 일일 지출 현황 파악",
          "지출 통계 대시보드로 **날짜별 지출액 그래프**, **카테고리별 사용 금액 원형 그래프** 제공",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "Server Component 전환을 통한 초기 로딩 최적화",
        problem:
          "trips 페이지가 클라이언트 컴포넌트로 구현되어 있어 페이지 진입 시 JavaScript 로드 → 컴포넌트 마운트 → useEffect에서 데이터 요청 → 렌더링 순서로 동작했습니다. 이 과정에서 사용자는 2~3초간 빈 화면을 보게 되었고, 로딩 스켈레톤을 표시하더라도 체감 속도가 느렸습니다.",
        solution:
          "page.tsx를 async Server Component로 전환하여 서버에서 미리 Supabase 데이터를 조회하도록 변경했습니다. 라우터 이동이나 버튼 클릭 같은 상호작용이 필요한 부분만 TripsContent라는 별도의 Client Component로 분리하고, 서버에서 가져온 데이터를 props로 전달하는 구조로 리팩토링했습니다.",
        result:
          "서버에서 데이터가 포함된 완성된 HTML을 전달하므로 페이지 진입 시 즉시 콘텐츠가 표시되어 초기 로딩 속도가 크게 개선되었습니다. useState, useEffect, 로딩 상태 관리 등 클라이언트 코드가 제거되어 컴포넌트가 단순해지고 JavaScript 번들 크기도 줄어들었습니다.",
      },
      {
        title: "환율 API 호출 최적화 및 보안 강화",
        problem:
          "클라이언트에서 직접 환율 API를 호출하면 API 키가 브라우저에 노출되는 보안 문제가 있었고, 국가 선택 시마다 반복 호출되어 불필요한 네트워크 요청이 발생했습니다.",
        solution:
          "환율 데이터를 가져오는 로직을 Server Action으로 분리하여 API 키를 서버에서만 관리하도록 했습니다. 또한 useCallback으로 환율 계산 함수를 메모이제이션하고, 컴포넌트 상태로 환율 데이터를 관리하여 동일한 통화에 대한 재호출을 방지했습니다.",
        result:
          "API 키가 클라이언트에 노출되지 않아 보안이 강화되었고, 불필요한 API 재호출이 줄어 사용자 경험이 개선되었습니다.",
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
    team: "3인 (프론트, 백엔드, 기능별 구현) • 기여도 70%",
    role: "UI/UX 디자인, 챌린지 기능, 메인 페이지, 배포",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "MySQL",
      "MUI",
      "AWS (EC2, RDS, CloudFront)",
      "Vercel",
      "GitHub Actions",
      "PM2",
    ] as const,
    description: "운동 챌린지 커뮤니티",
    details: [
      "챌린지 정보 시각화 (달력 기반)",
      "시간대 동기화 (UTC ↔ Local)",
      "DB 설계 및 API 개발",
      "AWS 기반 배포 인프라 구축",
    ],
    implementedFeatures: [
      {
        title: "챌린지 정보 시각화 (달력 기반)",
        items: [
          "**React Calendar**를 사용하여 챌린지 기간을 시각적으로 표시",
          "현재 날짜와 챌린지 기간, 달성 조건에 따라 동적으로 **예상 뱃지 개수** 계산",
          "현재 날짜부터 챌린지 종료일까지 획득 가능한 뱃지를 **시각적으로 표시**",
        ],
      },
      {
        title: "시간대 동기화 (UTC ↔ Local)",
        items: [
          "서버에서는 **UTC** 기준으로 시간 저장하고, 클라이언트에서 **Luxon** 라이브러리로 로컬 시간으로 변환",
          "시간 차이로 인한 **날짜 불일치 문제 해결**",
        ],
      },
      {
        title: "DB 설계 및 API 개발",
        items: [
          "**Sequelize ORM**을 사용해 **MySQL** 기반으로 Challenge, Participant, ChallengeRecord **테이블 설계**",
          "테이블 간 관계를 명확히 정의하여 데이터 흐름 구조화",
          "**Express.js** 기반 **RESTful API** 서버 구현 (라우터 분리로 유지보수성 향상)",
          "**multer 미들웨어**를 사용하여 사용자 파일 업로드 처리 및 관리",
        ],
      },
      {
        title: "배포 인프라 구축",
        items: [
          "**프론트엔드**: Vercel에 React 앱 배포",
          "**백엔드**: AWS EC2에 Node.js 서버 배포 및 **PM2**로 프로세스 관리",
          "**AWS RDS MySQL** 데이터베이스 연동 및 보안 그룹 설정",
          "**CloudFront**를 활용해 HTTP 백엔드를 HTTPS로 래핑하여 Mixed Content 보안 이슈 해결",
          "**GitHub Actions**로 CI/CD 파이프라인 구축 (배포 자동화로 시간 단축)",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "UTC 기반 저장으로 인한 날짜 불일치 문제",
        problem:
          "서버가 UTC 기준으로 시간을 저장하면서 클라이언트에서 표시할 때 로컬 시간과 하루씩 차이가 나는 문제가 발생함.",
        solution:
          "서버는 전 세계 공통 기준인 UTC로 저장하고 클라이언트에서 로컬 시간으로 변환하는 방식으로 일관성을 유지함. Luxon의 toUTC( ), toLocal( ) 메서드를 사용하여 시간 변환 로직을 단순화함.",
        result:
          "다양한 환경에서 시간대 오류를 방지하고 사용자 로컬 기준으로 정확한 날짜를 안정적으로 표시할 수 있게 됨.",
      },
      {
        title: "챌린지 완료 여부의 날짜별 기록이 서버와 동기화되지 않는 문제",
        problem:
          "사용자가 챌린지 완료 버튼을 눌렀을 때 로컬 상태는 즉시 변경되지만 서버와의 동기화가 지연되어 새로고침 후 기록이 사라지거나 잘못 표시되는 문제가 발생함.",
        solution:
          "서버에서 받아온 기록을 날짜별로 그룹화한 뒤 로컬 상태와 병합하여 관리함. 로컬 상태는 즉각적인 UI 반응을 제공하고 서버 데이터는 주기적으로 갱신해 변경된 부분만 업데이트하도록 처리함.",
        result:
          "로컬 반응성과 서버 데이터의 일관성을 모두 확보하여 안정적인 상태 동기화 구조를 구현함.",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://health-connect-psi-blush.vercel.app/",
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
      "Framer Motion을 사용한 애니메이션",
      "Tailwind CSS를 활용한 반응형 UI 디자인",
    ],
    implementedFeatures: [
      {
        title: "반응형 레이아웃 및 UI/UX",
        items: [
          "**Tailwind CSS**로 모바일/데스크탑 **반응형 레이아웃** 구현",
          "**Framer Motion**으로 **스크롤 애니메이션** 및 카드 hover 효과 구현",
          "스킬 섹션에서 **배지/카드 토글** 기능 구현",
          "프로젝트 카드에 **툴팁**, **모달**, **이미지 프리뷰** 기능 추가",
          "스크롤 위치에 따라 **헤더 로고 색상** 동적으로 변경",
        ],
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "스크롤 시 섹션별 헤더 로고 색상 전환 오류",
        problem:
          "초기 로드 시 의도한 색상이 표시되지 않고 모바일·데스크탑 간 색상 전환 시점이 불일치하는 문제가 발생함. 이는 섹션의 실제 위치를 정확히 계산하지 못해 조건문이 오작동한 것이 원인이었음.",
        solution:
          "getBoundingClientRect( )로 각 섹션의 실제 시작 지점을 계산하고 해당 값을 기준으로 색상 전환 조건을 재구성함. 또한 useEffect에서 scroll 이벤트를 감지하여 섹션 경계에서 정확히 색상이 변경되도록 처리함.",
        result:
          "Hero → About → Skills → Projects 순서로 색상이 정확하게 전환되며 모든 화면 크기에서 일관된 반응형 동작을 제공함.",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://anyebin-portfolio.vercel.app/",
    github: "https://github.com/mewmaze/anyebin-portfolio",
    image: "/projects/myportfolio/thumbnail.png",
    screenshots: [
      "/projects/portfolio/1.gif",
      "/projects/portfolio/3.png",
      "/projects/portfolio/2.gif",
      "/projects/portfolio/6.png",
      "/projects/portfolio/7.png",
    ],
  },
];

export type Project = (typeof projects)[number];

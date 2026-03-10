// constants/projects.ts
export interface DetailSection {
  title: string;
  items: readonly string[];
  image?: string;
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
          "**TanStack Query**의 **useInfiniteQuery**를 활용한 페이지네이션 관리",
          "**Masonry 레이아웃**을 적용해 불러온 이미지를 벽돌 형태로 정렬",
          "전체 목록을 한 번에 불러오지 않아 초기 로드 시 서버 부하와 네트워크 전송량 감소",
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
          "**Zustand** 기반 전역 상태 관리로 **로그인 상태**, **JWT 토큰(access/refresh)**, **사용자 정보** 관리 — Redux 대비 보일러플레이트가 적고 번들 사이즈가 작아 선택",
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
          "서버 응답 대기 시 좋아요 버튼이 반응하지 않는 것처럼 보이는 문제를 해결하기 위해 적용",
          "**TanStack Query**의 **useMutation**을 활용하여 서버 응답을 기다리지 않고 **즉시 UI 반영**",
          "**useInfiniteQuery**의 **pages 배열 구조**에 맞게 특정 게시물만 정확히 수정",
          "요청 실패 시 **onMutate에서 저장한 이전 캐시로 자동 롤백**하여 데이터 일관성 유지",
        ],
      },
      {
        title: "댓글 및 답댓글 구조 최적화",
        items: [
          "중첩 댓글 구조를 **parentId 기반**으로 **평탄화**하여 불필요한 재귀 렌더링 제거",
          "**답댓글 깊이**를 **1단계**로 제한하고 동일 계층에서 렌더링하도록 개선",
        ],
      },
      {
        title: "반응형 이미지 제공 및 WebP 적용",
        items: [
          "GIF 애니메이션의 용량 문제를 해결하기 위해 **WebP 포맷**을 적용",
          "**&lt;picture&gt;** 태그와 **&lt;source&gt;의 media 속성**을 활용하여 화면 크기에 맞는 이미지를 브라우저가 자동 선택",
          "WebP를 지원하지 않는 환경을 위한 원본 GIF **fallback 구조** 적용",
          "결과: **원본 GIF(3,146KB) 대비 약 82% 용량 절감 (557KB)**",
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
      "/projects/findmymeme/fmm_1.png",
      "/projects/findmymeme/fmm_2.png",
      "/projects/findmymeme/fmm_3.png",
      "/projects/findmymeme/fmm_4.png",
      "/projects/findmymeme/fmm_5.png",
      "/projects/findmymeme/fmm_6.png",
      "/projects/findmymeme/fmm_7.png",
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
          "**Next.js Server Actions**로 서버 로직 구현 - 환율 API 호출 시 API 키가 브라우저에 노출되는 보안 문제를 해결하기 위해 선택",
          "클라이언트/서버 코드 분리로 **보안성 강화** 및 **클라이언트 JS 번들 경량화**",
        ],
      },
      {
        title: "타입 안전 폼 검증 (Zod + React Hook Form)",
        items: [
          "**Zod 스키마**로 여행 생성 폼의 입력값 런타임 검증 - TypeScript 타입과 런타임 검증을 하나의 스키마로 관리하기 위해 선택",
          "**React Hook Form**과 연동하여 실시간 검증 및 에러 메시지 제공",
        ],
      },
      {
        title: "실시간 환율 API 연동 및 자동 계산",
        items: [
          "국가 선택 시 countryCode → 통화코드 매핑 → 환율 API 호출",
          "**useCallback**으로 환율 계산 함수를 메모이제이션하고, 컴포넌트 상태로 환율 데이터를 관리하여 **동일 통화에 대한 재호출 방지**",
          "Server Action으로 분리하여 **API 키가 클라이언트에 노출되지 않도록** 처리",
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
          "trips 페이지가 클라이언트 컴포넌트로 구현되어 있어 JS 로드 → 마운트 → useEffect 데이터 요청 → 렌더링 순서로 동작. 사용자는 데이터가 올 때까지 빈 화면 또는 스켈레톤만 보게 됨.",
        solution:
          "page.tsx를 async Server Component로 전환하여 서버에서 데이터를 미리 조회. 상호작용이 필요한 부분만 Client Component로 분리하고 서버에서 가져온 데이터를 props로 전달하는 구조로 리팩토링.",
        result:
          "서버에서 데이터가 포함된 HTML을 전달하므로 페이지 진입 시 즉시 콘텐츠 표시. useState, useEffect, 로딩 상태 관리 등 클라이언트 코드 제거로 JS 번들 경량화.",
        // ✅ Lighthouse 수치 측정 후 result에 추가 예정
        // 예: "LCP 2.8s → 0.9s (68% 개선), JS 번들 크기 45KB 감소"
      },
      {
        title: "환율 API 호출 최적화 및 보안 강화",
        problem:
          "클라이언트에서 직접 환율 API를 호출하여 API 키가 브라우저에 노출되는 보안 문제 발생. 국가 선택 시마다 반복 호출로 불필요한 네트워크 요청 발생.",
        solution:
          "환율 데이터를 가져오는 로직을 Server Action으로 분리하여 API 키를 서버에서만 관리. useCallback으로 환율 계산 함수를 메모이제이션하고, 컴포넌트 상태로 환율 데이터를 관리하여 동일 통화에 대한 재호출 방지.",
        result:
          "API 키 클라이언트 노출 방지로 보안 강화. 동일 통화 재호출 제거로 불필요한 네트워크 요청 감소.",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://traveloper.vercel.app",
    github: "https://github.com/mewmaze/Traveloper",
    image: "/traveloper.png",
    screenshots: [
      "/projects/traveloper/traveloper_main.png",
      "/projects/traveloper/traveloper_list.png",
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
          "**백엔드**: AWS EC2에 Node.js 서버 배포 및 **PM2**로 프로세스 관리 - 서버 크래시 시 자동 재시작",
          "**AWS RDS MySQL** 데이터베이스 연동 및 보안 그룹 설정",
          "**CloudFront**를 HTTPS 종단점으로 활용하여 Mixed Content 보안 이슈 해결 - Vercel(HTTPS)에서 EC2(HTTP) API를 직접 호출하면 브라우저가 차단하므로, CloudFront를 중간에 두어 HTTPS → HTTP 변환",
          "**GitHub Actions**로 CI/CD 파이프라인 구축 - main 브랜치 push 시 EC2 자동 배포",
        ],
        image: "/projects/healthconnect/diagram.png",
      },
    ] as const satisfies readonly DetailSection[],
    troubleshooting: [
      {
        title: "Vercel ↔ EC2 간 Mixed Content 보안 이슈",
        problem:
          "Vercel에 배포된 프론트엔드(HTTPS)에서 EC2 백엔드(HTTP)로 API 요청 시 브라우저가 Mixed Content로 차단. EC2에 직접 SSL 인증서를 설정하는 것은 관리 부담이 큼.",
        solution:
          "AWS CloudFront를 EC2 앞에 배치하여 HTTPS 종단점 역할을 하도록 구성. 프론트엔드는 CloudFront(HTTPS)로 요청하고, CloudFront가 EC2(HTTP)로 전달하는 구조로 해결.",
        result:
          "브라우저의 Mixed Content 차단 없이 정상 통신. 추가로 CloudFront의 캐싱을 통해 정적 에셋 응답 속도도 개선.",
      },
      {
        title: "UTC 기반 저장으로 인한 날짜 불일치 문제",
        problem:
          "서버가 UTC 기준으로 시간을 저장하면서 클라이언트에서 표시할 때 로컬 시간과 하루씩 차이가 나는 문제 발생.",
        solution:
          "서버는 UTC로 저장하고 클라이언트에서 로컬 시간으로 변환하는 방식으로 일관성 유지. Luxon의 toUTC(), toLocal() 메서드를 사용하여 시간 변환 로직 단순화.",
        result:
          "다양한 환경에서 시간대 오류 방지. 사용자 로컬 기준으로 정확한 날짜 표시.",
      },
      {
        title: "챌린지 완료 여부의 날짜별 기록이 서버와 동기화되지 않는 문제",
        problem:
          "사용자가 챌린지 완료 버튼을 눌렀을 때 로컬 상태는 즉시 변경되지만 서버와의 동기화가 지연되어 새로고침 후 기록이 사라지거나 잘못 표시되는 문제 발생.",
        solution:
          "서버에서 받아온 기록을 날짜별로 그룹화한 뒤 로컬 상태와 병합하여 관리. 로컬 상태는 즉각적인 UI 반응을 제공하고 서버 데이터는 주기적으로 갱신해 변경된 부분만 업데이트.",
        result:
          "로컬 반응성과 서버 데이터의 일관성을 모두 확보하여 안정적인 상태 동기화 구조 구현.",
      },
    ] as const satisfies readonly TroubleShooting[],
    link: "https://healthconnect-web.vercel.app/",
    github: "https://github.com/mewmaze/HealthConnect",
    image: "/healthconnect.png",
    screenshots: [
      "/projects/healthconnect/hc_1.png",
      "/projects/healthconnect/hc_2.png",
      "/projects/healthconnect/hc_3.png",
      "/projects/healthconnect/hc_4.png",
      "/projects/healthconnect/hc_5.png",
      "/projects/healthconnect/hc_6.png",
      "/projects/healthconnect/hc_7.png",
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
      "/projects/portfolio/portfolio_video.gif",
      "/projects/portfolio/portfolio_1.png",
      "/projects/portfolio/portfolio_2.png",
      "/projects/portfolio/portfolio_3.png",
      "/projects/portfolio/portfolio_4.png",
      "/projects/portfolio/portfolio_5.png",
      "/projects/portfolio/portfolio_6.png",
      "/projects/portfolio/portfolio_7.png",
      "/projects/portfolio/portfolio_8.png",
    ],
  },
];

export type Project = (typeof projects)[number] &
  Partial<Pick<ProjectBase, "isLinkDisabled">>;

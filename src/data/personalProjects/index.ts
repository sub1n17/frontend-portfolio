export const personalProjects = [
    {
        id: 'stay-market-web',
        title: '숙박권 거래 플랫폼 (Web)',
        type: 'personal',
        summary: 'Next.js 기반 숙박권 등록·구매 서비스',

        thumbnail: '/images/project_p1.png',

        techStack: ['Next.js', 'TypeScript', 'React', 'Zustand', 'React Hook Form', 'PortOne'],

        features: [
            '숙박권 등록 · 수정 · 삭제',
            '게시글 검색 및 페이지네이션',
            '숙박권 구매 및 테스트 결제 연동',
            '로그인 / 회원가입 API 연동',
            '작성자만 수정 가능하도록 조건부 렌더링',
            '최근 본 숙박권 로컬스토리지 저장',
            '북마크 및 마이페이지 기능',
            '포인트 충전 · 사용 · 내역 조회',
        ],

        highlights: [
            'Zustand를 활용한 전역 인증 상태 관리',
            '결제 플로우와 포인트 시스템 구현',
            '웹 반응형 전체 대응',
        ],
        role: '프론트엔드 개발',
        period: '2024.11 – 2025.01',

        links: {
            demo: 'https://...',
        },

        isFeatured: true,
    },
    {
        id: 'place-share-app',
        title: '장소 공유 서비스 (Hybrid App)',
        type: 'personal',
        summary: '웹뷰 기반 장소 공유 하이브리드 애플리케이션',

        thumbnail: '/images/project_p2.png',

        techStack: [
            'Next.js',
            'TypeScript',
            'React Native',
            'Expo',
            'WebView',
            'Zustand',
            'React Hook Form',
            'Kakao Map',
        ],

        features: [
            '장소 등록 · 수정 · 삭제',
            '카카오 지도 연동 주소 등록',
            '지도 이동 후 현재 위치 주소 등록',
            '웹/앱 공통 UI 구조',
            '최근 본 장소 웹/앱 분기 처리',
            '앱 권한(위치, 알림) 설정 및 상태 동기화',
        ],

        highlights: [
            '웹과 앱 토큰 처리 방식 분기',
            '앱 권한 변경 후 상태 polling 처리',
            '웹뷰 환경 고려한 UX 설계',
        ],
        role: '프론트엔드 개발',
        period: '2025.01 – 진행중',

        isFeatured: true,
    },
    {
        id: 'mood-diary',
        title: '감정 다이어리',
        type: 'personal',
        summary: '로컬스토리지를 활용한 감정 기반 다이어리 웹 애플리케이션',

        thumbnail: '/images/project_p3.png',

        techStack: ['HTML', 'CSS', 'JavaScript'],

        features: [
            '로컬스토리지 기반 일기 등록 · 수정 · 삭제',
            '기분 선택 후 일기 작성',
            '기분별 일기 필터링',
            '다크모드 지원',
            'fetch를 활용한 랜덤 강아지 사진 보관함',
        ],

        highlights: ['로컬스토리지를 상태 저장소처럼 활용', 'UI 상태와 데이터 상태 분리 경험'],
        role: '프론트엔드 개발',
        period: '2024',
        links: {
            github: 'https://github.com/...',
            demo: 'https://...',
        },
    },

    {
        id: 'portfolio',
        title: '개인 포트폴리오 웹사이트',
        type: 'personal',

        summary: '프로젝트 구조화와 사용자 경험에 집중한 개인 포트폴리오 웹사이트',
        thumbnail: '/images/project_p4.png',

        techStack: ['Next.js', 'TypeScript', 'CSS Module'],

        features: [
            '개인·회사 프로젝트 분리 탭 구성',
            '프로젝트 데이터 기반 렌더링',
            '프로젝트 상세 페이지 구현',
            '반응형 웹 대응',
        ],

        highlights: [
            '컴포넌트 재사용성과 확장성을 고려한 구조 설계',
            '시맨틱 마크업과 접근성 고려',
        ],

        role: '기획 · 디자인 · 프론트엔드 개발',
        period: '2025.01',

        links: {
            github: 'https://github.com/...',
            demo: 'https://...',
        },

        isFeatured: false,
    },
];

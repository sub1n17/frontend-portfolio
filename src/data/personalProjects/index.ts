export const personalProjects = [
    {
        id: 'stay-market-web',
        title: '숙박권 거래 플랫폼 (Web)',
        type: 'personal',
        summary: 'Next.js 기반 숙박권 등록·구매 서비스',
        thumbnail: '/images/project_p1_1.png',
        demo: '/videos/demo_triptrip.mp4',
        cardSkills: ['Next.js', 'TypeScript', 'React'],
        skills: [
            {
                type: 'Skills',
                skill: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
            },
            {
                type: 'Tools & Frameworks',
                skill: [
                    'Next.js',
                    'Zustand',
                    'React Hook Form',
                    'PortOne API',
                    'Kakao Maps API',
                    'LocalStorage',
                    'Vercel',
                ],
            },
        ],
        overview: `
            여행자 간 숙박권 거래 및 커뮤니티 기능을 제공하는 서비스입니다.
            Next.js 기반의 반응형 웹을 구현했으며, 포트원 API를 통한 결제 시스템과
            포인트 기반의 숙박권 구매 서비스를 구현했습니다.`,
        features: [
            {
                title: '커뮤니티 시스템',
                desc: [
                    '이미지·유튜브 URL을 포함한 게시글 작성 및 댓글/대댓글 기능',
                    '페이지네이션과 검색 필터를 통한 게시글 조회',
                ],
            },
            {
                title: '숙박권 거래 및 포인트 결제',
                desc: [
                    'LocalStorage 기반 최근 본 숙박권 노출',
                    '포트원 API 연동을 통한 포인트 충전 및 숙박권 결제 시스템 (테스트 모드)',
                ],
            },
            {
                title: '사용자 맞춤 활동 관리',
                desc: [
                    '북마크, 판매 내역 등 개인 활동 데이터 연동',
                    '프로필 퀵 메뉴를 통한 서비스 편의성 제공',
                ],
            },
            {
                title: '인증 및 접근 제어',
                desc: [
                    'refreshToken을 활용한 로그인 유지 및 권한에 따른 리다이렉션 처리',
                    '비밀번호 변경 등 회원 정보 관리',
                ],
            },
        ],
        role: '프론트엔드 개발',
        period: '2025.08 - 2025.11',
        links: {
            github: 'https://github.com/sub1n17/triptrip-frontend',
            demo: 'https://triptrip-frontend.vercel.app/',
        },
    },
    {
        id: 'place-share-app',
        title: '장소 공유 서비스 (Hybrid App)',
        type: 'personal',
        summary: '웹뷰 기반 장소 공유 하이브리드 애플리케이션',
        thumbnail: '/images/project_p2.png',
        objectPosition: '70% center',
        demo: '/videos/demo_hybrid.mp4',
        featureDemo: '/videos/demo_mobile.mp4',
        cardSkills: ['Next.js', 'TypeScript', 'React Native'],
        skills: [
            {
                type: 'Skills',
                skill: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'React Native'],
            },
            {
                type: 'Tools & Frameworks',
                skill: [
                    'Next.js',
                    'Zustand',
                    'React Hook Form',
                    'Expo',
                    'Kakao Maps API',
                    'SecureStore / LocalStorage',
                    'EAS',
                ],
            },
        ],
        overview: `
            웹뷰 기반으로 구현한 장소 공유 하이브리드 애플리케이션입니다.
            React Native와 WebView를 연동하여 모바일 환경에 최적화된 레이아웃을 구성했으며,
            지도 기반의 위치 등록과 디바이스 권한 설정 등 사용자 경험을 고려하여 구현했습니다.`,
        features: [
            {
                title: '하이브리드 앱 환경 구축',
                desc: [
                    '웹뷰 환경을 고려한 모바일 레이아웃 기반 UI 구성',
                    '웹과 앱 환경 차이를 고려하여 토큰 저장 방식을 분리 적용 (LocalStorage / SecureStore)',
                ],
            },
            {
                title: '지도 기반 위치 등록',
                desc: ['카카오 지도 연동를 활용한 위도·경도 및 역지오코딩 주소 추출 기능'],
            },
            {
                title: '이미지 뷰어',
                desc: ['이미지 슬라이더 및 원본 크기의 풀스크린 뷰어 구현'],
            },
            {
                title: '상세 인터랙션',
                desc: ['상세 페이지 내 지도 토글링 기능 및 게시글 수정·삭제 등 CRUD 기능'],
            },
            {
                title: '디바이스 권한 제어',
                desc: ['알림·위치 권한 설정 페이지 연동', '앱 복귀 시 권한 상태 자동 동기화 처리'],
            },
        ],
        role: '프론트엔드 개발',
        period: '2025.11 - 2026.01',
        links: {
            github: 'https://github.com/sub1n17/triptrip-mobile-webview',
            demo: 'https://triptrip-mobile-webview.vercel.app/',
        },
    },
    {
        id: 'mood-diary',
        title: '감정 다이어리',
        type: 'personal',
        summary: '로컬스토리지를 활용한 감정 기반 다이어리 웹 애플리케이션',
        thumbnail: '/images/project_p3.png',
        demo: '/videos/demo_diary.mp4',
        cardSkills: ['HTML', 'CSS', 'JavaScript'],
        skills: [
            {
                type: 'Skills',
                skill: ['HTML', 'CSS', 'JavaScript'],
            },
            {
                type: 'Tools & Frameworks',
                skill: ['LocalStorage', 'Fetch API', 'Clipboard API', 'Vercel'],
            },
        ],
        overview: `
        일상의 기록을 감정별로 분류하고 보관할 수 있는 웹 기반 다이어리 서비스입니다.
        Vanilla JS를 사용하여 LocalStorage 기반의 데이터 CRUD를 구현했으며,
        비동기 통신 처리와 성능 최적화 등 프론트엔드의 기초적인 핵심 기술들을 적용했습니다.
        `,
        features: [
            {
                title: '감정별 일기 관리 시스템',
                desc: ['LocalStorage 기반의 일기 등록·수정·삭제 구현'],
            },
            {
                title: '데이터 필터링 및 최적화',
                desc: ['감정별 필터링 기능과 디바운싱을 적용한 일기 검색 기능'],
            },
            {
                title: '사용자 경험 디테일',
                desc: [
                    '클립보드 API를 활용한 내용 복사, 모달 내 다크모드 테마 전환 및 페이지네이션 기반의 리스트 관리',
                ],
            },
            {
                title: '비동기 데이터 연동',
                desc: ['외부 API연동 및 로딩 상태를 고려한 스켈레톤 UI 적용'],
            },
            {
                title: '반응형 UI',
                desc: ['모바일 사용성을 고려하여 최적화된 레이아웃 구성'],
            },
        ],
        role: '프론트엔드 개발',
        period: '2025.07 - 2025.08',
        links: {
            github: 'https://github.com/sub1n17/mood-palette',
            demo: 'https://mood-palette-diary.vercel.app/',
        },
    },
    {
        id: 'portfolio',
        title: '개인 포트폴리오 웹사이트',
        type: 'personal',
        summary: '프로젝트 구조화와 사용자 경험에 집중한 개인 포트폴리오 웹사이트',
        thumbnail: '/images/project_p4_1.png',
        cardSkills: ['Next.js', 'TypeScript'],
        skills: [
            {
                type: 'Skills',
                skill: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
            },
            {
                type: 'Tools & Frameworks',
                skill: ['Next.js, Vercel'],
            },
        ],
        overview: `
        User First'라는 핵심 가치를 바탕으로 설계한 프론트엔드 개발자 포트폴리오 사이트입니다.
        깔끔한 UI와 직관적인 UX를 통해 그동안 진행한 프로젝트와 기술적 성장을 효과적으로 전달하도록 구성했습니다
        `,
        features: [
            {
                title: 'Main',
                desc: ['개발자로서 지향하는 가치를 담은 메인 비주얼 구성'],
            },
            {
                title: 'Projects',
                desc: ['개인·실무 프로젝트를 탭 메뉴로 분류한 아카이빙'],
            },
            {
                title: 'Project Detail',
                desc: ['프로젝트 데이터를 기반으로 상세 페이지 렌더링'],
            },
            {
                title: 'About',
                desc: ['개발자로서의 가치관, 교육 및 경험, 역량을 포함한 자기소개'],
            },
            {
                title: '반응형 최적화',
                desc: ['PC부터 모바일 환경을 고려한 디바이스별 레이아웃 대응'],
            },
        ],
        role: '기획 · 디자인 · 프론트엔드 개발',
        period: '2026.01 - 2026.02',
        links: {
            github: 'https://github.com/sub1n17/frontend-portfolio',
            demo: 'https://...',
        },
    },
];

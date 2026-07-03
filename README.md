# 📰 내 브리핑 (News Briefing Web Application)

Google News 스타일의 개인 맞춤형 뉴스 브리핑 웹 애플리케이션입니다. React와 Vite를 기반으로 구축되었으며 다양한 뉴스 섹션, 검색, 반응형 레이아웃을 제공합니다.

---

## ✨ 주요 기능 (Key Features)

- **📅 실시간 날짜 반영 브리핑**: 접속한 요일과 날짜에 맞춰 "내 브리핑" 요약 정보를 제공합니다.
- **📰 다양한 뉴스 섹션**:
  - **헤드라인 (Headline)**: 실시간 주요 뉴스를 크고 직관적으로 보여줍니다.
  - **로컬 뉴스 (Local News)**: 사용자의 관심 지역 또는 로컬 뉴스 정보를 제공합니다.
  - **추천 뉴스 (Recommend News)**: 맞춤형 추천 뉴스 목록을 제공합니다.
- **🗺️ 페이지 네비게이션**: 
  - `React Router`를 이용하여 홈(브리핑), 추천, 팔로잉, 대한민국 뉴스 탭 간의 부드러운 페이지 전환을 지원합니다.
- **🎨 모던하고 정돈된 UI**: 깔끔한 레이아웃과 직관적인 네비게이션 바로 사용자 친화적인 웹 환경을 구현했습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Core**: React 19
- **Build Tool**: Vite 8
- **Routing**: React Router DOM 7
- **Styling**: Vanilla CSS
- **Deployment**: GitHub Pages (using `gh-pages` package)

---

## 📂 프로젝트 구조 (Project Structure)

```text
src/
├── assets/                     # 이미지 및 미디어 에셋 (Google 로고 등)
├── data/                       # 뉴스 데이터 (newsData.js 등)
├── headlineComponent/          # 헤드라인 뉴스 관련 컴포넌트들
│   ├── HeadLine.jsx
│   ├── HeadLineItem.jsx
│   ├── HeadLineSubArticle.jsx
│   └── HeadlineBody.jsx
├── localNewsComponent/         # 로컬 뉴스 관련 컴포넌트
│   └── LocalNews.jsx
├── RecommendNewsComponent/     # 추천 뉴스 요약 컴포넌트
│   └── RecommendNews.jsx
├── App.jsx                     # 메인 브리핑 페이지
├── App.css                     # 메인 레이아웃 및 디자인
├── main.jsx                    # React 루트 렌더러 및 라우터 설정
├── Header.jsx                  # 헤더 컴포넌트 (검색, 로고 포함)
├── nav.jsx                     # 네비게이션 바 컴포넌트
├── Footer.jsx                  # 하단 푸터 컴포넌트
├── Recommend.jsx               # 추천 페이지
├── Follow.jsx                  # 팔로우 페이지
└── Korea.jsx                   # 대한민국 뉴스 페이지
```

---

## 🚀 시작하기 (Getting Started)

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```

### 3. 프로덕션 빌드
```bash
npm run build
```

---

## 🌐 배포 가이드 (Deployment Guide)

본 프로젝트는 GitHub Pages를 통해 배포할 수 있도록 설정되어 있습니다.

### 1. 배포 스크립트 실행
아래 명령어를 실행하면 자동으로 빌드가 완료되고 배포 브랜치로 파일이 퍼블리시됩니다.
```bash
npm run deploy
```

### 2. GitHub 저장소 설정 (중요)
`gh-pages` 스크립트를 통해 파일이 성공적으로 퍼블리시되면, GitHub 저장소 설정에서 배포 설정을 확인해야 합니다:
1. GitHub 저장소의 **Settings** > **Pages**로 이동합니다.
2. **Build and deployment** 섹션의 **Source**를 `Deploy from a branch`로 설정합니다.
3. **Branch**를 `github_pages_deploy_test`로 선택하고 폴더를 `/ (root)`로 선택한 뒤 **Save**를 누릅니다.
4. **Jekyll 빌드 우회**: 빌드 에셋의 원활한 로딩을 위해 `public/.nojekyll` 설정 파일이 프로젝트 내에 포함되어 있습니다.

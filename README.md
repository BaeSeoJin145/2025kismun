# KISMUN’25 웹사이트

[English](README.en.md)

Korean International School Model United Nations(KISMUN) 2025 컨퍼런스 안내 웹사이트입니다. 컨퍼런스 정보와 국가 배정, 위원회별 안내 및 의장 보고서, 사무국·스태프·디렉터 소개, 사진 갤러리를 제공합니다.

## 로컬에서 실행하기

별도의 빌드 도구나 패키지 설치 없이 정적 웹 서버로 실행할 수 있습니다. 저장소 루트에서 실행하세요.

```bash
python3 -m http.server 8000
```

브라우저에서 <http://localhost:8000>을 엽니다. HTML과 CSS의 상대 경로를 사용하므로 GitHub Pages 프로젝트 하위 경로에서도 정적 자산을 불러옵니다. 로컬에서는 웹 서버로 접속하세요.

## 페이지 구성

- `index.html`: 메인 페이지
- `conference.html`: 컨퍼런스 일정 및 정보
- `country-allocation.html`: 국가 배정표 링크
- `committee.html`: 위원회 목록
- `committee-*.html`: 위원회별 주제, 사진 및 관련 자료
- `secretariats.html`: 사무국 소개
- `staff.html`, `staff-*.html`: 스태프 및 팀 소개
- `directors.html`: 디렉터 소개
- `assets/`: 공통 CSS, JavaScript, 로고 및 배경 이미지
- `img/`, `photogallery/`: 인물·위원회 이미지 및 갤러리 사진
- `chair-report/`: 위원회별 의장 보고서 PDF

## 기술 구성

HTML, CSS, 바닐라 JavaScript로 만든 정적 웹사이트입니다. `assets/app.js`가 탭 및 이미지 라이트박스 동작을 처리하며, 외부 프레임워크나 빌드 과정은 필요하지 않습니다.

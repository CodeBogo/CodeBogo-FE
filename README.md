# CodeBogo-FE

멋쟁이사자처럼 14기 예비 해커톤 프로젝트 - 코딩 학습 앱 프론트엔드

## 기술 스택

- React
- Vite
- react-router-dom
- styled-components

## 폴더 구조

```
src/
├── api/                  # 서버 통신 함수 모음
├── assets/
│   ├── icon/             # 아이콘 파일
│   └── images/           # 이미지 파일
├── components/
│   ├── common/
│   │   └── button/       # 재사용 버튼 컴포넌트
│   └── layout/           # Header, Footer 등
├── layouts/
│   └── RootLayout.jsx    # 전체 페이지 공통 레이아웃
├── pages/                # 페이지 단위 컴포넌트
├── App.jsx               # 라우팅 설정
└── main.jsx
```

## 브랜치 전략

- `main` : 배포 가능한 안정 버전만 유지
- `develop` : 팀원 작업을 모으는 브랜치
- `feat/#이슈번호/기능명` : 개인 작업 브랜치 (예: `feat/#3/lesson-page`)

### 작업 순서

1. GitHub Issue 생성
2. 이슈 번호에 맞춰 개인 브랜치 생성
   ```
   git checkout develop
   git pull origin develop
   git checkout -b feat/#이슈번호/기능명
   ```
3. 작업 후 커밋 & 푸시
   ```
   git add .
   git commit -m "✨ Feat: 작업 내용"
   git push origin feat/#이슈번호/기능명
   ```
4. GitHub에서 `develop ← feat/...` 로 Pull Request 생성
5. 팀원 코드 리뷰 후 `develop`에 merge
6. 다른 팀원은 최신 내용 반영
   ```
   git checkout develop
   git pull origin develop
   ```

## 커밋 컨벤션

`(이모지) 타입: 내용` 형식으로 작성합니다.

| 이모지 | 타입 | 설명 |
| --- | --- | --- |
| 🎉 | Start | 프로젝트 시작 |
| ✨ | Feat | 새로운 기능 추가 |
| 🐛 | Fix | 버그 수정 |
| 🎨 | Design | CSS 등 사용자 UI 디자인 변경 |
| ♻️ | Refactor | 코드 리팩토링 |
| 📝 | Docs | 문서 수정 |
| 🔀 | Merge | 브랜치 합병 |
| 🚚 | Rename | 파일/폴더명 수정 또는 이동 |
| 🔥 | Remove | 파일 삭제 |

## 네이밍 규칙

- 컴포넌트 파일(.jsx) : PascalCase (예: `Button.jsx`)
- 일반 파일(.js) : camelCase (예: `apiClient.js`)
# boiler-plate

## 따라하며 배우는 노드, 리액트 시리즈 - 기본

- 기본적인 Node JS와 REACT JS 학습

### Frontend

📦src
┣ 📂components
┃ ┗ 📂views -------- 페이지들
┃ ┃ ┣ 📂Footer --------------- sections ------------------  
┃ ┃ ┃ ┗ 📜Footer.js  
┃ ┃ ┣ 📂LandingPage  
┃ ┃ ┃ ┗ 📜LandingPage.js 이 안에는 해당 페이지에 관련된
┃ ┃ ┣ 📂LoginPage
┃ ┃ ┃ ┗ 📜LoginPage.js css 파일이나, component들을 넣는다.
┃ ┃ ┣ 📂NavBar
┃ ┃ ┃ ┗ 📜NavBar.js
┃ ┃ ┗ 📂RegisterPage
┃ ┃ ┃ ┗ 📜RegisterPage.js --------------------------------
┣ 📂hoc
┃ ┗ 📜auth.js
┣ 📂utils
┣ 📂_actions -------- Redux를 위한 폴더들
┃ ┣ 📜types.js
┃ ┗ 📜user_action.js
┣ 📂_reducers
┃ ┣ 📜index.js
┃ ┗ 📜user_reducer.js
┣ 📜App.js -------- Routing 관련 일을 처리한다.
┣ 📜Config.js -------- 환경 변수같은 것들을 정하는 곳
┣ 📜index.css
┣ 📜index.js
┣ 📜reportWebVitals.js
┣ 📜setupProxy.js
┗ 📜setupTests.js

- npm npx
- React Router Dom
- 데이터 Flow & Axios
- Cors이슈, Proxy 설정
- Redux 기초
- React Hooks
- 로그인 페이지
- 회원 가입 페이지
- 로그아웃
- 인증체크

### Backend

📦server
┣ 📂config
┃ ┣ 📜dev.js
┃ ┣ 📜key.js
┃ ┗ 📜prod.js
┣ 📂middleware
┃ ┗ 📜auth.js
┣ 📂models
┃ ┗ 📜User.js
┗ 📜index.js

- mongoDB
- BodyParser & PostMan
- 비밀번호 설정 정보 관리
- Bcrypt로 비밀번호 암호화 하기
- 로그인 기능
- 토큰 생성
- auth 기능
- 로그아웃 기능

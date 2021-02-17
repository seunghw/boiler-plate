# boiler-plate

## 따라하며 배우는 노드, 리액트 시리즈 - 기본

- 기본적인 Node JS와 REACT JS 학습

## Frontend

📦src
┣ 📂components<br>
┃ ┗ 📂views -------- 페이지들<br>
┃ ┃ ┣ 📂Footer --------------- sections ------------------ <br>
┃ ┃ ┃ ┗ 📜Footer.js<br>
┃ ┃ ┣ 📂LandingPage<br>
┃ ┃ ┃ ┗ 📜LandingPage.js 이 안에는 해당 페이지에 관련된<br>
┃ ┃ ┣ 📂LoginPage<br>
┃ ┃ ┃ ┗ 📜LoginPage.js css 파일이나, component들을 넣는다.<br>
┃ ┃ ┣ 📂NavBar<br>
┃ ┃ ┃ ┗ 📜NavBar.js<br>
┃ ┃ ┗ 📂RegisterPage<br>
┃ ┃ ┃ ┗ 📜RegisterPage.js --------------------------------<br>
┣ 📂hoc<br>
┃ ┗ 📜auth.js<br>
┣ 📂utils<br>
┣ 📂_actions -------- Redux를 위한 폴더들<br>
┃ ┣ 📜types.js<br>
┃ ┗ 📜user_action.js<br>
┣ 📂_reducers<br>
┃ ┣ 📜index.js<br>
┃ ┗ 📜user_reducer.js<br>
┣ 📜App.js -------- Routing 관련 일을 처리한다.<br>
┣ 📜Config.js -------- 환경 변수같은 것들을 정하는 곳<br>
┣ 📜index.css<br>
┣ 📜index.js<br>
┣ 📜reportWebVitals.js<br>
┣ 📜setupProxy.js<br>
┗ 📜setupTests.js<br>

- npm npx
- React Router Dom
- 데이터 Flow & Axios
- CORS 이슈, Proxy 설정
- Redux 기초
- React Hooks
- 로그인 페이지
- 회원 가입 페이지
- 로그아웃
- 인증체크

## Backend

📦server<br>
┣ 📂config<br>
┃ ┣ 📜dev.js<br>
┃ ┣ 📜key.js<br>
┃ ┗ 📜prod.js<br>
┣ 📂middleware<br>
┃ ┗ 📜auth.js<br>
┣ 📂models<br>
┃ ┗ 📜User.js<br>
┗ 📜index.js<br>

- mongoDB
- BodyParser & PostMan
- 비밀번호 설정 정보 관리
- Bcrypt로 비밀번호 암호화 하기
- 로그인 기능
- 토큰 생성
- auth 기능
- 로그아웃 기능

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--background);
  color: var(--text);
}

:root {
  --white: #fff;
  --background: #121214;
  --gray-line: #dcdde0;
  --text: #f2f3f5;
  --text-heighlight: #b3b9ff;
  --title: #2e384d;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
  --nodejs: #8cc84c;
  --reactjs: #3bc1dd;
  --nextjs: #000000;
  --typescript: #0288d1;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
button {
  font: 400 16px "inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

ul li {
  list-style: none;
}

/*
.expirience-bar {
  display: flex;
  align-items: center;
}

.expirience-bar span {
  font-size: 1rem;
}

.expirience-bar > div {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
}

.expirience-bar > div > div {
  height: 4px;
  border-radius: 4px;
  background: var(--green);
}

span.current-experience {
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
} */

/* Codigos desafio */

/* nodejs */

/* react */
/*  #rumoaoproximonivel */
`;
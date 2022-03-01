import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${"" /* define root element and specify vars to be used accross the page */}
:root{
  --primary-color: #007bff;
  --seconday-color: #6c757d;
  --background-dark-color: #10121a;
  --border-color:#2e344e;
  --background-light-color: #f1f1f1;
  --white-color: #fff;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2:#151515;
  
}


  *{
      padding: 0;
      margin:0;
      box-sizing: border-box;
      font-size: 1.2rem;
      list-style: none;
      text-decoration: none;
  }

  body{
    background-color: var(--background-dark-color);
  }
`;
export default GlobalStyle;

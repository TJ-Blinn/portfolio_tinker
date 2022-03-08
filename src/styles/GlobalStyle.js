import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${"" /* define root element and specify vars to be used accross the page */}
:root{
  --primary-color: #007bff;
  --seconday-color: #6c757d;
  --background-dark-color: #10121a;
  --background-dark-grey: #191d2b;
  --border-color:#2e344e;
  --background-light-color: #f1f1f1;
  --white-color: #fff;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2:#151515;
  --sidebar-dark-color: #191d2b;
}


  *{
      padding: 0;
      margin:0;
      box-sizing: border-box;
      font-size: 1.2rem;
      list-style: none;
      text-decoration: none;
      font-family: 'Nunito', sans-serif;
     
  }

  body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
  }

  a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
  }

  h1{
    font-size: 2rem;
    color: var(--white-color)
      
  }

  span{
    color: var(--primary-color);
    font-size: 2rem;
  }

  h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
  }

// Utility class
.utility-margin-bottom{
  margin-bottom: 4rem;
}

`;
export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${"" /* define root element and specify vars to be used accross the page */}
/*:root{
  --primary-color: #007bff;
  --seconday-color: #6c757d;
  --background-dark-color: #10121a;
  --background-dark-grey: #191d2b;
  --border-color:#2e344e;
  --background-light-color: #f1f1f1;
  --background-light-color-2: rgba(3,127,255,.3);
  --white-color: #fff;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2:#151515;
  --sidebar-dark-color: #191d2b;
} */

// light-theme will retail color names vars in root, but the color codes will change 
.light-theme{
  --primary-color: #007bff;
  --seconday-color: #6c757d;
  --background-dark-color: #F1F1F1;
  --background-dark-grey: #e4e4e4;
  --border-color:#cbced8;
  --background-light-color: #f1f1f1;
  --background-light-color-2: rgba(3,127,255,.3);
  --white-color: #151515;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2:#151515;
  --sidebar-dark-color: #E4E4E4;
}

.dark-theme{
  --primary-color: #007bff;
  --seconday-color: #6c757d;
  --background-dark-color: #10121a;
  --background-dark-grey: #191d2b;
  --border-color:#2e344e;
  --background-light-color: #f1f1f1;
  --background-light-color-2: rgba(3,127,255,.3);
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
    scrollbar-color: rebeccapurple green;
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

// Floating toggler (light-dark mode) 

.light-dark-mode {
    position: absolute;
    right: 0;
    top: 10%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

`;
export default GlobalStyle;

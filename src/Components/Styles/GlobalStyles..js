import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
   ${reset};
   @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
   *{
       box-sizing: border-box;
   }
   body {
       background:#000000;
       margin:0;
       font-size: 14px;
       font-family: 'Noto Sans', sans-serif;
       padding-top: 0;
   }
   a {
       text-decoration: none;
       color:black;
   }
   input:focus {
       outline:none;
   }
   input{
       border:none;
       background:none;
       color:black;
       font-size:30px;
   }
   input::placeholder{
    color:white;
   }

    textarea:focus {
    outline: none;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
   `;
import React from "react";
import styled from "styled-components";


export const RegStyle = styled.div`


         .body {
            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 87.5vh;
            margin: 0;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 40px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            width: 400px;
            text-align: center; 
        }

        form{
        display:flex;
        justify-content: center;
            align-items: center;
            gap:20px;
            flex-direction: column;
        }

        

        h2 {
            color: #616161; 
            margin-bottom: 20px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="tel"] {
          background-color:#ECECEC;
border:none;
border-radius:100px;
width:300px;
padding:15px;
height:30px;
style:none;
color:#616161 ;
font-size:0.9rem;
style:none;
        }

       

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus,
        input[type="tel"]:focus {
            box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
outline:none;
border:none;
        }

        button {
            background-color: #FFFFFF;
  border:none;
  
  
  box-sizing: border-box;
  color: #616161;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  
  outline: none;
  padding: 10px 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: 300px;
  transition: all 0.3s ease-in-out;
        }

        button:hover {
            background-color:  #ECECEC;
  border-color: #ECECEC;
  border-radius:100px;
  transition: all 0.3s ease-in-out;
  transform:scale(1.1) ;
        }

        .register-link {
            margin-top: 20px;
        }

        .register-link a {
            color: #616161;
            text-decoration: none;
            font-weight: bold; /* Делаем ссылку более заметной */
        }

        .register-link a:hover {
            text-decoration: underline;
        }
`

import styled from "styled-components";


export const MyHomeStyle = styled.div`
h1{
font-family: 'Space Mono', monospace;
  font-weight: 700; /* Adjust font weight */
  font-size: 2rem; /* Adjust font size */
  text-align: center; /* Center the text */
  color:#404040 ;
 letter-spacing: 2px;
}

.all_choose{
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap:90px;
margin-bottom: 60px;
}

.bgc{
background-color:#ECECEC;
height:100%;
border-radius: 0 0 20px 20px  ;
}

.choose{
border:1px solid #919191;
display:flex;
justify-content: center;
align-items: center;
text-align: center;
width: 400px;
height:360px;

border-radius: 20px;
flex-direction: column;
}

img{
border-radius:20px 20px 0 0  ;
width:100%;
}

button {
            background-color: #D1D1D1;
  border:none;
  
  box-sizing: border-box;
  color: #404040;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  outline: none;
  padding: 10px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: 360px;
  transition: all 0.2s ease-in-out;
  border-radius:100px;
        }
  button:hover {
            background-color:  #B9B9B9;
  border-color: #ECECEC;
  color:#404040;
  transition: all 0.2s ease-in-out;
  transform:scale(1.07) ;

        }

p{
    font-weight: 500;
}






`
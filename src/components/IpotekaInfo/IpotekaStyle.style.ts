import styled from "styled-components";


export const IpotekaStyle = styled.div`

section{
display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #CFCFCF;
}

.first,.second{
display: flex;
}

.glass{
    width: 47.5%;
    height: 47.5%;
}

.grill{
width: 52.5%;
    height: 47.5%;
}

h2{
color:#404040 ;
    font-size: 32px;
    align-items: start;
    width:calc(30vw + 280px);
}


.inp{
width:calc(25vw + 220px);
display: flex; 
  justify-content: center;
background-color:#ECECEC;
border:none;
border-radius:100px;
width:700px;
padding: 10px 20px;
height:40px;
style:none;
color:#616161 ;
font-size:1.3rem;
style:none;
cursor:pointer;
}

.inp:focus{
box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
outline:none;
border:none;
}


p{
width:calc(30vw + 280px);
color:#404040 ;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.48px;
    font-weight: 700;
    word-break: normal;
}

.info{
 display: flex;
  padding:20px;
   flex-direction: column;
   gap:12px;
   background-color: #CFCFCF;
     justify-content: center;
}


a, button {
            background-color: #919191;
  border:none;
  
  box-sizing: border-box;
  color: #404040;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
    text-align: center;
  outline: none;
  padding: 10px 10px;
  position: relative;
  text-align: start;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: 450px;
  transition: all 0.2s ease-in-out;
  border-radius:100px;
        }

        a:hover {
            background-color:  #404040;
  color:#ECECEC;
  transition: all 0.2s ease-in-out;
  transform:scale(1.02) ;
  `

  export const Btn = styled.div`
  .headerBtn {
        background-color: #919191;
  border:none;
  box-sizing: border-box;
  color: #404040;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
    text-align: center;
  outline: none;
  padding: 10px 10px;
  position: relative;
  text-align: start;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: 450px;
  transition: all 0.2s ease-in-out;
  border-radius:100px;
        }


  .headerBtn:hover {
            background-color:  #404040;
  border-color: #ECECEC;
  color:#ECECEC;
  transition: all 0.2s ease-in-out;
  transform:scale(1.02) ;

        }
`
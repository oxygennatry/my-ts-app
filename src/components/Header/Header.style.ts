import styled from "styled-components";

export const HeaderStyle = styled.div`
 display: flex;
  justify-content: center;
  gap:20px;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  width: auto;





.headerBtn {
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
  width: auto;
  transition: all 0.3s ease-in-out;
}


.headerBtn:hover {
  background-color:  #ECECEC;
  border-color: #ECECEC;
  border-radius:100px;
  transition: all 0.3s ease-in-out;
  transform:scale(1.1) ;
}

.headerBtn:disabled {
  border-color: #ECECEC;
  color: #616161;
  cursor: not-allowed;
  opacity: 1;
  
}

.logo{
border:none;
background-color:#FFF;
cursor:pointer;
}

input{
background-color:#ECECEC;
border:none;
border-radius:100px;
width:300px;
padding:10px;
height:40px;
style:none;
color:#616161 ;
font-size:1.3rem;
style:none;
}

input:focus{
box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
outline:none;
border:none;
}



$blue :#ECECEC;

body{
  background-color:$blue;
}

.container{
  width:auto;
  height:auto;
 
  color:white;
  font-size:1rem;
  font-family:Arial,Helvetica Neue,Helvetica,sans-serif;
  
  }
p{
  text-align:center;
}
.button{
   overflow: hidden;
  font-size:1.5rem;
  border:2px solid white;
  border-radius:100px;
  width:40px;
  height:40px;
  padding:5px;
  transition: .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  text-align:center;
  cursor: pointer;
}

.icon{
width:25px;
 position: relative;
  top: 50%;
   border-radius:100px;
  transform: translateY(-50%);
 text-align:center;
  
}

//Hover
//-----------------------
.button:hover{
  width:125px;
  border:1px solid #ECECEC;
   background-color:$blue
  color: $blue;
  transition:.3s;
   overflow: visible;
}

.button:active{
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
  transition: .001s
}




`;
import styled from "styled-components";




export const ModalStyle = styled.div`
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    text-align: center;
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    border-radius:100px;
}

.modal-close:hover{
background: #ECECEC;
border-radius:30px;
}


input{
flex: 1; 
background-color:#ECECEC;
border:none;
border-radius:100px;
width:320px;
padding: 2px 20px;
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

h1{
font-family: 'Space Mono', monospace;
  font-weight: 700; /* Adjust font weight */
  font-size: 2rem; /* Adjust font size */
  text-align: center; /* Center the text */
  color:#404040 ;
 letter-spacing: 2px;
}

p{
    font-weight: 500;
}

.imgSearch{
width:30px;
height:30px;
}



.search-btn {
  background-color: #FFFFFF;
  border:none;
  margin:20px;
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


.search-btn:hover {
  background-color:  #ECECEC;
  border-color: #ECECEC;
  border-radius:100px;
  transition: all 0.3s ease-in-out;
  transform:scale(1.1) ;
  context:"рег";
}

`
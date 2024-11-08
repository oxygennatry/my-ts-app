import styled from "styled-components";


export const MainStyle = styled.div`


.MainContainer{
 background-image: url(https://cdn.discordapp.com/attachments/1177350237602447390/1304527925957103696/44ad2b2ce70b3f5d.png?ex=672fb7ce&is=672e664e&hm=ce1ee6b234b90c3835327e3de61edcb1243cb8044a053fd740899a0e91af66c7&);
 min-height: 70vh;
 background-repeat: no-repeat;
 display: flex;
  justify-content: center;
  align-items: end;
}

.imgSearch{
width:30px;
height:30px;
}

.inputSearch{
border-radius:100px;
background-color:#FFFFFF;
border:none;
margin-top:5px;
height:50px;
width:50px
}

.inputSearch:hover{
 background-color:  #ECECEC;
  border-color: #ECECEC;
  border-radius:100px;
  transition: all 0.3s ease-in-out;
  transform:scale(1.1) ;
}

.inputSearch:active{
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
  transition: .001s
}

.input{
width:700px;
display: flex; 
  justify-content: center;
}

input{
flex: 1; 
  margin-right: -60px;
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
margin-bottom:90px;
}

input:focus{
box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
outline:none;
border:none;
}

`
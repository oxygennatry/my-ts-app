import styled from "styled-components";


export const MainStyle = styled.div`


.MainContainer{
 background-image: url(https://cdn.discordapp.com/attachments/1177350237602447390/1304527925957103696/44ad2b2ce70b3f5d.png?ex=672fb7ce&is=672e664e&hm=ce1ee6b234b90c3835327e3de61edcb1243cb8044a053fd740899a0e91af66c7&);
 min-height: 77vh;
 background-repeat: no-repeat;
 display: flex;
  
  align-items: center;
  background-position: center;
   flex-direction: column;
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
width:calc(25vw + 220px);
display: flex; 
  justify-content: center;
  margin-top: 480px;
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

}

input:focus{
box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
outline:none;
border:none;
}

.autocomplete {
background-color:#ECECEC;
  width:calc(24vw + 220px) ;
  background: white;
  list-style: none;
  margin: 5px;
  padding: 10px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.15);
  max-height: 240px;
  height: 150px;
  overflow: auto;
  border-radius:20px;
  style:none;
}

.autocomlete_item {
  padding: 10px;
   border-radius:13px;
   color:#616161 ;
font-size:1.1rem;
font-weight: 600;
}


.autocomlete_item:hover {
  background: #ECECEC;
  cursor: pointer;
  transition: cubic-bezier(1, 0, 0, 1) .2s all;
}


.hero-image{
background-image:url(https://cdn.discordapp.com/attachments/1177350237602447390/1307728501591244810/large_2004.jpg?ex=673b5c93&is=673a0b13&hm=b62b9caffa51def740ec07ec57cea9d575809fa14c4ef2323fdc1356f160e606&);
min-height: 64vh;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
}

h2{
color:#ECECEC ;
    text-shadow: rgb(0, 0, 0) 1px 1px 1px;
    font-size: 32px;
}

.hero-image{
display:flex;
align-items: center;
 justify-content: center;
}

.info{
display:flex;
align-items: center;
 justify-content: center;
 flex-direction: column;
 gap:30px;
}

p{
width:calc(30vw + 280px);
color:#ECECEC ;
    text-shadow: rgb(0, 0, 0) 1px 1px 1px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.48px;
    font-weight: 700;
    text-align: center;
    word-break: normal;
}

a {
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
  transition: all 0.1s ease-in-out;
  border-radius:100px;
        }

        a:hover {
            background-color:  #ECECEC;
  border-color: #ECECEC;
  transition: all 0.1s ease-in-out;
  transform:scale(1.1) ;
        }


`
import styled from "styled-components";




export const WeatherStyle = styled.div`

            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
            background-image: url(https://c1.peakpx.com/wallpaper/49/283/788/sun-rays-cloudy-sky-sky-blue-rays-wallpaper.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 77vh;
            margin: 0;
        color:#404040 ;

.weather-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    border-radius: 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(6px);

h1,h2{
font-family: 'Space Mono', monospace;
  font-weight: 700; 
  font-size: 2rem; 
  text-align: center; 
  color:#404040 ;
 letter-spacing: 2px;
}

.weather-form {
     display:flex;
        justify-content: center;
            align-items: center;
            gap:20px;
            flex-direction: column;
            
}

.weather-input {
background-color:#ff;
border:none;
border-radius:100px;
width:300px;
padding:5px 10px;
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
}

.weather-button {
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
  border-radius:100px;
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
}

.weather-button:hover {
    background-color:  #B9B9B9;
  border-color: #ECECEC;
  border-radius:100px;
  transition: all 0.2s ease-in-out;
  transform:scale(1.1) ;

.weather-info {
    margin-top: 20px;
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.error {
    color: red;
    font-weight: bold;
}

p{
    font-weight: 500;
    font-family: 'Space Mono', monospace;
}

`
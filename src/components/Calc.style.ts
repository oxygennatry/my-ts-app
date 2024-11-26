import styled from "styled-components";

export const BgcContainer = styled.div`
     font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 89vh;
            margin: 0;
`

export const CalculatorContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 4rem;
  border-radius: 40px;
  background-color: #ffff;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:#616161 ;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap:10px;
`;

export const Label = styled.label`
color:#616161 ;
    font-size: 18px;
      font-weight: 600;
      text-align: center;
`;

export const Input = styled.input`
 background-color:#ECECEC;
border: none;
border-radius:100px;
width:300px;
padding:15px;
height:30px;
outline: none;
color:#616161 ;
font-size:0.9rem;
  font-weight: 600;
`;

export const Button = styled.button`
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

  &:hover {
   background-color:  #ECECEC;
  border-color: #ECECEC;
  border-radius:100px;
  transition: all 0.3s ease-in-out;
  transform:scale(1.1) ;
  }
`;

export const Result = styled.div`
  margin-top: 1.5rem;
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;
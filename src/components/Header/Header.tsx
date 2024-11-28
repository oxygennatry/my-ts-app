import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '../../Image/Image'; // Импортируйте Image компонент
import { HeaderStyle } from './Header.style';
import styled from 'styled-components';


interface HeaderProps {
  logoSrc?: string;
} 

export const Header = ({ logoSrc, ...rest }: HeaderProps) => {

  const navigate = useNavigate();

  const goToRegistrationPage = () => {
      navigate("/registration-page");
  };
  const goToMainMenu = () => {
    navigate("/");
};
const goToLoginPage = () => {
  navigate("/login-page");
};
const goToCalcPage = () => {
  navigate("/calc-page");
};
const goToBuyPage = () => {
  navigate("/buy-page");
};
const goToHomePage = () => {
  navigate("/home-page");
};
const goToWeatherPage = () => {
  navigate("/weather-page");
};
 

  return (
    <HeaderStyle>
      <button className='logo' onClick={goToMainMenu}><img src="https://cdn.discordapp.com/attachments/1177350237602447390/1304525976864293024/0e881060b2463eb6.png?ex=672fb5fd&is=672e647d&hm=eadc3e28ea3ab648c3c98b1029c033c7a041b7b79d2d02d4afbab87c5be00fcb&" alt="" /></button>
      <input type="search" />
      <button className='headerBtn' onClick={goToBuyPage}>Купить</button>
      <button className='headerBtn' onClick={goToCalcPage}>Ипотека</button>
      <button className='headerBtn' onClick={goToWeatherPage}>О погоде</button>
      <button className='headerBtn' onClick={goToHomePage}>Мой дом</button>
      <button className='button' onClick={goToLoginPage}><img src="https://cdn4.iconfinder.com/data/icons/people-10/32/male-follow-1024.png" alt="" className='icon'/></button>
      <button className='button' onClick={goToRegistrationPage}><img src="https://www.muctr.ru/upload/applicants/image/step-lk-1.png" alt="register" className='icon'/></button>
    </HeaderStyle>
      
      
   
  );
};
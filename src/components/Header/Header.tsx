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

  const goToNextPage = () => {
      navigate("/registration-page");
  };
  const goToMainMenu = () => {
    navigate("/");
};
 

  return (
    <HeaderStyle>
      <button className='logo' onClick={goToMainMenu}><img src="https://cdn.discordapp.com/attachments/1177350237602447390/1304525976864293024/0e881060b2463eb6.png?ex=672fb5fd&is=672e647d&hm=eadc3e28ea3ab648c3c98b1029c033c7a041b7b79d2d02d4afbab87c5be00fcb&" alt="" /></button>
      <input type="search" />
      <button className='headerBtn'>Купить</button>
      <button className='headerBtn'>Продать</button>
      <button className='headerBtn'>Аренда</button>
      <button className='headerBtn'>Ипотека</button>
      <button className='headerBtn'>Мой дом</button>
      <button className='headerBtn'>Вход</button>
      <button className='button' onClick={goToNextPage}><img src="https://banner2.cleanpng.com/20180409/bhq/kisspng-computer-icons-user-profile-clip-art-write-5acbb361786d67.8983795715232991694933.jpg" alt="register" className='icon'/></button>
    </HeaderStyle>
      
      
   
  );
};
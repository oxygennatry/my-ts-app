import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { MainPage } from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MortgageCalculator from './components/Calc';
import { Ipoteca } from './components/IpotekaInfo/Ipoteka';
import PropertyDetailPage from './api/Properties/DetailCard';
import { BuyPage } from './pages/BuyPage/ByPage';
import { MyHome } from './pages/MyHome/MyHome';
import { Modal } from './pages/MyHome/ModalWindow';
import { Weather } from './pages/Weather/Weather';




const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/registration-page",
    element: <RegistrationPage />,
  },
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/calc-page",
    element: <MortgageCalculator />,
  },
  {
    path: "/property/:id", 
    element: <PropertyDetailPage />,
  },
  {
    path: "/buy-page", 
    element: <BuyPage />,
  },
  {
    path: "/home-page", 
    element: <MyHome />,
  },
  {
    path: "/weather-page", 
    element: <Weather />,
  },


  
]);

const App = () => {
  return (
   
    <>
    <RouterProvider router={routerConfig}/> 
    </>
  );
}

export default App;

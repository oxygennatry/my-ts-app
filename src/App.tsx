import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { MainPage } from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MortgageCalculator from './components/Calc';
import { Ipoteca } from './components/IpotekaInfo/Ipoteka';



const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/registration-page",
    element: <RegistrationPage />
  },
  {
    path: "/login-page",
    element: <LoginPage />
  },
  {
    path: "/calc-page",
    element: <MortgageCalculator />
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

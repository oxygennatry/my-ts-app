import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { MainPage } from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { EndAPI } from './api/Detail/End';

const routerConfig = createBrowserRouter([
    {
        path:"/" ,
        element:<MainPage/>
    },
    {
      path:"/registration-page" ,
      element:<RegistrationPage/>
  },
  {
    path:"/login-page" ,
    element:<LoginPage/>
},
{
  path:"/api-page" ,
  element:<EndAPI/>
},

  
])

const App = () => {
  return (
    // <BrowserRouter> 
    //   <Routes>
    //     <Route path="/" element={<PageOne />} />
    //     <Route path="/page-two" element={<PageTwo />} />
    //     <Route path="/page-three" element={<PageThree />} />
    //     <Route path="/page-four" element={<PageFour />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <RouterProvider router={routerConfig}/> 
    </>
  );
}

export default App;

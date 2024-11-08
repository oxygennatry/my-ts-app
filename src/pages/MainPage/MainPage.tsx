import React from "react";
import { Header } from "../../components/Header/Header";
import { MainStyle } from "./MainPage.style";

export const MainPage = ()=>{
    return(
        <>
        <Header/>
        <MainStyle>
        <div className="MainContainer">
            <div className="input">
            <input type="text" placeholder="Дома, Локации, Адреса, Города, Страны"/>
            <button className="inputSearch"><img src="https://img.ws.mms.shopee.ph/sg-11134004-23010-10kdah68gzlva9"className="imgSearch"/></button>
            </div>
        </div>
        </MainStyle>
        </>
        
        
    ) 
}


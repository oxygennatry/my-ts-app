import { Btn, IpotekaStyle } from "./IpotekaStyle.style"
import { useNavigate } from 'react-router-dom';




export const Ipoteca = ()=>{
    const navigate = useNavigate();


const goToCalcPage = () => {
  navigate("/calc-page");
};
    return(
        <IpotekaStyle>
        <section>
            <div className="first">
                <img className="glass" src="https://static.rdc.moveaws.com/images/hero/hp-hero-mortgage-desktop-cube.avif" alt="" />
                <div className="info">
                    <h2>Нужен ипотечный кредит? Получите предварительное одобрение</h2>
                    <p>Найдите кредитора, который может предложить конкурентоспособные ставки по ипотеке и помочь вам с предварительным одобрением.</p>
                    <a href="https://www.realtor.com/mortgage/home-loan/?src=web_hp_mrtgSection_integrated">Получить предварительное одобрение прямо сейчас</a>
                    <Btn><button className='headerBtn' onClick={goToCalcPage}>Оформить ипотеку</button></Btn>
                </div> 
            </div>



            <div className="second">
                <div className="info">
                    <h2>Получить местную информацию</h2>
                    <p>Можно ли брать с собой домашних животных? Как обстоят дела со школами? Получите важную информацию о районе, который вас больше всего интересует.</p>
                    <input type="text" className="inp" placeholder="Введите запрос..."/>
                </div>
                <img className="grill" src="https://static.rdc.moveaws.com/images/hero/hp-local-desktop-cube.avif" alt="" />
            </div>
        </section>
        </IpotekaStyle>
    )

}
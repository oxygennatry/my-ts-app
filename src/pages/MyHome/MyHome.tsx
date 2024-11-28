import { useRef, useState } from "react";
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { MainStyle } from "../MainPage/MainPage.style"
import { MyHomeStyle } from "./MyHomeStyle.style";
import { Modal } from "./ModalWindow";





export const MyHome = ()=>{

    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [inputValue, setInputValue] = useState(""); 
    const autocompleteRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    
    
    const handleInputClick = () => {
        setShowAutocomplete(true);
      };
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
      const handleSearchClick = async () => {
        if (!inputValue) {
          alert("Пожалуйста, введите ID объекта в поле поиска.");
          return;
        }
    }

    return(
        <div className="all">
            <Header/>
            <MainStyle>
            <div className="MainContainer">
          <div className="input" onClick={handleInputClick}>
            <input
              type="text"
              placeholder="Введите свой адрес"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="inputSearch" onClick={handleSearchClick}>
              <img
                src="https://img.ws.mms.shopee.ph/sg-11134004-23010-10kdah68gzlva9"
                alt="Иконка поиска"
                className="imgSearch"
              />
            </button>
          </div>
          {showAutocomplete && (
            <div className="autocomplete_container" ref={autocompleteRef}>
              <ul className="autocomplete">
                <li className="autocomplete_item">Country</li>
                <li className="autocomplete_item">City</li>
                <li className="autocomplete_item">Location</li>
              </ul>
            </div>
          )}
          <img src="mapbox://styles/mapbox/standard-satellite" alt="" />
        </div>
        </MainStyle>


        <Modal isOpen={isModalOpen} onClose={closeModal}>
    <h1>SweetHome</h1>
                <p>Введите его адрес, чтобы просмотреть информацию о нем</p>
                <div className="modal-input">
                    <input
                        type="text"
                        placeholder="Введите свой адрес"
                        className="search-input"
                    />
                    <button className="search-btn" >
                       Продолжить
                    </button>
                </div>
    </Modal>


<MyHomeStyle>


    
            <h1>SweetHome</h1>
            <div className="all_choose">
        <div className="choose">
            <img src="https://static.rdc.moveaws.com/images/myhome-web/Hero/landing-cards/v2/trackHomeValue.svg" alt="" />
            <div className="bgc">
            <p>Получите актуальную оценку недвижимости для вашего дома или дачи.</p>
            <button onClick={openModal}>Отслеживайте стоимость дома</button>
            </div>
        </div>

        <div className="choose">
            <img src="https://static.rdc.moveaws.com/images/myhome-web/Hero/landing-cards/v2/calculateCosts.svg" alt="" />
            <div className="bgc">
            <p>Изучите проекты, которые могли бы повысить ценность вашего дома.</p>
            <button onClick={openModal}>Расчитать затраты</button>
            </div>
        </div>

        <div className="choose">
            <img src="https://static.rdc.moveaws.com/images/myhome-web/Hero/landing-cards/v2/recommendedPros.svg" alt="" />
            <div className="bgc">
            <p>Найдите квалифицированных специалистов рядом с вами, которые помогут.</p>
            <button onClick={openModal}>Обзор плюсов</button>
            </div>
            </div>
        

        <div className="choose">
            <img src="https://static.rdc.moveaws.com/images/myhome-web/Hero/landing-cards/v2/startDesigning.svg" alt="" />
            <div className="bgc">
            <p>Выберите фотографию, чтобы мгновенно переделать дизайн своего дома.</p>
            <button onClick={openModal}>Начните проектирование</button>
            </div>
        </div>

        <div className="choose">
            <img src="https://static.rdc.moveaws.com/images/myhome-web/Hero/landing-cards/v2/estimateEarnings.svg" alt="" />
            <div className="bgc">
            <p>Узнайте, сколько вы могли бы заработать, разместив свой дом на Airbnb.</p>
            <button onClick={openModal}>Оцените доход</button>
            </div>
        </div>

        <div className="choose">
            <img src="https://static.rdc.moveaws.com/images/myhome-web/Hero/landing-cards/v2/estimateProceeds.svg" alt="" />
            <div className="bgc">
            <p>Рассчитайте, сколько вы могли бы выручить, продавая свой дом.</p>
            <button onClick={openModal} > Результаты оцнеки</button>
            </div>
        </div>
        </div>
        </MyHomeStyle>
            <Footer/>
        </div>
        
       
        
     
    )

}
import styled from "styled-components";
import ListingCard from "../../api/ListingCard"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { MainStyle } from "../MainPage/MainPage.style";
import { useRef, useState } from "react";

const listings = [
    {
      id: 1,
      title: "Роскошный пентхаус на Манхэттене",
      price: "$3,000,000",
      image:
        "https://www.datocms-assets.com/121312/1710946359-53west53_gallery_28.jpg?auto=format%2Ccompress&fit=max&h=3000&w=2000",
      address: "53 West 53rd St, New York, NY",
    },
  ];

  const CenteredContainer = styled.div`
   h1{
font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 2rem; 
  text-align: center; 
  color:#404040 ;
 letter-spacing: 2px;
}
`;


export const BuyPage = ()=>{

    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [inputValue, setInputValue] = useState(""); 
    const autocompleteRef = useRef<HTMLDivElement>(null);
    
    
    
    
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
        <>
          
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
        <CenteredContainer>
      <h1>Buy House</h1>
    </CenteredContainer>
        {listings.map((listing) => (
            <div key={listing.id}>
              <ListingCard
              maxItems={53}
                title={listing.title}
                price={listing.price}
                image={listing.image}
                address={listing.address}
              />
            </div>
          ))}
          <Footer/>
          </>
    )
}
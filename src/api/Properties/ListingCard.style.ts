import styled from 'styled-components';

export const ListingsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 5px;
justify-content: center;
text-shadow: none;
background-color: #CFCFCF;
`;

export const ListingCardContainer = styled.div`
background-color: #555555;
color: #f0f0f0;
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 300px;
padding: 1.2rem;
margin:0.8rem;
border-radius: 20px;
transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  transform: scale(1.05);
  cursor:pointer;
}
`;

export const ListingImage = styled.img`
width: 100%;
height: 200px;
border-radius: 8px;
object-fit: cover;
`;

export const ListingTitle = styled.h2`
font-size: 24px;
margin: 1rem 0;
color: #ECECEC;
text-shadow: none;
text-align: center;
`;

export const ListingPrice = styled.p`
text-align: center;
color: #ECECEC;
font-weight: bold;
text-shadow: none;
`;
export const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;

  
`;

export const Loader = styled.div`

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  border-radius: 50%;
  margin:12rem;
}

.loader {
  border: 4px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  width: 36px;
  height: 36px;
}

.loader {
  border: 6px solid rgba(0, 0, 0, .1);
  border-left-color: transparent;
  width: 66px;
  height: 66px;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`
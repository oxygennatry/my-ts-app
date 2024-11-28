import styled from "styled-components";



export const StyleModal = styled.div`
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

h2{
font-family: 'Space Mono', monospace;
  font-weight: 700; /* Adjust font weight */
  font-size: 2rem; /* Adjust font size */
  text-align: center; /* Center the text */
  color:#404040 ;
 letter-spacing: 2px;
}

.modal-content {
  background: #fff;
  padding: 40px;
  border-radius: 40px;
  max-width: 600px;
  width: 90%;
  position: relative;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-content img {
  max-width: 100%;
  border-radius: 20px;
  margin: 10px 0;
}

`
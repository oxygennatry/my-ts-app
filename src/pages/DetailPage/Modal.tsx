import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title?: string;
    price?: string;
    address?: string;
    image?: string;
  } | null;
}

interface ModalOverlayProps {
  isOpen: boolean;
}

const ModalOverlay = styled.div<ModalOverlayProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <img
          src={data.image || "/placeholder.jpg"}
          alt={data.title || "Нет названия"}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h2>{data.title || "Нет названия"}</h2>
        <p>
          <strong>Цена:</strong> {data.price || "Не указана"}
        </p>
        <p>
          <strong>Адрес:</strong> {data.address || "Не указан"}
        </p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;


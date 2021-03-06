import styled from "styled-components";
import VersoBackground from "../../images/versoCardAgendamentos.jpg";

export const Card = styled.div`
  background-color: #bb8c4b;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 260px;
  background-image: ${(props) => props.isVerso && `url(${VersoBackground})`};
  text-align: center;

  & img {
    width: 50px;
  }

  & p {
    font-size: 2rem;
    color: #1b2845;
    margin: 10px;
  }
`;

export const CardFlip = styled(Card)`
  &:hover::before {
    content: "Clique para ver mais";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: rgb(27, 40, 69);
    background-color: rgba(247, 244, 243, 0.85);
    width: 100%;
    height: 100%;
    border-radius: 30px;
    font-size: 2.5rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: #f7f4f3;
  border: 3px solid #f7f4f3;
  border-radius: 20px;
  font-family: "Bebas Neue", cursive;
  font-size: 1.75rem;
  padding: 15px;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: block;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #f7f4f3;
    width: 0;
    transition: 0.3s;
    height: 100%;
    border-radius: 15px;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #bb8c4b;
  }
`;

import styled from "styled-components";
import "animate.css";

export const Hero = styled.div`
  border-top: 9px solid #83c5be;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 120px 0;
  div {
    width: 45%;
  }
  img {
    height: 400px;
    border-radius: 20px;
  }
  h1 {
    font-size: 35px;
    color: #66c5bf;
  }
  p {
    line-height: 30px;
    font-size: 22px;
    text-align: justify;
    color: #5c5b5bd8;
  }
  @media (max-width: 375px) {
    margin: 80px 0;
    div {
      width: 100%;
    }
    p {
      padding: 0 20px;
      font-size: 17px;
      text-align: justify;
    }
    img {
      height: 300px;
      margin: 20px;
    }
  }
`;
export const ContainerR = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 60px;
  margin-left: 50px;
  @media (max-width: 375px) {
    align-items: center;
    padding: 0;
    margin:5px;
  }
`;
export const ContainerL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 60px;
  margin-right: 50px;

  @media (max-width: 375px) {
    align-items: center;
    padding: 0;
    margin:5px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  max-width: 80%;
  padding: 10px;
  margin: 20px;
  text-align: center;
  border-radius: 25px;
  border: 2px solid #83c5be;
  transition: all 0.5s;
  h3 {
    color: #5c5b5bd8;
    font-size: 20px;
  }
  p {
    color: #83c5be;
    text-decoration: none;
    font-size: 17px;
    padding: 0 20px;
  }
  @media (max-width: 375px) {
    margin: 60px 20px;
    p {
      padding: 0;
    }
  }
  &:hover {
    background: linear-gradient(to right, white 50%, #8dc3bfa3 50%) right;
    background-size: 200%;
    transition: 0.5s ease-out;
    border-color: #5c5b5bd8;
    h3 {
      color: #5c5b5b;
    }
    p {
      color: white;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  width: 500px;
  max-width: 80%;
  padding: 10px;
  margin: 20px;
  margin-bottom:50px;
  text-align: center;
  border-radius: 15px;
  border: 2px solid #5c5b5beb;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  img{
    border-radius: 10px;
    width:100%;
    min-height:50%;
    object-fit:cover;
  }
  h3 {
    color: #5c5b5bd8;
    font-size: 23px;
  }
  p {
    color: #83c5be;
    text-decoration: none;
    font-size: 20px;
    padding: 0 20px;
  }
  @media (max-width: 375px) {
    margin: 60px 20px;
    p {
      padding: 0;
    }
  }
  .project-tech,
  .project-link{
    margin:6px;
    width: 40px;
    border-radius: 0;
    height:40px;
  }
  .project-link{
    margin-top:10px;
  }
  &:hover{
      transition: 0.5s;
      transform: scale(103%);
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.479);
    }
`;

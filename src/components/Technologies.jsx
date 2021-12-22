import React from "react";
import styled from "styled-components";
import technologies from "../info/Technologies";

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-inline: 200px;
  @media (max-width: 576px) {
    padding-inline: 15px;
  }
  @media (max-width: 1024px) {
    padding-inline: 100px;
  }
  h1 {
    color: #5c5b5b;
    font-size: 30px;
    letter-spacing: 3px;
  }
  .tech-card {
    padding: 20px;
    max-height: 120px;
    display: flex;
    flex-direction: column;
    margin: 7px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.479);
    img {
      width: 85px;
    }
    p {
      margin: 5px;
    }
  }
  .tech-card:hover{
      transition: 0.2s;
      transform: scale(105%);
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.479);
    }
    @media (max-width: 576px) {
    padding:10px;
    img{
      width:50px;
    }
  }
`;

const Skills = () => {
  return (
    <Tech>
      <h1>TECHNOLOGIES:</h1>
      <div className="tech-container">
        {technologies.map((item) => {
        return (
          <div className="tech-card">
            <img src={item.img} alt="tech" />
            <p>{item.name}</p>
          </div>
        );
      })}
      </div>
      
    </Tech>
  );
};
export default Skills;

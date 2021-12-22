import React from "react";
import { Card, ContainerR} from "./CardStyled";

const Education = ({ education }) => {
  console.log(education)
  return (
    <ContainerR>
      {education.map((item) => {
        return (
          <Card key={JSON.stringify(item)}>
            <h3 className="name">{item.name}</h3>
            <p class="text">
              <strong>{item.where}</strong>
            </p>
            <p class="text">{item.date}</p>
          </Card>
        );
      })}
    </ContainerR>
  );
};

export default Education;

import React from "react";
import { Card, ContainerL} from "./CardStyled";

const Experience = ({ experience }) => {
  return (
      <ContainerL>
        {experience.map((item) => {
          return (
            <Card key={JSON.stringify(item)}>
              <h3 className="name"> {item.name}</h3>
              <p class="text">
                <strong>{item.where}</strong>
              </p>
              <p class="text">{item.date}</p>
              <p class="text">{item.description}</p>
            </Card>
          );
        })}
    </ContainerL>
  );
};

export default Experience;

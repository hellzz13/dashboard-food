import React from "react";
import { MainGrid } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <>
      <MainGrid>
        <div className="menu" style={{ gridArea: "menu" }}>
          <div></div>
        </div>

        <div className="order" style={{ gridArea: "order" }}>
          <div></div>
        </div>
      </MainGrid>
    </>
  );
};

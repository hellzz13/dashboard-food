import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { KitchenArea } from "./styles";

export const Kitchen: React.FC = () => {
  return (
    <>
      <Link to={'/'} >
        <Button as='button'> Voltar </Button>
      </Link>
      <KitchenArea>

      </KitchenArea>
    </>
    );
};

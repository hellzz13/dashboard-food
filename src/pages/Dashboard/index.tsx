import React from "react";
import { Form, MainGrid, Title } from "./styles";
import { MdSearch } from "react-icons/md";
import { Container, FoodCard } from "../../components/FoodCard";

export const Dashboard: React.FC = () => {
  return (
    <>
      <MainGrid>
        <div className="menu" style={{ gridArea: "menu" }}>
          <Form>
            <input type="text" />
            <button type="submit">
              <MdSearch size={25} />
            </button>
          </Form>
          <Title>Ofertas</Title>
          <Container>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
          </Container>

          {/* <hr /> */}
          <Title>Pratos Populares</Title>
          <Container>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
          </Container>
        </div>

        <div className="order" style={{ gridArea: "order" }}>
          <Title>Pedido</Title>
        </div>
      </MainGrid>
    </>
  );
};

import React from "react";
import { Form, MainGrid, Title, TitleOrder } from "./styles";
import { MdSearch, MdAddCircle } from "react-icons/md";
import { Container, FoodCard } from "../../components/FoodCard";

export const Dashboard: React.FC = () => {
  return (
    <>
      <MainGrid>
        <div className="menu" style={{ gridArea: "menu" }}>
          <Form>
            <input type="text" placeholder="Digite o código do produto" />
            <button type="submit">
              <MdSearch size={25} />
            </button>
          </Form>
          <Title>Ofertas</Title>
          <Container>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
          </Container>

          <Title>Pratos Populares</Title>
          <Container>
            <FoodCard>
              <div className="card-side-left">
                <img src="https://i.ibb.co/hH0zWdp/food1.png" alt="dish" />
              </div>
              <div className="card-side-right">
                <h2>Bife com Ovo</h2>
                <hr />

                <div>
                  <h3>R$ 25,00</h3>
                  <MdAddCircle size={40} color="#5B3E96" />
                </div>
              </div>
            </FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
          </Container>
        </div>

        <div className="order" style={{ gridArea: "order" }}>
          <TitleOrder>Pedido</TitleOrder>
        </div>
      </MainGrid>
    </>
  );
};

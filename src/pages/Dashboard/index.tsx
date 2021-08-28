import React from "react";
import { Form, MainGrid, Title, TitleOrder } from "./styles";
import { MdSearch, MdAddCircle } from "react-icons/md";
import { Container, FoodCard } from "../../components/FoodCard";

import { useState, useEffect } from "react";

interface FoodProps {
  idFood: string;
  price: string;
  dish: string;
  imgUrl: string;
}

export const Dashboard: React.FC = () => {
  const [items, setItems] = useState<FoodProps[]>([]);

  useEffect(function () {
    // API graphQL
    const token = "ce93f5baa37e0711878d2c44343178";
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query {
                allFoods {
                idFood
                price
                dish
                imgUrl
            }
        }`,
      }),
    })
      .then(async (response) => await response.json()) //com retorno direto arrow function
      .then((respostaCompleta) => {
        // setItems(respostaCompleta.data.allFoods[0].price);
        const allFoods = respostaCompleta.data.allFoods;
        setItems(allFoods);
        // console.log(items);
      });
  }, []);

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
            {items.map((item) => (
              <FoodCard key={item.idFood}>
                <div className="card-side-left">
                  <img src={item.imgUrl} alt="dish" />
                </div>
                <div className="card-side-right">
                  <h2>{item.dish}</h2>
                  <hr />

                  <div>
                    <h3>{item.price}</h3>
                    <MdAddCircle size={40} color="#5B3E96" />
                  </div>
                </div>
              </FoodCard>
            ))}
            {/* <FoodCard>
              <div className="card-side-left">
                <img src="https://i.ibb.co/hH0zWdp/food1.png" alt="dish" />
              </div>
              <div className="card-side-right">
                <h2>Bife com Ovo</h2>
                <hr />

                <div>
                  <h3>{items[0].price}</h3>
                  <MdAddCircle size={40} color="#5B3E96" />
                </div>
              </div>
            </FoodCard> */}
            {/* <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard> */}
          </Container>
        </div>

        <div className="order" style={{ gridArea: "order" }}>
          <TitleOrder>Pedido</TitleOrder>
        </div>
      </MainGrid>
    </>
  );
};

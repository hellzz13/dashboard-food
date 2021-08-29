import React from "react";
import { Form, MainGrid, Title, TitleOrder } from "./styles";
import { MdSearch, MdAddCircle, MdClose } from "react-icons/md";
import { Container, FoodCard, FoodCardOrder } from "../../components/FoodCard";

import { useState, useEffect } from "react";
import { Button } from "../../components/Buttons";

interface FoodProps {
  idFood: string;
  price: string;
  dish: string;
  imgUrl: string;
}

export const Dashboard: React.FC = () => {
  const [items, setItems] = useState<FoodProps[]>([]);
  const [orders, setOrders] = useState<FoodProps[]>([]);

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
        const allFoods = respostaCompleta.data.allFoods;
        setItems(allFoods);
      });
  }, []);

  const handleOrder = (item: any) => {
    setOrders([...orders, item]);
  };

  const handlerDeleteOrder = (order: any) => {
    // console.log(order);
    const dishes = orders.filter((item) => item !== order);
    setOrders(dishes);
  };

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
            {items &&
              items.map((item) => (
                <FoodCard key={item.idFood}>
                  <div className="card-side-left">
                    <img src={item.imgUrl} alt="dish" />
                  </div>
                  <div className="card-side-right">
                    <h2>{item.dish}</h2>
                    <hr />

                    <div>
                      <h3>R$ {item.price}</h3>
                      <MdAddCircle
                        size={40}
                        className="buttonHover"
                        onClick={() => handleOrder(item)}
                      />
                    </div>
                  </div>
                </FoodCard>
              ))}
          </Container>
        </div>

        <div className="order" style={{ gridArea: "order" }}>
          <TitleOrder>Pedido</TitleOrder>
          {orders &&
            orders.map((order, index) => (
              <FoodCardOrder key={index}>
                <img src={order.imgUrl} alt="" />
                <h2>{order.dish}</h2>
                <div>
                  <h3>R$ {order.price}</h3>
                </div>
                <MdClose size={25} onClick={() => handlerDeleteOrder(order)} />
              </FoodCardOrder>
            ))}
          <hr />
          <div className="totalPrice">
            <h2>TOTAL</h2>
            {orders &&
              orders
                .map((x) => parseFloat(x.price))
                .reduce((amount, item) => amount + item, 0)}
            {/* {orders.map((order) => (
              <p>{order.price}</p>
            ))} */}
          </div>
          <Button> Confirmar </Button>
          <Button> Cancelar </Button>
        </div>
      </MainGrid>
    </>
  );
};

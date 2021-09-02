import React, { useContext, useState, useEffect } from "react";
import { Form, MainGrid, Title, TitleOrder, OrderArea } from "./styles";
import { MdSearch, MdAddCircle, MdClose } from "react-icons/md";
import { Container, FoodCard, FoodCardOrder } from "../../components/FoodCard";

import { Button } from "../../components/Buttons";
import { Link } from "react-router-dom";
import UserContext, { FoodProps } from "../../context/user";

export const Dashboard: React.FC = () => {
  const [items, setItems] = useState<FoodProps[]>([]);
  const { orders, setOrders } = useContext(UserContext);
  const { handlerDeleteOrder } = useContext(UserContext);

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
      .then(async (response) => await response.json())
      .then((respostaCompleta) => {
        const allFoods = respostaCompleta.data.allFoods;
        setItems(allFoods);
      });
  }, []);

  const handleOrder = (order: FoodProps) => {
    setOrders([...orders, order]);
    console.log(orders);
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setOrders(event.target.value);
  }

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

          <Title>Pratos Populares</Title>
          <Container>
            {items &&
              items.map((item, index) => (
                <FoodCard key={item.idFood + index}>
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
          <OrderArea>
            {orders &&
              orders.map((order, index) => (
                <FoodCardOrder key={index} style={{ margin: "10px auto" }}>
                  <img src={order.imgUrl} alt="" />
                  <h2>{order.dish}</h2>
                  <div>
                    <h3>R$ {order.price}</h3>
                  </div>
                  <MdClose
                    size={25}
                    className="closeButton"
                    onClick={() => handlerDeleteOrder(order)}
                  />
                </FoodCardOrder>
              ))}
          </OrderArea>
          <hr />
          <div className="totalPrice">
            <h2>TOTAL</h2>
            <div>
              R$
              {orders &&
                orders
                  .map((x) => parseFloat(x.price))
                  .reduce((amount, item) => amount + item, 0)}
            </div>
          </div>
          <Link to={"cozinha"}>
            <Button as="button">CONFIRMAR</Button>
          </Link>
          <Button as="button" onClick={() => setOrders("")}>
            CANCELAR
          </Button>
        </div>
      </MainGrid>
    </>
  );
};

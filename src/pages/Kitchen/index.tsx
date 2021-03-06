import React, { useContext } from "react";
import { MdSchedule, MdDone, MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { FoodCardOrder } from "../../components/FoodCard";
import UserContext, { FoodProps } from "../../context/user";
import { KitchenArea } from "./styles";

export const Kitchen: React.FC = () => {
  const { orders, setOrders } = useContext(UserContext);
  const { waiter, setWaiter } = useContext(UserContext);
  const { handlerDeleteOrder } = useContext(UserContext);

  const foodDone = (order: FoodProps) => {
    setWaiter([...waiter, order]);
    const dishes = orders.filter((item) => item !== order);
    setOrders(dishes);
  };

  const handlerFinishOrder = (order: FoodProps) => {
    const dishes = waiter.filter((item) => item !== order);
    setWaiter(dishes);
  };

  return (
    <>
      <KitchenArea>
        <div className="headerKitchen">
          <h2 className="title">
            Status: Cozinha <MdSchedule size={20} />
          </h2>
          <Link to={"/"}>
            <Button as="button">
              <div className="backButton">
                <MdChevronLeft size={30} />
                <p>VOLTAR</p>
              </div>
            </Button>
          </Link>
        </div>
        <hr />
        <p className="subTitle">Em preparo</p>
        <div className="scroll">
          {orders &&
            orders.map((order, index) => (
              <div className="KitchenOrder">
                <FoodCardOrder key={order.id + index}>
                  <img src={order.imgUrl} alt="" />
                  <h2>{order.dish}</h2>
                  <div>
                    <h3>R$ {order.price}</h3>
                  </div>
                </FoodCardOrder>
                <span>
                  <Button as="button" onClick={() => foodDone(order)}>
                    PRONTO
                  </Button>
                  <Button as="button" onClick={() => handlerDeleteOrder(order)}>
                    CANCELAR
                  </Button>
                </span>
              </div>
            ))}
        </div>
      </KitchenArea>
      <KitchenArea>
        <div className="headerKitchen">
          <h2 className="title">
            Status: Finalizado <MdDone size={20} />
          </h2>
        </div>
        <hr />
        <p className="subTitle">Pronto para entrega / Retirada do gar??om</p>
        <div className="scroll">
          {waiter &&
            waiter.map((order, index) => (
              <div className="KitchenOrder">
                <FoodCardOrder key={index}>
                  <img src={order.imgUrl} alt="" />
                  <h2>{order.dish}</h2>
                  <div>
                    <h3>R$ {order.price}</h3>
                  </div>
                </FoodCardOrder>
                <span>
                  <Button as="button" onClick={() => handlerFinishOrder(order)}>
                    RETIRAR
                  </Button>
                </span>
              </div>
            ))}
        </div>
      </KitchenArea>
    </>
  );
};

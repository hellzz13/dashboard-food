import React, { useContext } from "react";
import { MdSchedule, MdDone, MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { FoodCardOrder } from "../../components/FoodCard";
import UserContext from "../../context/user";
import { KitchenArea } from "./styles";

export const Kitchen: React.FC = () => {
  const { orders, setOrders } = useContext(UserContext);
  return (
    <>
      <KitchenArea>
        <div className="headerKitchen">
          <h2 className="title">
            Status: Cozinha <MdSchedule size={20} />
          </h2>
          <Link to={"/"}>
            <Button as="button">
              {" "}
              <MdChevronLeft size={30} />
            </Button>
          </Link>
        </div>
        <hr />
        <p className="subTitle">Em preparo</p>
        <div className="scroll">
          {orders &&
            orders.map((order, index) => (
              <div className="KitchenOrder">
                <FoodCardOrder key={index}>
                  <img src={order.imgUrl} alt="" />
                  <h2>{order.dish}</h2>
                  <div>
                    <h3>R$ {order.price}</h3>
                  </div>
                </FoodCardOrder>
                <span>
                  <Button as="button"> PRONTO</Button>
                  <Button as="button"> CANCELAR</Button>
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
        <p className="subTitle">Pronto para entrega / Retirada do garçom</p>
        <div className="scroll"></div>
      </KitchenArea>
    </>
  );
};

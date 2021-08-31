import React, { useContext } from "react";
<<<<<<< HEAD
import { MdSchedule, MdDone, MdChevronLeft } from "react-icons/md";
=======
import { MdSchedule, MdDone } from "react-icons/md";
>>>>>>> 940892a3208a50388b5db767a67a242566510d46
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
<<<<<<< HEAD
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
=======
        <h2 className="title">Status: Cozinha</h2> <MdSchedule size={20} />
        <Link to={"/"}>
          <Button as="button"> Voltar </Button>
        </Link>
>>>>>>> 940892a3208a50388b5db767a67a242566510d46
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
<<<<<<< HEAD
        <div className="headerKitchen">
          <h2 className="title">
            Status: Finalizado <MdDone size={20} />
          </h2>
        </div>
=======
        <h2 className="title">Status: Finalizado</h2> <MdDone size={20} />
>>>>>>> 940892a3208a50388b5db767a67a242566510d46
        <hr />
        <p className="subTitle">Pronto para entrega / Retirada do garçom</p>
        <div className="scroll"></div>
      </KitchenArea>
    </>
  );
};

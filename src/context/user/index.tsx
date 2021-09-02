import React, { createContext, useState } from "react";

export interface FoodProps {
  dinamicId: any;
  idFood: string;
  price: string;
  dish: string;
  imgUrl: string;
  id: string;
}

// tipando props do contexto
type PropsUserContext = {
  orders: FoodProps[];
  setOrders: any;
  waiter: FoodProps[];
  setWaiter: any;
  handlerDeleteOrder: any;
};

// valor default do contexto

const DEFAULT_VALUE = {
  orders: [],
  setOrders: () => {},
  waiter: [],
  setWaiter: () => {},
  handlerDeleteOrder: () => {},
};

// criando nosso contexto UserContext
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setOrders'
 * quer irá prover o contexto para os componentes filhos da árvore
 */

const UserContextProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState(DEFAULT_VALUE.orders);
  const [waiter, setWaiter] = useState(DEFAULT_VALUE.waiter);

  const handlerDeleteOrder = (order: FoodProps) => {
    const dishes = orders.filter((item) => item !== order);
    setOrders(dishes);
  };
  return (
    <UserContext.Provider
      value={{
        orders,
        setOrders,
        waiter,
        setWaiter,
        handlerDeleteOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;

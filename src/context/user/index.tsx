import React, { createContext, useState } from "react";

export interface FoodProps {
  idFood: string;
  price: string;
  dish: string;
  imgUrl: string;
}

// tipando props do contexto
type PropsUserContext = {
  orders: FoodProps[];
  setOrders: any;
};

// valor default do contexto

const DEFAULT_VALUE = {
  orders: [],
  setOrders: () => {},
};

// criando nosso contexto UserContext
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setOrders'
 * quer irá prover o contexto para os componentes filhos da árvore
 */

const UserContextProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState(DEFAULT_VALUE.orders);

  return (
    <UserContext.Provider value={{ orders, setOrders }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;

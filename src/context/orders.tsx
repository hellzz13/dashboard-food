import React, { createContext , useState } from "react";

import { FoodProps } from "../pages/Dashboard";


export const OrderContext = createContext({});


export const OrderProvider: React.FC = ({children}) => {

    const [orders, setOrders] = useState<FoodProps[]>([]);
    


    return (
        <OrderContext.Provider value={{orders, setOrders}}>
            {children}
        </OrderContext.Provider>
    );
}
 
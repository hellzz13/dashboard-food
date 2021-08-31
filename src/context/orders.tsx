import React from "react";

import { UserContextProvider } from "./user";

const Globalcontext: React.FC = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default Globalcontext;

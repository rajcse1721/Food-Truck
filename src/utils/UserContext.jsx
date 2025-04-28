import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rajesh Singh",
    email: "rajesh@gmail.com",
  },
});

export default UserContext;

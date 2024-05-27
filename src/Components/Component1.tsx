import { createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext({ user: "shazil", user1: "shahid" });

function Component1() {
  const user = "Macusse";
  const user1 = "his woman";

  return (
    <UserContext.Provider value={{ user: user, user1: user1 }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1;

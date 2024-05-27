import { useContext } from "react";
import { UserContext } from "./Component1";

function Component3() {
  const username = useContext(UserContext);

  return (
    <div>
      <h1>Marcus {username.user + " " + username.user1}</h1>
    </div>
  );
}

export default Component3;

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
// import "./App.css";
import { useEffect, useState } from "react";
import { LocalStorage } from "./utils/LocalStorage";
import { TOKEN_KEY } from "./utils/const";
import { useToken } from "./redux/token/useToken";
import { useSelf } from "./redux/self/useSelf";
import { useLocalStorage } from "react-use";
import { trpc } from "./trpc";

function Routess() {
  return useRoutes(routes);
}

function App() {
  const { get_self, state: self_state } = useSelf();
  const { set_token, state: token_state } = useToken();
  const [token, setToken, remove] = useLocalStorage(TOKEN_KEY);

  // const fetchtest = async () => {
  //   const user = await trpc.user.get.query();
  //   console.log(user);
  // };

  useEffect(() => {
    // fetchtest();
    if (self_state === "error") {
      remove();
    }
    const isActive = LocalStorage.isItemInLocalStorage(TOKEN_KEY);
    if (isActive) {
      const token = LocalStorage.getItem(TOKEN_KEY);
      if (token) {
        set_token({ token: token });
        get_self(token);
      } else {
        console.error("Could not get token");
      }
    }
  }, [self_state === "error"]);

  return (
    <Router>
      <Routess />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import { useEffect } from "react";
import { LocalStorage } from "./utils/LocalStorage";
import { TOKEN_KEY } from "./utils/const";
import { useToken } from "./redux/token/useToken";
import { useSelf } from "./redux/self/useSelf";

function Routess() {
  return useRoutes(routes);
}

function App() {
  const { get_self } = useSelf();
  const { set_token } = useToken();

  useEffect(() => {
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
  }, []);

  return (
    <Router>
      <Routess />
    </Router>
  );
}

export default App;

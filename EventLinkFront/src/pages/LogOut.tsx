import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../redux/token/useToken";
import { useSelf } from "../redux/self/useSelf";
import { LocalStorage } from "../utils/LocalStorage";
import { TOKEN_KEY } from "../utils/const";

const LogOut = () => {
  const navigate = useNavigate();
  const { clear: token_clear } = useToken();
  const { clear: self_clear } = useSelf();

  useEffect(() => {
    LocalStorage.removeItem(TOKEN_KEY);
    self_clear();
    token_clear();
    navigate("/sign-in");
  }, []);

  return <></>;
};

export { LogOut };

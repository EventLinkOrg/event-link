import { Authority } from "../redux/self/self.slice";

const contains_role = (authorities: Authority[], role: string): boolean => {
  return authorities.filter((a) => a.authority === role).length > 0;
};

export { contains_role };

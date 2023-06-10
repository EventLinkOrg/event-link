import { useEffect, useMemo } from "react";
import { Table } from "../components/Table";
import { useToken } from "../redux/token/useToken";
import { useUsers } from "../redux/users/useUsers";

const Users = () => {
  const { state, response } = useToken();
  const { get, response: users_response, state: users_state } = useUsers();
  useEffect(() => {
    if (state === "success" && response) {
      get({ token: response?.token });
    }
    console.log(users_response);
  }, [state, get]);

  const header = useMemo(() => {
    return ["id", "firstname", "lastname", "email", "enabled", "locked"];
  }, []);

  return (
    <div className="card-body">
      <div className="navbar rounded-md ">
        <Table header={header} rows={users_response?.data} />
      </div>
    </div>
  );
};

export { Users };

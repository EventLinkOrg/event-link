import { useEffect, useMemo } from "react";
import { Table } from "../components/Table";
import { useToken } from "../redux/token/useToken";
import { useUsers } from "../redux/users/useUsers";
import { Pagination } from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { state, response } = useToken();
  const { get, response: users_response } = useUsers();

  const onCurrentClick = (input: string) => {
    users_response &&
      searchParams.set("page", (parseInt(input) - 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  const onNextClick = () => {
    users_response &&
      searchParams.set("page", (users_response?.page + 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  const onPrevClick = () => {
    users_response &&
      searchParams.set("page", (users_response?.page - 1).toString());

    // Update the query parameters
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (state === "success" && response) {
      get({ token: response?.token, params: searchParams });
    }
    console.log(users_response);
  }, [state, get, searchParams]);

  const header = useMemo(() => {
    return ["id", "firstname", "lastname", "email", "enabled", "locked"];
  }, []);

  return (
    <div className="card-body">
      <div className="navbar rounded-md ">
        <Table header={header} rows={users_response?.data} />
      </div>
      <Pagination
        onPrev={onPrevClick}
        onNext={onNextClick}
        totalPages={users_response?.total!}
        page={users_response?.page! + 1}
        onClick={onCurrentClick}
      />
    </div>
  );
};

export { Users };

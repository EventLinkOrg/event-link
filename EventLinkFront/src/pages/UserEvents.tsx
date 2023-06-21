import { useEffect, useMemo } from "react";
import { useEvents } from "../redux/events/useEvents";
import { useToken } from "../redux/token/useToken";
import { useSelf } from "../redux/self/useSelf";
import { Table } from "../components/Table";
import { is_expired } from "../utils/date";

const header = [
  "title",
  "dateAdded",
  "startDate",
  "endDate",
  "tickets",
  "statuse",
];

const UserEvents = () => {
  const { response: res, state } = useToken();
  const { get_by_id, get_by_user_response } = useEvents();
  const { response, state: evt_state } = useSelf();

  const events_list = useMemo(() => {
    return get_by_user_response?.map((element) => {
      return {
        ...element,
        statuse: is_expired(element.endDate) && (
          <span className="badge badge-outline-error">Expired</span>
        ),
      };
    });
  }, [get_by_user_response]);

  useEffect(() => {
    response && res && get_by_id({ token: res?.token, id: response?.userId });
  }, [state === "success" && evt_state === "success"]);

  return <Table header={header} rows={events_list} />;
};

export { UserEvents };

import { useEffect } from "react";
import { useTickets } from "../redux/tickets/useTickets";
import { useSelf } from "../redux/self/useSelf";
import { useToken } from "../redux/token/useToken";
import { Ticket } from "../components/Ticket";

const UserTickets = () => {
  const { state: self_state, response: self_res } = useSelf();
  const { state: token_state, response: token_res } = useToken();
  const { get_tickets, response } = useTickets();

  useEffect(() => {
    self_res &&
      token_res &&
      get_tickets({ token: token_res.token, userId: self_res.userId });
  }, [self_state === "success" && token_state === "success"]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 mt-7">
      {response?.map((ticket) => (
        <Ticket
          event={ticket.eventId}
          datePurchased={ticket.datePurchased}
          price={ticket.ticketPrice}
        />
      ))}
    </div>
  );
};

export { UserTickets };

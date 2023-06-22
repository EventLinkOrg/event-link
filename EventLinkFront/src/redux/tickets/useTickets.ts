import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import {
    GetTicketsByUserId,
    selectTicketsError,
    selectTicketsResponse,
    selectTicketsState,
    actions,
    TicketsRequest,
    selectAddTicketResponse,
    selectAddTicketState,
    AddTicket,
    AddTicketRequest
} from "./tickets.slice";


const useTickets = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectTicketsState);
    const response = useAppSelector(selectTicketsResponse);
    const error = useAppSelector(selectTicketsError);

    const add_state = useAppSelector(selectAddTicketState);
    const add_response = useAppSelector(selectAddTicketResponse);

    const get_tickets = useCallback((token: TicketsRequest) => {
        dispatch(GetTicketsByUserId(token))
    }, [dispatch]);

    const clear = useCallback(() => {
        dispatch(actions.clear());
    }, [dispatch]);

    const add = useCallback((body: AddTicketRequest) => {
        dispatch(AddTicket(body))
    }, [dispatch]);


    return {
        state,
        response,
        error,
        get_tickets,
        clear,
        add_state,
        add_response,
        add
    }
}

export { useTickets }
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { selectEventsState, selectEventsResponse, selectEventsError, GetEvents, EventsRequest, actions } from './events.slice'


const useEvents = () => {


    const dispatch = useAppDispatch();

    const state = useAppSelector(selectEventsState);
    const response = useAppSelector(selectEventsResponse);
    const error = useAppSelector(selectEventsError);

    const get = useCallback((token: EventsRequest) => {
        dispatch(GetEvents(token))
    }, [dispatch]);

    const clear = useCallback(() => {
        dispatch(actions.clear());
    }, [dispatch]);

    return {
        state,
        response,
        error,
        get,
        clear
    }
}


export { useEvents }
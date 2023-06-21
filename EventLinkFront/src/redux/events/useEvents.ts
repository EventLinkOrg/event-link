import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import {
    selectEventsState,
    selectEventsResponse,
    selectEventsError,
    GetEvents,
    EventsRequest,
    actions,
    selectAddEventResponse,
    AddEvent,
    selectAddEventState,
    EventPostRequest,
    GetEventsByUser,
    selectGetEventResponse,
    selectGetEventState,
    GetEventsByUserRequest
} from './events.slice'


const useEvents = () => {


    const dispatch = useAppDispatch();

    const state = useAppSelector(selectEventsState);
    const response = useAppSelector(selectEventsResponse);
    const error = useAppSelector(selectEventsError);

    const add_state = useAppSelector(selectAddEventState);
    const add_response = useAppSelector(selectAddEventResponse);

    const get_by_user_response = useAppSelector(selectGetEventResponse)
    const get_by_user_state = useAppSelector(selectGetEventState)

    const get = useCallback((token: EventsRequest) => {
        dispatch(GetEvents(token))
    }, [dispatch]);

    const add = useCallback((body: EventPostRequest) => {
        dispatch(AddEvent(body))
    }, [dispatch]);

    const get_by_id = useCallback((input: GetEventsByUserRequest) => {
        dispatch(GetEventsByUser(input))
    }, [dispatch])

    const clear = useCallback(() => {
        dispatch(actions.clear());
    }, [dispatch]);

    return {
        state,
        response,
        error,
        get,
        clear,
        add_state,
        add,
        add_response,
        get_by_id,
        get_by_user_response,
        get_by_user_state
    }
}


export { useEvents }
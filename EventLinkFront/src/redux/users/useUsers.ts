import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { selectUsersState, selectUsersResponse, selectUsersError, GetUsers, UsersRequest, actions } from './users.slice'


const useUsers = () => {


    const dispatch = useAppDispatch();

    const state = useAppSelector(selectUsersState);
    const response = useAppSelector(selectUsersResponse);
    const error = useAppSelector(selectUsersError);

    const get = useCallback((token: UsersRequest) => {
        dispatch(GetUsers(token))
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


export { useUsers }
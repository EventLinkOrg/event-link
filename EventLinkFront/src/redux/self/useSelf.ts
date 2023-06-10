import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { GetSelf, selectSelfError, selectSelfResponse, selectSelfState, actions } from "./self.slice";


const useSelf = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectSelfState);
    const response = useAppSelector(selectSelfResponse);
    const error = useAppSelector(selectSelfError);

    const get_self = useCallback((token: string) => {
        dispatch(GetSelf(token))
    }, [dispatch]);

    const clear = useCallback(() => {
        dispatch(actions.clear());
    }, [dispatch]);

    return {
        state,
        response,
        error,
        get_self,
        clear
    }
}

export { useSelf }
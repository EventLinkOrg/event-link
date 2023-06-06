import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { GetSelf, selectError, selectResponse, selectState } from "./self.slice";

const useSelf = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectState);
    const response = useAppSelector(selectResponse);
    const error = useAppSelector(selectError);

    const get_self = useCallback((token: string) => {
        dispatch(GetSelf(token))
    }, []);

    return {
        state,
        response,
        error,
        get_self
    }
}

export { useSelf }
import { SignInForm } from "../../pages/SignIn";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { GetToken, selectTokenError, selectTokenResponse, selectTokenState, actions, TokenResponse } from "./token.slice";

const useToken = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(selectTokenState);
    const response = useAppSelector(selectTokenResponse);
    const error = useAppSelector(selectTokenError);

    const get_token = useCallback((body: SignInForm) => {
        console.log('entered from the hook')
        dispatch(GetToken(body))
    }, [dispatch]);

    const set_token = useCallback((body: TokenResponse) => {
        dispatch(actions.addToken(body));
    }, [dispatch])

    const clear = useCallback(() => {
        dispatch(actions.clear())
    }, [dispatch])

    return {
        state,
        response,
        error,
        get_token,
        set_token,
        clear
    }
}

export { useToken }
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import { selectCategoriesState, selectCategoriesResponse, selectCategoriesError, GetCategories, actions } from './categories.slice'


const useCategories = () => {


    const dispatch = useAppDispatch();

    const state = useAppSelector(selectCategoriesState);
    const response = useAppSelector(selectCategoriesResponse);
    const error = useAppSelector(selectCategoriesError);

    const get = useCallback(() => {
        dispatch(GetCategories())
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


export { useCategories }
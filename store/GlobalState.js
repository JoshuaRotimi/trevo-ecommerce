import {createContext, useReducer, useEffect} from "react";
import reducers from "./Reducer";
import {getData} from "../utils/fetchData";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, auth: {}, cart: [], orders: [] };
    const [state, dispatch] = useReducer(reducers, initialState);
    const {cart, auth} = state;

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if (firstLogin) {
            getData('auth/accessToken').then(res => {
                if (res.err) {
                    return localStorage.removeItem("firstLogin")
                }
                dispatch({
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }
    }, []);

    useEffect(() => {
        const __next__cart__trevo01 =  JSON.parse(localStorage.getItem('__next__cart__trevo01'));
        if (__next__cart__trevo01) dispatch({type: 'ADD_CART', payload: __next__cart__trevo01})
    }, []);

    useEffect(() => {
       localStorage.setItem('__next__cart__trevo01', JSON.stringify(state.cart))
    }, [state.cart]);

    useEffect(() => {
        if (auth.token){
            getData('order', auth.token).then(res => {
                if (res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}});

                dispatch({type: 'ADD_ORDERS', payload: res.orders})
            })
        }
    }, [auth.token]);


    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
};

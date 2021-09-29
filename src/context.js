import { createContext, useReducer } from "react";
import {reducer} from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    };

    value.removeFromCart = (itemId) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}})
    };

    value.handleCartShow = () => {
        dispatch({type: 'TOGGLE_CART_SHOW'})
    };

    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    };

    value.changeQuantityItem = (itemId, n) => {
        dispatch({type: 'CHANGE_QUANTITY_ITEM', payload: {id: itemId, n: n}})
    };

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};
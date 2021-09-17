import { createContext, useReducer } from "react";

const initialState = {
    authUser: null
}

const actions = {
    AUTHENTICATED: 'AUTHENTICATED',
    NOT_AUTHENTICATED: 'NOT_AUTHENTICATED'
}
const reducer = (state, action) => {

    switch (action.type) {
        case actions.AUTHENTICATED:
            return { ...state, authUser: action.payload };

        case actions.NOT_AUTHENTICATED:
            return { ...state, authUser: null };
        default: return state;
    }
}



const Context = createContext({});
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {});
    const value = { state, dispatch };
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}


export { Context, Provider, actions };
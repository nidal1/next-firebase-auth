import { auth } from "./firebase";
import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "./firebase";
import { Context, actions } from "./AuthReducer";
import { parseCookies, setCookie, destroyCookie } from 'nookies'


export const FirebaseAuthListenner = ({ children }) => {
    const { dispatch } = useContext(Context);
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                const { accessToken, displayName, email, emailVerified, phoneNumber, photoURL, uid } = user;
                destroyCookie(null, 'next-auth.session-token');
                setCookie(null, 'next-auth.session-token', accessToken, { sameSite: 'lax' });
                dispatch({ type: actions.AUTHENTICATED, payload: { accessToken, displayName, email, emailVerified, phoneNumber, photoURL, uid } });
            } else {
                destroyCookie(null,'next-auth.session-token');
                setCookie(null, 'next-auth.session-token', null, { sameSite: 'lax' });
                dispatch({ type: actions.NOT_AUTHENTICATED });
            }
        })
    }, []);

    return <> {children} </>;
}
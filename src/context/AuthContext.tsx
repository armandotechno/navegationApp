import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir cómo luce, que información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    usename?: string;
    favoriteIcon?: string; 
}

// Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    usename: undefined,
    favoriteIcon: undefined,
}


// Lo que usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
}


// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {
    
    const [ authState, dispatch] = useReducer( authReducer, authInitialState )

    const signIn = () => {
        dispatch({ type: "signIn" })
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeFavoriteIcon,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
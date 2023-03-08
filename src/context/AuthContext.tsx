import { Children, createContext, useContext } from "react";

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
}


// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {
    
    return (
        <AuthContext.Provider
            value={{
                authState: authInitialState,
                signIn: () => {},
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
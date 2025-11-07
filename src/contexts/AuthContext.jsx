import { createContext, useContext, useState } from "react";

const AuthContext= createContext();

export function useAuth() {
    return useContext(AuthContext);
}
//isso se chama custo hook

export function AuthProvider({children}) {
    const [isLogged, setIsLogged]=useState(false);

    function doLogin(){
        setIsLogged(true)
    }

    function doLogout(){
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{ isLogged, doLogin, doLogout }}>
            {children}
        </AuthContext.Provider>
    );
    //o provider vai expor para os filhos

}

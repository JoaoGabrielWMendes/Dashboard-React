import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
//se começou com use é hook

export function Dashboard(){
    const { isLogged } = useAuth();
    const navigate = useNavigate();
    
    //ocorre no load do componente
    useEffect(()=>{
        if (!isLogged) {
            navigate("/");
        }
    },[]);

    return(<>
        <div>
            <h1>Dashboard</h1>
            <p>Bem-vindo ao dashboard</p>
        </div>
    </>);
}
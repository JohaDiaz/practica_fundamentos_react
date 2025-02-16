import { login } from "./service";
import { useState } from "react";
import { useAuth } from "./context";
import { useNavigate, useLocation } from "react-router-dom";

//Falta código para el cambio de página con el login


function LoginPage(){
    const location =useLocation()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {onLogin} = useAuth();
    const navigate = useNavigate()

    console.log(location);

    const handleSubmit  = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        try {
            const formData = new FormData(event.currentTarget);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            const response = await login({ email, password });

            if (response.accessToken) {
                console.log("Login exitoso. Redirigiendo...");
                navigate("/advertsPage");
            }
            onLogin();
            const to = location.state?.from ?? "/advertsPage";
            navigate(to, { replace: true});
        }
        catch (error) {
            console.error("Error en el login:", error);
        }
    };
    //const { email, password } = credentials;

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const isDisabled = !username || !password;

    return (

    
    <div>
        <h1>Loggin Page</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="email" name="email" value={username} onChange ={handleEmailChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </label>
            <button type="submit" disabled={isDisabled}>
                Log in
            </button>
        </form>
    </div> 
    )
}

export default LoginPage;

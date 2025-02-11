import { login } from "./service";
//import { useNavigate } from "react-router-dom";


function LoginPage(){
    //const navigate = useNavigate()
    const handleSubmit  = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        try {
            const formData = new FormData(event.currentTarget);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            const response = await login({ email, password });

            if (response.accessToken) {
                console.log("Login exitoso. Redirigiendo...");
               // navigate("/adverts"); // Redirige a AdvertsPage
            }
        }
        catch (error) {
            console.error("Error en el login:", error);
        }
    };
    //const { email, password } = credentials;

    return (
    <div>
        <h1>Loggin Page</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="email" name="email"/>
            </label>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <button type="submit">
                Log in
            </button>
        </form>
    </div> 
    )
}

export default LoginPage;

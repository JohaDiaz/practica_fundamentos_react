import { login } from "./service";

function LoginPage(){
    const handleSubmit  = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
        const response = await login({
            email: event.target.email.value,
            password: event.target.password.value,
        });
         console.log(response);
        }catch (error){
         console.error(error);
        }
    };

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

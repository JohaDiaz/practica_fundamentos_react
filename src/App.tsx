//import AdvertsPage from "./pages/adverts/AdverstPage";
//import { BrowserRouter as Router, Routes , Route} from "react-router-dom"
import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage";
import AdvertsPage from "./pages/adverts/AdverstPage";


interface Props{
  defaultIsLogged: boolean;
}


function App( {defaultIsLogged} : Props) {
  const [isLogged, setIsLogged] = useState(defaultIsLogged);

  const handleLogin = () => {
    setIsLogged(true);
  }  

  const handleLogout = () => {
    setIsLogged(false);
  } 
  return isLogged ? (
  <AdvertsPage onLogout = {handleLogout} isLogged ={isLogged}/> 
  ) : (
  <LoginPage onLogin = {handleLogin}/>
    );
  
}

export default App;

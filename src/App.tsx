//import AdvertsPage from "./pages/adverts/AdverstPage";
//import { BrowserRouter as Router, Routes , Route} from "react-router-dom"

import LoginPage from "./pages/auth/LoginPage";
import AdvertsPage from "./pages/adverts/AdverstPage";
import { useAuth } from "./pages/auth/context";


function App() {

  const { isLogged, onLogout }  = useAuth();

  return isLogged ? (
    <AdvertsPage onLogout = {onLogout} isLogged ={isLogged}/> 
  ) : (
    <LoginPage />
    );
  
}

export default App;

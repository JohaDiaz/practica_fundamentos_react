//import AdvertsPage from "./pages/adverts/AdverstPage";
//import { BrowserRouter as Router, Routes , Route} from "react-router-dom"

import LoginPage from "./pages/auth/LoginPage";
import AdvertsPage from "./pages/adverts/AdverstPage";
import { useAuth } from "./pages/auth/context";


function App() {

  const { isLogged }  = useAuth();

  return isLogged ? (
    <AdvertsPage /> 
  ) : (
    <LoginPage />
    );
  
}

export default App;

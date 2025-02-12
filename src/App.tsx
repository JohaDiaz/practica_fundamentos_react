//import AdvertsPage from "./pages/adverts/AdverstPage";
//import { BrowserRouter as Router, Routes , Route} from "react-router-dom"
import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage";
import AdvertsPage from "./pages/adverts/AdverstPage";


function App() {
  const [isLogged, setIsLogged] = useState(false);
  return isLogged ? <AdvertsPage/> : <LoginPage />;
  
}

export default App;

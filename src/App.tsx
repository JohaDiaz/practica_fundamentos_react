import AdvertsPage from "./pages/adverts/AdverstPage";
import LoginPage from "./pages/auth/LoginPage";
//import NewAdversPage from "./page/adverts/NewAdvertPage";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/adverts" element={<AdvertsPage/>} />
      {/*<Route path="/adverts/:advertId" element=<AdvertPage/> />*/}
      {/*<Route path="/adverts/new" element={<NewAdvertPage/>} />*/}
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/404" element={<div>404 | Not Found</div>} />
      <Route path="*" element={<Navigate to="/404"/>} />
    </Routes>
  );
} 

export default App;

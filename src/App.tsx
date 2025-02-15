import AdverstPage from "./pages/adverts/AdvertsPage";
import LoginPage from "./pages/auth/LoginPage";
import AdvertPage from "./pages/adverts/advertPage";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/advert/:advertId" element={<AdvertPage/>} />
      <Route path="/advertsPage" element={<AdverstPage/>} />
      <Route path="/advertNew" element={<NewAdvertPage/>} />
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/404" element={<div>404 | Not Found</div>} />
      <Route path="*" element={<Navigate to="/404"/>} />
    </Routes>
  );
} 

export default App;
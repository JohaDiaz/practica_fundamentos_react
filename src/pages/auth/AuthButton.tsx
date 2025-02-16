
import { Link } from "react-router-dom";
import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";

export default function AuthButton() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();

    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
  
    onLogout();
  };

  return isLogged ? (
    <button onClick={handleLogoutClick} className="btn btn-danger">
      Logout
    </button>
  ) : (
    <Link to={`/login`}>
      <button className="btn btn-primary">Login</button>
    </Link>
  );
}


import { Link } from "react-router-dom";
import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";

export default function AuthButton() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Link to={`/login`}>
    <button onClick={handleLogoutClick} >Logout</button>
    </Link>
  ) : (
    <Link to={`/login`}>
    <button color="blue">Login</button>
    </Link>
  );
}


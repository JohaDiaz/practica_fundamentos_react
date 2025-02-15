//import { logout } from "../../pages/auth/service";
//import { useAuth } from "../../pages/auth/context";
import "./Header.css"; 
import AuthButton from "../../pages/auth/AuthButton"
import { NavLink } from "react-router-dom";


export default function Header() {

    return <header>
            <nav className="header-nav">
                <NavLink to="/advertNew" className={({isActive}) => (isActive ? "selected" : "")} >New Advert</NavLink>

                <NavLink to="/advertsPage" className={({isActive}) => (isActive ? "selected" : "")} end>Adverts</NavLink>
                <AuthButton/>
                {/* {isLogged ? (
                    <button onClick={handleLogoutClick}>
                Logout
                </button>
                ) : (
                <button>Login</button>
                )} */}
            </nav>
        </header>
    }
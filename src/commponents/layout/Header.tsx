import { logout } from "../../pages/auth/service";


export interface HeaderProps{
    onLogout: () => void;
    isLogged: boolean;
}

export default function Header({ onLogout, isLogged }: HeaderProps) {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    };
    return <header>
        <div></div>
            <nav>
                {isLogged ? (
                    <button onClick={handleLogoutClick}>
                Logout
                </button>
                ) : (
                <button>Login</button>
                )}
            </nav>
        </header>
    }
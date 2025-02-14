import { ReactNode } from "react";
import Header, { HeaderProps } from "./Header";
import Footer from "./Footer";

interface Props extends HeaderProps{
    title: string;
    children: ReactNode;
}

export default function Layout({ title, children, ...rest}:Props){
    return <div>
        < Header {...rest}/>
        <main>
            <h2>{title}</h2>
            {children}                
        </main>
        <Footer />
    </div>
}
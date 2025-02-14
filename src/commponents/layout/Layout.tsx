import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    title: string;
    children: ReactNode;
}

export default function Layout({ title, children }:Props){
    return <div>
        < Header />
        <main>
            <h2>{title}</h2>
            {children}                
        </main>
        <Footer />
    </div>
}
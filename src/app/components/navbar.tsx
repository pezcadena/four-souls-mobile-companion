"use client"
import Link from "next/link";
import { useState } from "react";

interface NavbarProps{
    changeCard : () => void,
    page: {
        title: string,
        route: string
    }
}

export default function Navbar({
    changeCard,
    page
}:NavbarProps){
    const [isVisible, changeVisible] = useState(false);

    return( 
        <nav className="flex bg-black relative z-10">
            <div 
                onClick={()=>changeVisible(!isVisible)} 
                className="p-3 px-4 leading-none font-extrabold text-4xl bg-slate-800 text-stone-400 z-50"
            >
                <div className="animate-bounce">=</div>
            </div>
            <div 
                className={
                    isVisible
                        ? 'flex transition-all ease-out'
                        : '-translate-x-full absolute transition-all ease-out flex'
                }
            >
                <div 
                    onClick={changeCard} 
                    className="p-4 bg-yellow-400"
                >
                    Cambiar
                </div>
                <Link 
                    className="bg-red-800 text-white p-4" 
                    href={page.route}
                >
                    {page.title}
                </Link>
            </div>
        </nav>
    )
}
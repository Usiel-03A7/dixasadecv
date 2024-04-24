import React, { useState, useEffect } from 'react';
import style from "./Navbar.module.css"; // Importa el archivo de estilos

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${style.container} ${isScrolled ? style['navbar-fixed'] : ''}`}>
            <span className={style.imgContainer}>
                <img src="./logo.jpg" alt="" />
            </span>
            <span className={style.navegation}>
                <ul className={style.navegationList}>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Contactanos</li>
                </ul>
            </span>
        </nav>
    );
}

 import React, {useEffect, useState } from 'react';
import './Navbar.css'
import { MenuItems } from './MenuItems';

const Navbar = () =>{
    const [clicked, setClicked] = useState(false)

    const handleClick = () =>{
        setClicked(clicked => !clicked)
    }
    useEffect(() => {
    }, [clicked])

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                Armaan Kara
                <i className="far fa-user-circle"></i>
            </h1>       
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) =>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <a className='resume-button' href="./media/armaankara_resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
            </a>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)

    return (
        <nav>
            <button onClick={setDarkMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode</button>
        </nav>
    )
}

export default Navbar;
import React from 'react';

function Header() {
    return (
        <header className="bg-black p-1 flex justify-between items-center">
            <a
                href="/"
                className="text-white text-3xl p-3 text-center font-bold"
            >
                Our House
            </a>
        </header>
    )
}

export default Header;
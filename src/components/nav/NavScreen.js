import React from 'react'
import { Input } from "@chakra-ui/react"


export const NavScreen = () => {
    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <i className="fas fa-virus fa-2x"></i>
                </div>

                <nav className='nav'>
                    <ul>
                        <i><a>Home</a></i>
                        <Input placeholder="Search" width="100" height='8' />
                    </ul>
                </nav>

            </header>
        </>
    )
}

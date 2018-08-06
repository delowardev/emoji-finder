import React from 'react'
import Search from './Search'
import logo from '../styles/images/logo-white.svg'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <div className="logo_img">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <Search />
                    </div> 
                </div>
            </div>
        </header>
    )
}

export default Header

import React from 'react'
import logo from '../styles/images/logo-white.png'
const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="logo_img">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-9">
                        
                    </div> 
                </div>
            </div>
        </header>
    )
}

export default Header

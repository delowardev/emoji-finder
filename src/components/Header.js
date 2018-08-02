import React from 'react'
import Search from './Search'
const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="col-auto">
            <h1>EmojiFinder</h1>
          </div>
          <div className="col">
            <Search />
          </div>
      </div>
    </header>
  )
}

export default Header

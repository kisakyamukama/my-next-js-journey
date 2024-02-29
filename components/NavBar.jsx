import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <div className="logo"><h1>Logo</h1></div>
            <div className="className link-container">
                <Link className='link' href='/'>Home</Link>
                <Link className='link' href='/about'>About</Link>
                <Link className='link' href='/portfolio'>Portfolio</Link>
            </div>
        </ul>
    </nav>
  )
}

export default NavBar
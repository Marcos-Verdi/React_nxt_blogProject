import React from 'react'
import Link from 'next/link'
import { BiLogoCodepen } from 'react-icons/bi'

export default function Header() {
  return (
    <header>
        <div className='headerLogo'>
            <BiLogoCodepen style={{height:'50px', width:'50px'}}/>
        </div>
        <nav className='linksContainer'>
            <Link href='/' passHref>
                Home
            </Link>
            <Link href='/events' passHref>
                Events
            </Link>
            <Link href='/about-us' passHref>
                About Us
            </Link>
        </nav>
    </header>
  )
}

import React from 'react'
import './navbar.css'
import fire from './../../assets/fire.png'
import star from '../../assets/star.png'
import party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Movie Hut</h1>

      <div className='navlist'>
        <ul>
          <li>
            <a href="">
              Popular <img src={fire} alt="Fire icon" className='navbarimoji'/>
            </a>
          </li>
          <li>
            <a href="">
              Top Rated <img src={star} alt="Star icon" className='navbarimoji' />
            </a>
          </li>
          <li>
            <a href="">
              Upcoming <img src={party} alt="Party icon" className='navbarimoji' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
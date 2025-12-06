import React from 'react'
import './navbar.css'
import fire from './../../assets/fire.png'
import star from '../../assets/star.png'
import party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <div>
      

<nav className='navbar'>
    <h1>Movie Hut</h1>




<div className='navlist'>
  

<ul>
    <li className=''><a href="">Popular   <img src={fire} alt=""  className='navbarimoji'/>   </a></li>
    <li><a href="">Top Rated   <img src={star} alt="" className='navbarimoji' />   </a></li>
    <li><a href="">UpComming   <img src={party} alt="" className='navbarimoji' />   </a></li>
      

  

</ul>

</div>



</nav>








    </div>
  )
}

export default Navbar

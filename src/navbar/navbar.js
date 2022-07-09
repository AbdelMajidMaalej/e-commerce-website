import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import { BsSuitHeart } from "react-icons/bs";
import { BiLeftArrow, BiRightArrow, BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

import Search from '../search/search';
import Contact from '../ContactPage/contact';

import './navbar.css'

export default function Navbar() {

  const [toggleSearch, setToggleSearch] = useState(false)

  const styles = {
    borderStyling: {
      borderBottomLeftRadius: toggleSearch ? '0px' : '14px',
      borderBottomRightRadius: toggleSearch ? '0px' : '14px'
    }
  }

  const searchToggle = () => {
    setToggleSearch(!toggleSearch)
  }

  return (
    <div>

      <div className='border' style={styles.borderStyling}>
        <ul className='firstNav'>
          <li><a href="" className='title'>Home</a></li>
          <li><a href="" className='title'>Shop</a></li>
          <li><Link className='title' to="/Contact" exact element={<Contact />}>Contact</Link></li>
        </ul>

        <ul className='SecNav'>
          <li><a href="" className='icon'><BsSuitHeart size={20} /></a></li>
          <li><IoSearchOutline id='searchIcon' className='icon' size={22} onClick={searchToggle} /></li>
          <li><a href="" className='icon'><BiUser size={20} /></a></li>
          <li><a href="" className='icon'><BsHandbag size={20} /></a></li>
        </ul>

        {
          toggleSearch && (<div id='searchSection'>
            <Search />
          </div>)
        }
      </div>

    </div>
  )
} 
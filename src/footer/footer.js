import React from 'react'

import { AiOutlineSend } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai"

import './footer.css'

export default function Footer() {
  return (
    <div>
      <div className='upFooter_'>
        <ul className='info_' id='all'>
          <li className='headTitle_'>Hot links</li>
          <li className='links_'><a href="" >Home</a></li>
          <li className='links_'><a href="" >Shop</a></li>
          <li className='links_' ><a href="" >Blog</a></li>
          <li className='links_'><a href="" >Contact</a></li>
        </ul>
        <ul className='info_' id='all'>
          <li className='headTitle_'>More info</li>
          <li className='links_'><a href="" >how it works</a></li>
          <li className='links_'><a href="" >About us </a></li>
          <li className='links_'><a href="" >Decline rules</a></li>
          <li className='links_'><a href="" >Terms & Conditions</a></li>
        </ul>
        <ul className='info_' id='all'>
          <li className='headTitle_'>Customer care</li>
          <li className='links_'><a href="" >FAQ</a></li>
          <li className='links_'><a href="" >Terms of use</a></li>
          <li className='links_'><a href="" >Privacy Policy</a></li>
          <li className='links_'><a href="" >Discount system</a></li>
        </ul>
        <ul className='info_'>
          <li className='headTitle_'>Get newsletter</li>
          <li id='link_'><a href="" >Get updates about appliances</a></li>
          <li><input type='text' id='input_' placeholder='Type your email...'></input></li>
          <li><button className='sendbtn_'><AiOutlineSend size={25}></AiOutlineSend></button></li>
        </ul>
        
 
      </div>

      <div className='downFooter_'>
          <div className='copyright_'><h3>© Appliances Shopping all rights reserved</h3></div>

          <div className='social_'>
            <div className='img_'><a href=""><AiOutlineInstagram size={20} /></a></div>
            <div className='img_'><a href=""><AiOutlineTwitter size={20} /></a></div>
            <div className='img_'><a href=""><GrFacebookOption size={20} /></a></div>
          </div>
      </div>    


  </div>



  )
}

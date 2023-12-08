import React from 'react'
import './Footer.css'
import Logo from './Images/Footer/activatr logo- white 1.png'
import Email from './Images/Footer/ic_round-mail.png'
import Insta from './Images/Footer/ri_instagram-fill.png'
import Maps from './Images/Footer/mdi_address-marker.png'

export default function Footer() {
  return (
    <div>
      <div className="home-footer bg-black text-white">
        <footer className="home-footer1">
          <div className=' flex flex-col '>
            <div className='home-footer2 flex '>
              <div className='left-0 '>
                <img src={Logo}></img>
              </div>

              <div className='flex flex-1 flex-col items-center justify-center gap-5'>
                <div className='flex gap-3'>
                  <img src={Email} />
                  <p>contact@vistaardigital.com</p>
                </div>
                <div className='flex gap-3'>
                  <img src={Insta} />
                  <p>contact@vistaardigital.com</p>
                </div>
              </div>

              <div className='flex flex-1 text-white items-center gap-3 '>
                <img src={Maps} />
                <a className='flex-wrap mr-8  '>Paras Business Center, Unit 602,
                  Kasturbha Cross Rd Number 1, Near
                  Kasturbha Police Station, Borivali East,
                  Mumbai 400066, MH, India</a>
              </div>
            </div>

            <div className=' copyright flex justify-center  mb-5 mt-5'>
              <h6>
                2018 © Copyright Vistaar Digital. All rights Reserved. Platform By Vistaardigital
              </h6>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import profilePhoto from '/public/portada-foto-perfil-redes-sociales-consejos.jpg'

import './Profile.css'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className=' profile'>
        <div className='container-profile'>

          <div className='picture'>
            <img src={profilePhoto} alt="" />
          </div>
          <div className='information'>
            <div>username</div>
            <div>mail</div>
          </div>
        </div>
      </div>
    </>
  )
}

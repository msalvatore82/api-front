import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import './Profile.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className=' profile'>
        <div className='container-profile'>

          <div className='picture'>
            <img src="../../../public/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
          </div>
          <div className='information'>
            <div>username</div>
            <div>mail</div>
          </div>
          <div className='btn-profile'>
           <Link to='/' >
            <Button>🏠</Button>
            </Link>
            <Link to='/date'>
            <Button>📅</Button>
            </Link>
            <Link to='/awards'>
            <Button>🎀</Button>
            </Link>
          </div>

        </div>

      </div>
    </>
  )
}

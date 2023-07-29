import React from 'react'

import './Profile.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const user = {
  username: "Matais",
  mail: "prueba@prueba.com",
};

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className='container-profile'>

      <div className='picture'>
        <img src="../../../public/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
      </div>
      <div className='information'>
        <div>{t('profile.username')}{user.username}</div>
        <div>{t('profile.email')}{user.mail}</div>
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
  );
}

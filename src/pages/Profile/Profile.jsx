import './Profile.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx';

export default function Profile() {
  const { t } = useTranslation();
  const { loggedUser } = useLoggedUserContext();

  return (
    <div className='container-profile'>

      <div className='picture'>
        <img src="../../../public/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
      </div>
      <div className='information'>
        <div>{t('profile.username')}{loggedUser.username}</div>
        <div>{t('profile.email')}{loggedUser.mail}</div>
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

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi.js';
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx';

import InputGroup from '../../components/InputGroup/InputGroup.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Loading from '../../components/Loading/Loading.js';
import Error from '../../components/Error/Error.jsx';
import Container from '../../components/Container/Container.js';
import Panel from '../../components/Panel/Panel.js';
import Button from '../../components/Button/Button.js';
import Modal from '../../components/Modal/Modal.js';
import Message from '../../components/Message/Message.js';

import './Auth.css';

function Auth({ type }) {
  const inputsIds = type === 'register' ? ['username', 'mail', 'password'] : ['username', 'password'];
  const [credentials, setCredentials] = useState({});
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { request, data, error, loading, clear } = useApi();
  const userApiHook = useApi();
  const { setLoggedUser } = useLoggedUserContext();

  useEffect(() => {
    if (data?.token) {
      userApiHook.request({ route: 'users/getusernamebytoken' });
    }

    if (data?.message) {
      setTimeout(() => {
        clear([]);
        navigate('/login');
      }, 10 * 1000);
    }
  }, [data]);

  useEffect(() => {
    if (!userApiHook.data) {
      return;
    }

    setLoggedUser({ ...userApiHook.data });
    navigate('/');
  }, [userApiHook.data]);

  function onChangeHandler({ event, key }) {
    const newCredentials = { ...credentials };
    newCredentials[key] = event.target.value;
    setCredentials(newCredentials);
  }

  return (
    <Container className='row'>
      <Panel className='row col-9 col-md-6'>
        { data ?
          <Message>{ data.message }</Message>
          :
          <>
            { inputsIds.map((id) =>
              <InputGroup
                key={ id }
                label={ t(`authPage.${id}.label`) }
                input={
                  {
                    id,
                    placeholder: t(`authPage.${id}.placeholder`),
                    type: id === 'password' && id,
                    onChange: (e) => onChangeHandler({ event: e, key: id })
                  }
                }
              />
            )}

            <Button onClick={() => request({
              route: type,
              method: 'POST',
              body: { ...credentials }
            }, t('authPage.checkEmail'))}>
              { t(`authPage.${type}.buttonText`) }
            </Button>

            <Link className='nav-link auth-link' to={ type === 'login' ? '/register' : '/login' }>
              { t(`authPage.${type}.link`) }
            </Link>
          </>
        }

      </Panel>
      { error && <Error message={ error.message } /> }
      { loading && <Modal><Loading><Logo/></Loading></Modal> }
    </Container>
  );
}

export default Auth;

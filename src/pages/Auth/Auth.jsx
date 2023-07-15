import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useApi } from '../../hooks/useApi.js';

import Container from '../../components/Container/Container.js';
import Panel from '../../components/Panel/Panel.js';
import InputGroup from '../../components/InputGroup/InputGroup.jsx';
import Button from '../../components/Button/Button.js';

import './Auth.css';

function Auth({ type }) {
  const inputsIds = type === 'register' ? ['username', 'mail', 'password'] : ['username', 'password'];
  const { request, data, error, loading } = useApi();
  const [credentials, setCredentials] = useState({});
  const { t } = useTranslation();

  function onChangeHandler({ event, key }) {
    const newCredentials = { ...credentials };
    newCredentials[key] = event.target.value;
    setCredentials(newCredentials);
  }

  return (
    <div className='auth'>
      <Container className='row' $bgcolor='rgb(200, 200, 200)'>
        <Panel className='row col-12 col-sm-9 col-md-6'>
          {
            inputsIds.map((id) =>
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
            )
          }

          <Button onClick={() => request({
            route: type,
            method:'POST',
            body: { ...credentials, phone: '666666666', rol: 'admin' }
          })}>
            { t(`authPage.${type}.buttonText`) }
          </Button>

        </Panel>
      </Container>
    </div>
  );
}

export default Auth;

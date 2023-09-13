import { useState } from 'react';
import API_URL from '../apiUrl.js';

export function useApi(defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function request({ route, method='GET', body, headers={} }, registerMessage) {
    setData(defaultValue);
    setError();
    setLoading(true);
    const isLogin = route === 'login';
    const isRegister = route === 'register';

    try {
      const response = await fetch(API_URL + route, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.token,
          ...headers
        },
        body: body && JSON.stringify(body),
      });

      if (response.ok) {
        if (isRegister) {
          registerMessage && setData({ message: registerMessage });
        } else {
          const responseAsJson = await response.json();
          isLogin && (localStorage.token = responseAsJson.token);
          setData(responseAsJson);
        }
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
      }
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  function clear(defaultValue) {
    setData(defaultValue);
    setError();
    setLoading(false);
  }

  return { request, data, error, loading, clear };
}

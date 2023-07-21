import { useState } from 'react';

export function useApi() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function request({ route, method='GET', body, headers={} }, registerMessage) {
    setData();
    setError();
    setLoading(true);
    const isLogin = route === 'login';
    const isRegister = route === 'register';
    try {
      const response = await fetch(process.env.API_URL, {
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
          isLogin ? localStorage.token = responseAsJson : setData(responseAsJson);
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

  return { request, data, error, loading };
}

import { useState } from 'react';

export function useApi() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function request({ route, method='GET', body, headers={} }) {
    setData();
    setError();
    setLoading(true);
    try {
      // const response = await fetch(`https://api-bookings.onrender.com/${route}`, {
      const response = await fetch(`https://api-hairs-deploy.onrender.com/${route}`, {
        method,
        headers: {'Content-Type': 'application/json', ...headers },
        body: body && JSON.stringify(body),
      });
      console.log('response', response);

      if (response.ok) {
        const responseAsJson = await response.json();
        setData(responseAsJson);
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

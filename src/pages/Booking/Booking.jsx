import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx';
import { useApi } from '../../hooks/useApi.js';

import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Panel from '../../components/Panel/Panel';

import './Booking.css';

function Booking(props) {
  const servicesApiHook = useApi([]);
  const createBookingHook = useApi();
  const bookingsApiHook = useApi([]);

  const { t } = useTranslation();
  const { loggedUser } = useLoggedUserContext();

  const [newBooking, setNewBooking] = useState({});

  function formatDate(date) {
    const yyyy = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;

    const formattedDate = `${yyyy}-${month}-${day}`;
    return formattedDate;
  }

  function onClickPostBookingHandler() {
    // const today = new Date();
    const body = {
      ...newBooking,
      userId: loggedUser._id,
      // date: formatDate(today),
      // date: '2023-01-01T12:00',
      state: 'pending',
      deleted: false,
    };

    if (!body.date || !body.serviceId) {
      console.error('Error !body.date || !body.serviceId');
      return;
    }

    console.log(body);
    // createBookingHook.request({ method: 'POST', route: 'bookings/date', body });
  }

  function getBookings(formattedDate) { // yyyy-mm-dd
    bookingsApiHook.request({ route: `bookings/day/${formattedDate}` });
  }

  function onChangeDateHandler(e) {
    console.log('e.target.value', e.target.value);
    getBookings(e.target.value);
  }

  useEffect(() => {
    console.log('bookingsApiHook.data', bookingsApiHook.data);
  }, [bookingsApiHook.data]);

  useEffect(() => {
    servicesApiHook.request({ route: 'services/all' });
    // const today = new Date();
    // const formattedDate = formatDate(today);
    // bookingsApiHook.request({ route: `bookings/day/${formattedDate}` });
    getBookings('2023-01-01');
  }, []);

  return (
    <Container>
      <div className='bookingPanel'>
        <Panel>
          <input type='date' onChange={ onChangeDateHandler }/>
          { JSON.stringify(bookingsApiHook.data) }
        </Panel>

        <Panel>
          <input type='datetime-local'
            onChange={(e) => { setNewBooking({ ...newBooking, date: e.target.value }); }}
          />
          <Select
            data={
              servicesApiHook.data.map((serv) => ({ key: serv._id, value: serv.name })) || []
            }
            defaultMessage={'Seleccione un servicio'}
            onChangeHandler={(serv) => {
              setNewBooking({ ...newBooking, serviceId: serv.key });
            }}
          />

          <Button
            onClick={ onClickPostBookingHandler }
            className={ (!newBooking.date || !newBooking.serviceId) && 'disabled' }
          >
            Solicitar cita
          </Button>
        </Panel>
      </div>
    </Container>
  );
}

export default Booking;

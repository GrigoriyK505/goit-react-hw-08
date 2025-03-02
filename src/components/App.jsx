import { Route, Routes } from 'react-router-dom';
import {useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOps';
import { useDispatch } from 'react-redux';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import NotFound from '../pages/NotFound/NotFound';
import Layout from './Layout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
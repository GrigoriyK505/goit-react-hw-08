import { Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute'
import RestrictedRoute from '../components/RestrictedRoute';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import NotFound from '../pages/NotFound/NotFound';
import Layout from './Layout';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors.js';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contacts' element={
            <PrivateRoute redirectTo='/'>
              <Contacts />
            </PrivateRoute>
          } />
          <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/contacts'/>}/>
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
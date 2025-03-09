import clsx from "clsx"
import s from './Header.module.css'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      {user.name && <h3>Welcome, {user.email}</h3>}
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/contacts'>Contacts</NavLink>
        {!isLoggedIn && (
          <>
          <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/login'>Login</NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/register'>Register</NavLink>
          </>
        )}
        {isLoggedIn && <button onClick={()=> dispatch(logoutThunk())}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
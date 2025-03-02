import clsx from "clsx"
import s from './Header.module.css'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className={s.nav}>
        <NavLink className={({isActive}) => clsx(s.link, isActive && s.active)} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => clsx(s.link, isActive && s.active)} to='/contacts'>Contacts</NavLink>
        <NavLink className={({isActive}) => clsx(s.link, isActive && s.active)} to='/login'>Login</NavLink>
        <NavLink className={({isActive}) => clsx(s.link, isActive && s.active)} to='/register'>Register</NavLink>
      </nav>
    </header>
  )
};

export default Header;
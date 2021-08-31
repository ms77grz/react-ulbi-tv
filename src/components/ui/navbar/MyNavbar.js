import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';

import classes from './MyNavbar.module.css';
import { AuthContext } from '../../../context/index';

export default function MyNavbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  function handleLogout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className={classes.myNavbar}>
      {isAuth && <MyButton onClick={handleLogout}>Logout</MyButton>}
      {isAuth && (
        <div className={classes.myNavbarLinks}>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Posts</Link>
        </div>
      )}
    </div>
  );
}

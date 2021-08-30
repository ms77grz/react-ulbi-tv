import { Link } from 'react-router-dom';

import classes from './MyNavbar.module.css';

export default function MyNavbar() {
  return (
    <div className={classes.myNavbar}>
      <div className={classes.myNavbarLinks}>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.navContainer}>
        <div className={style.navItemContainer}>
          <Link className={style.navItem} to="/">
            Users
          </Link>
        </div>

        <div className={style.navItemContainer}>
          <Link className={style.navItem} to="/add">
            New user
          </Link>
        </div>
        <div className={style.navItemContainer}>
          <Link className={style.navItem} to="/about">
            About me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

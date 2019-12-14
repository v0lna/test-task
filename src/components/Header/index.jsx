import React from 'react';
import style from './style.module.css';

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.navContainer}>
        <div className={style.navItemContainer}>
          <a className={style.navItem} href="/">
            Users
          </a>
        </div>

        <div className={style.navItemContainer}>
          <a className={style.navItem} href="/add">
            New user
          </a>
        </div>
        <div className={style.navItemContainer}>
          <a className={style.navItem} href="/about">
            About me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

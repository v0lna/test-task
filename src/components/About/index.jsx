import React from 'react';
import style from './style.module.css';

const About = () => {
  return (
    <div className={style.aboutPage}>
      <h1>About page</h1>
      <div className={style.authorWrapper}>
        <span className={style.itemFirstcolumn}>Author:</span>
        <span className={style.itemSecondcolumn}>Sergey Lebedinets</span>

        <span className={style.itemFirstcolumn}>Age:</span>
        <span className={style.itemSecondcolumn}>21</span>

        <span className={style.itemFirstcolumn}>Skills:</span>
        <span className={style.itemSecondcolumn}>HTML, CSS, JS, React, Redux</span>
        <span className={style.itemFirstcolumn}>Links:</span>
        <a className={style.itemSecondcolumn} href="https://github.com/v0lna">
          Github
        </a>
      </div>
    </div>
  );
};

export default About;

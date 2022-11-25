import React, { Component } from 'react';
import calsses from './headerComp.module.css';

const HeaderComp = (props) => {
  return (
    <header>
      <nav className={calsses.topBar}>
        {/* <img src="https://i.dlpng.com/static/png/197684_preview.png" /> */}
        <img src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" />
      </nav>
    </header>
  );
};

export default HeaderComp;

import React from 'react';
import { GiBaseballGlove } from "react-icons/gi";
import { headerMenus,searchKeyWord,snsLink } from "../../data/header";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
          <a href="/">
            <em><GiBaseballGlove /></em>
            <span>KBO<br/> <i>Youtube</i></span>
          </a>
        </h1>
        <nav className='header__menu'>
          <ul className='menu'>
            {headerMenus.map((menu, key) => (
              <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                <Link to={menu.src}>
                  <span>
                    <img src={menu.img} alt='logo img' />
                  </span>
                  <p>{menu.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='keyword'>
            {searchKeyWord.map((menu, key,) => (
              <li key={key}>
                <Link to={menu.src}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='header__sns'>
          <ul>
            {snsLink.map((menu, key,) => (
              <li key={key} title={menu.title}>
                <Link to={menu.url}>
                  {menu.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </header>
  )
}

export default Header
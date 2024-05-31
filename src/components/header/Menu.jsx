import React from 'react'
import { Link } from 'react-router-dom';
import { headerMenus,searchKeyWord } from "../../data/menu";

const Menu = () => {
  return (
    <nav className='header__menu'>
      <ul className='menu'>
        {headerMenus.map((menu, key) => (
          <li key={key}>
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
  )
}

export default Menu
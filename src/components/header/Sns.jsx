import React from 'react'
import { Link } from 'react-router-dom';
import { snsLink } from "../../data/menu";

const Sns = () => {
  return (
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
  )
}

export default Sns
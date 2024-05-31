import React from 'react'
import { GiBaseballGlove } from "react-icons/gi";

const Logo = () => {
  return (
    <h1 className='header__logo'>
        <a href="/">
        <em><GiBaseballGlove /></em>
        <span>KBO<br/> <i>Youtube</i></span>
        </a>
    </h1>
  )
}

export default Logo
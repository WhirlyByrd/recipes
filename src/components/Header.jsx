import React from "react";
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes['header']}>
      <div className={classes['title']}><h2>Devmountain Eatery</h2></div>
      <div className={classes['links']}>
      <nav>
        <NavLink 
        to=''
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#fff',
          textDecoration: isActive ? 'underline' : 'none',
          fontWeight: isActive ? '700' : '',
        })}
        >Home</NavLink>

        <NavLink 
        to='/newRecipe'
        style={({ isActive }) => ({
          color: isActive ? 'lightblue' : '#fff',
          textDecoration: isActive ? 'underline' : 'none',
          fontWeight: isActive ? '700' : '',
        })}
        >Add Recipe</NavLink>    
      </nav>
      </div>
    </header>
  );
};

export default Header;

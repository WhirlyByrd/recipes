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
        end
        style={({ isActive }) => ({
          color: isActive ? '#3E3E3E' : '#fff',
        })}
        >Home</NavLink>

        <NavLink 
        to='/newRecipe'
        style={({ isActive }) => ({
          color: isActive ? '#3E3E3E' : '#fff',
        })}
        >Add Recipe</NavLink>    
      </nav>
      </div>
    </header>
  );
};

export default Header;

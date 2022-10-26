import React from "react";
import {Link} from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes['header']}>
      <div className={classes['title']}><h2>Devmountain Eatery</h2></div>
      <div className={classes['links']}>
      <nav>
        <Link to=''>Home</Link>
        <Link to='/newRecipe'>Add Recipe</Link>    
      </nav>
      </div>
    </header>
  );
};

export default Header;

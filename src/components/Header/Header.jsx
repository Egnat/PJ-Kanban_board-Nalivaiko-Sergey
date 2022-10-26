import React from 'react';
import './Header.css'
import UserMenu from '../UserMenu/UserMenu';

function Header() {
  return ( 
    <header>
    <h1 className='header__title'>Awesome Kanban Board</h1>
    <UserMenu />
    </header>
  );
}

export default Header;
import React from 'react';
import  './Header.css';
//import Image from './header.png'


class Header extends React.Component {
  render() {
    return (
      <div id = "headerback">
        <img id= "picture" src="http://localhost:3000/components/header/header.png" alt="header"/>
      </div>
    )
};}

export default Header;

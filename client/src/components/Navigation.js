import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/Auth';
import SignOutButton from './SignOut';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import '../App.css';

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark color">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">ARTSY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            {/*</li> <DropdownButton
            //       alignRight
            //       title = "Category"
            //       variant="secondary"
            //       id="dropdown-menu-align-right"
                  
                  
            //     >
            //       <Dropdown.Item ><Link exact to="/home">
            //     Home
            //   </Link></Dropdown.Item>
            //       <Dropdown.Item ><Link exact to="/outdoor">
            //     Outdoor
            //   </Link></Dropdown.Item>
            //       <Dropdown.Item ><Link exact to="/office">
            //     Office
            //   </Link></Dropdown.Item>
            //   <Dropdown.Item ><Link exact to="/abstract">
            //    Abstract
            //   </Link></Dropdown.Item>
            //   <Dropdown.Item ><Link exact to="/other">
            //     Other
            //   </Link></Dropdown.Item>
              
            //     </DropdownButton> */}
            </li>

            <li class="nav-item">
              <Link exact to="/hottest" class='nav-link' >
                Hottest Backgrounds
              </Link>
            </li>
            <li class="nav-item">
              <Link exact to="/uploads" class='nav-link' >
                My Photos
              </Link>
            </li>
            <li class="nav-item">
              <Link exact to="/uploadimage" class='nav-link'  >
                Upload Image
              </Link>
            </li>
          </ul>
          <ul class='navbar-nav nav justify-content-end'>
            <li class="nav-item">
                  <p class='nav-link'>Welcome!</p>
              </li>
              <li class="nav-item">
                <Link exact to="/account" class='nav-link' >
                  Account
                </Link>
              </li>
              <li class="nav-item">
              <SignOutButton/>
              </li>
            </ul>
        </div>
      </div>
    </nav>
    <ul class="topnav">
  <li><NavLink exact to="/home" activeClassName={"selected"}> Home Backgrounds</NavLink></li>
  <li><NavLink exact to="/outdoor" activeClassName={"selected"}> Outdoor Backgrounds</NavLink></li>
  <li><NavLink exact to="/office" activeClassName={"selected"}>Office Backgrounds</NavLink></li>
  <li><NavLink exact to="/abstract" activeClassName={"selected"}>Abstract Backgrounds</NavLink></li>
  <li><NavLink exact to="/other" activeClassName={"selected"}>Other Backgrounds</NavLink></li>
 
</ul>

    </div>
  );
};

const NavigationNonAuth = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">ARTSY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <DropdownButton
                  alignRight
                  title = "Category"
                  variant="secondary"
                  id="dropdown-menu-align-right"
                  
                >
                  <Dropdown.Item ><Link exact to="/home">
                Home
              </Link></Dropdown.Item>
                  <Dropdown.Item ><Link exact to="/outdoor">
                Outdoor
              </Link></Dropdown.Item>
                  <Dropdown.Item ><Link exact to="/office">
                Office
              </Link></Dropdown.Item>
              <Dropdown.Item ><Link exact to="/abstract">
              Abstract
            </Link></Dropdown.Item>
            <Dropdown.Item ><Link exact to="/other">
            Other
          </Link></Dropdown.Item>
              
                </DropdownButton>
                </li>
                <li class="nav-item">
                <Link exact to="/hottest" class='nav-link' >
                  Hottest
                </Link>
              </li>
          </ul>
         
          <ul class='navbar-nav nav justify-content-end'>
            <li class="nav-item">
              <Link exact to="/signup" class='nav-link' >
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link exact to="/signin" class='nav-link'  >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ul class="topnav">
  <li><NavLink exact to="/home" activeClassName={"selected"}> Home Backgrounds</NavLink></li>
  <li><NavLink exact to="/outdoor" activeClassName={"selected"}> Outdoor Backgrounds</NavLink></li>
  <li><NavLink exact to="/office" activeClassName={"selected"}>Office Backgrounds</NavLink></li>
  <li><NavLink exact to="/abstract" activeClassName={"selected"}>Abstract Backgrounds</NavLink></li>
  <li><NavLink exact to="/other" activeClassName={"selected"}>Other Backgrounds</NavLink></li>
 
</ul>
    </div>
  );
};

export default Navigation;

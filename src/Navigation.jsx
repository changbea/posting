import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { auth, onSocialClick, dbservice, storage } from './serverbase'
import './Navigation.css'

const onLogOutClick = () => auth.signOut();
const checkbox = () => {
  document.getElementById('nav-control').checked = false
}
function Navigation({ isLoggedIn, userObj }) {
    return(
        <div>
                {/* <nav className='navbar'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>menus
    </button>
                </nav> */}
          <input type="checkbox" id="nav-control" className="nav-control" />
          <label htmlFor="nav-control" className="toggle-button">
            <div className="wolverine">
              <div className="claws"></div>
            </div>
          </label>
          {isLoggedIn && 
          <nav className="navigation">
            <h1 className='nav-padding'>
              <Link to='/posting/' onClick={checkbox}>Home</Link>
            </h1>
            <h1>
              <Link to='/posting/profile' onClick={checkbox}>{userObj.displayName}'s Profile</Link>
            </h1>
            <h1>
              <Link to='/posting/ranking' onClick={checkbox}>Ranking</Link>
            </h1>
            <h1>
              <Link to="/posting/contact" onClick={checkbox}>Contact</Link>
            </h1>
            <h1>
              <Link to="/posting/" onClick={() => {
                onLogOutClick()
                checkbox()
              }}>Logout</Link>
            </h1>
          </nav>}
          {!isLoggedIn &&
            <nav className="navigation">
              <h1 className='nav-padding'>
                <Link to='/posting/'>Sign In&Up</Link>
              </h1>
              <h1>
                <Link to="/posting/contact">Contact</Link>
              </h1>
            </nav>
          }
            {/* <ul className='nav'>
                <li>
                <Link className='menu' to='/'>Home</Link>
                </li>
                <li>
                <Link className='menu' to='/profile'>{userObj.displayName}'s Profile</Link>
                </li>
              </ul> */}
          {/* <h1>Pure CSS3/HTML full screen slide out menu.</h1> */}
        </div>
    )
}

export default Navigation
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { auth, onSocialClick, dbservice, storage } from './serverbase'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import './Navigation.css'

const onLogOutClick = () => auth.signOut();
const checkbox = () => {
  document.getElementById('nav-control').checked = false
}
function Navigation({ isLoggedIn, userObj }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
    console.log(open)
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return(
    <ClickAwayListener onClickAway={checkbox}>
              {/* <nav className='navbar'>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>menus
  </button>
              </nav> */}
      <div> 
        <input type="checkbox" id="nav-control" className="nav-control" onClick={handleClick}/>
        <label htmlFor="nav-control" className="toggle-button">
          <div className="wolverine">
            <div className="claws"></div>
          </div>
        </label>
        {isLoggedIn && 
        <nav className="navigation">
          <h1 className='nav-padding'>
            <Link to='/posting/' onClick={checkbox}>메인 페이지</Link>
          </h1>
          <h1>
            <Link to='/posting/profile' onClick={checkbox}>{userObj.displayName}의 프로필</Link>
          </h1>
          <h1>
            <Link to='/posting/ranking' onClick={checkbox}>유저 랭킹</Link>
          </h1>
          <h1>
            <Link to="/posting/contact" onClick={checkbox}>신고하기</Link>
          </h1>
          <h1>
            <Link to="/posting/" onClick={() => {
              onLogOutClick()
              checkbox()
            }}>로그아웃</Link>
          </h1>
        </nav>}
        {!isLoggedIn &&
          <nav className="navigation">
            <h1 className='nav-padding'>
              <Link to='/posting/' onClick={checkbox}>메인 페이지</Link>
            </h1>
            <h1>
              <Link to='/posting/sign' onClick={checkbox}>로그인/회원가입</Link>
            </h1>
            <h1>
              <Link to="/posting/contact" onClick={checkbox}>신고하기</Link>
            </h1>
          </nav>
        }
        </div>
      </ClickAwayListener>
    )
}

export default Navigation
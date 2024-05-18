import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import 'firebase/firestore'
import Home from './Home'
import Auth from './Auth'
import Profile from './Profile'
import Ranking from './Ranking'
import Specific from './Specific'
import Navigation from './Navigation'
import Navigations from './Navigations'

function Router({ isLoggedIn, userObj, newAccount, setNewAccount }) {
    const [counter, setCounter] = useState([]);
    const [value, setValue] = useState(2);
    const [side, setSide] = useState('d-flex flex-column');
    const [sideNavigation, setSideNavigation] = useState('border border-primary rounded-top position-fixed bottom-0 start-0 end-0');
    // const [values, setValues] = useState(1);
    
    return (
        <BrowserRouter>
            <Navigation isLoggedIn={isLoggedIn} userObj={userObj} value={value} setValue={setValue} side={side} setSide={setSide} sideNavigation={sideNavigation} setSideNavigation={setSideNavigation}/>
            <Routes>
                {
                    isLoggedIn ? (
                        <Route>
                            <Route path='/posting/' Component={() => <Home isLoggedIn={isLoggedIn} userObj={userObj} value={value} newAccount={newAccount} setNewAccount={setNewAccount} side={side} setSide={setSide} setValue={setValue} counter={counter} setCounter={setCounter}/>}/>
                            {/* <Route path='/posting/sign' Component={() => <Home isLoggedIn={isLoggedIn} userObj={userObj} value={value} newAccount={newAccount} setNewAccount={setNewAccount}/>}/> */}
                            <Route path='/posting/profile' Component={() => <Profile userObj={userObj} side={side} setSide={setSide}/>}/>
                            <Route path='/posting/ranking' Component={() => <Ranking userObj={userObj} side={side} setSide={setSide}/>}/>
                            <Route path='/posting/specific' Component={() => <Specific />}/>
                        </Route>
                    ) : (
                        <Route>
                            <Route path='/posting/' Component={() => <Home isLoggedIn={isLoggedIn} userObj={{uid: null}} value={value} newAccount={newAccount} setNewAccount={setNewAccount} side={side} setSide={setSide} setValue={setValue} counter={counter} setCounter={setCounter}/>}/>
                            <Route path='/posting/specific' Component={() => <Specific />}/>
                            {/* <Route path='/posting/sign' Component={() => <Home isLoggedIn={isLoggedIn} userObj={{uid: null}} value={1} newAccount={newAccount} setNewAccount={setNewAccount}/>}/> */}
                        </Route>
                    )
                }
            </Routes>
            <Navigations counter={counter} isLoggedIn={isLoggedIn} value={value} setValue={setValue} sideNavigation={sideNavigation} setSideNavigation={setSideNavigation}/>
            {/* <div className='naving'>
            </div> */}
        </BrowserRouter>
    )
}

export default Router
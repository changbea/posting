import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'
import Profile from './Profile'
import Navigation from './Navigation'

function Router({ isLoggedIn, userObj }) {
    return (
        <BrowserRouter>
            <Navigation isLoggedIn={isLoggedIn} userObj={userObj}/>
            <Routes>
                {
                    isLoggedIn ? (
                        <Route>
                            <Route path='/newbasing/' Component={() => <Home isLoggedIn={isLoggedIn} userObj={userObj}/>}/>
                            <Route path='/profile' Component={() => <Profile userObj={userObj} />}/>
                        </Route>
                    ) : (
                        <Route>
                            <Route path='/newbasing/' Component={Auth}/>
                        </Route>
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router
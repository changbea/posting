import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import 'firebase/firestore'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'
import Profile from './Profile'
import Ranking from './Ranking'
import Navigation from './Navigation'

function Router({ isLoggedIn, userObj }) {
    return (
        <BrowserRouter>
            <Navigation isLoggedIn={isLoggedIn} userObj={userObj}/>
            <Routes>
                {
                    isLoggedIn ? (
                        <Route>
                            <Route path='/posting/' Component={() => <Home isLoggedIn={isLoggedIn} userObj={userObj}/>}/>
                            <Route path='/posting/sign' Component={() => <Home isLoggedIn={isLoggedIn} userObj={userObj}/>}/>
                            <Route path='/posting/profile' Component={() => <Profile userObj={userObj} />}/>
                            <Route path='/posting/ranking' Component={() => <Ranking userObj={userObj} />}/>
                        </Route>
                    ) : (
                        <Route>
                            <Route path='/posting/' Component={() => <Home isLoggedIn={isLoggedIn} userObj={{uid: null}}/>}/>
                            <Route path='/posting/sign' Component={Auth}/>
                        </Route>
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router
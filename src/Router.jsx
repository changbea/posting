import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'

function Router({ isLoggedIn, userObj }) {
    return (
        <BrowserRouter>
            <Routes>
                {
                    isLoggedIn ? (
                        <Route>
                            <Route exact path='/' Component={() => <Home isLoggedIn={isLoggedIn} userObj={userObj}/>}/>
                        </Route>
                    ) : (
                        <Route>
                            <Route exact path='/' Component={Auth}/>
                        </Route>
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Router
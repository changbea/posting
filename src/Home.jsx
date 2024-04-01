import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import 'firebase/firestore'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Auth from './Auth'
import { auth } from "./serverbase";

function Home({ isLoggedIn, userObj }) {
    return (
        <form>
            <div>email</div>
            <div>password</div>
            <Link className='btn btn-primary' onClick={() => auth.signOut()}>Sign Out</Link>
        </form>
    )
}

export default Home
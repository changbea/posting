import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getDocs, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Auth from './Auth'
import { auth, onSocialClick, dbservice, storage } from './serverbase'
import { v4 as uuidv4 } from 'uuid';

function Home({ isLoggedIn, userObj }) {
    const [count, setCount] = useState('');
    const [counter, setCounter] = useState('');
    const changeRoom = (event) => {
        event.preventDefault()
        const {
            target: {value},
        } = event;
        if (value !== 'default') {
            setCount(value);
        }
    }
    const changeSeat = (event) => {
        event.preventDefault()
        const {
            target: {value},
        } = event;
        if (value !== 'default') {
            setCounter(value);
        }
    }
    
    const submit = async (event) => {
        event.preventDefault()
        if(count !== '' && counter !== '') {
            await addDoc(collection(dbservice, 'num'), {
                text: {count: count, counter: counter},
                creatorClock: Date.now(),
                creatorId: userObj.uid,
            })
        } else {
            alert('Choose Number')
        }
    }

    return (
        <div>
            <div className='d-flex router'>
                <select form='selection' onChange={changeRoom}>
                    <option value='default' disabled selected>study room number</option>
                    <option value='one'>one</option>
                    <option value='focus'>focus</option>
                    <option value='two'>two</option>
                    <option value='three'>three</option>
                    <option value='four'>four</option>
                </select>
                
                <form id='selection' onSubmit={submit}>
                    {count === 'one' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='one' name='one' min="1" max="181"/>}
                    {count === 'focus' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='focus' name='focus' min="1" max="46"/>}
                    {count === 'two' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='two' name='two' min="1" max="315"/>}
                    {count === 'three' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='three' name='three' min="1" max="156"/>}
                    {count === 'four' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='four' name='four' min="1" max="149"/>}
                    <input className='btn btn-primary' type='submit' value='submit'/>
                </form>
            </div>
            {/* <form>
                <div>email</div>
                <div>password</div>
                <Link className='btn btn-primary' onClick={() => auth.signOut()}>Sign Out</Link>
            </form> */}
        </div>

    )
}

export default Home
import { useState, useEffect } from 'react'
import { auth, onSocialClick, dbservice, storage } from './serverbase'
import { collection, query, where, orderBy, addDoc, getDocs, doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function Add({ isLoggedIn, userObj }) {
  const [borrow, setBorrow] = useState(true);
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

  const borrowOnClick = (boolean) => setBorrow(boolean)
  const noticeBorrowOnClick = (boolean) => setNoticeBorrow(boolean)
  const onChange = (event) => {
    console.log(event.$d)
  }
  return (
    <div className='d-flex flex-column'>
        <div className='d-flex justify-content-center btn-group btn-group-toggle'>
            {borrow ?
                <div className='d-flex justify-content-center btn-group btn-group-toggle'>
                    <button className='btn btn-outline-primary active' onClick={() => borrowOnClick(true)}>Would like to Borrow</button>
                    <button className='btn btn-outline-primary' onClick={() => borrowOnClick(false)}>Would like to Lend</button>
                </div>
                :
                <div className='d-flex justify-content-center btn-group btn-group-toggle'>
                    <button className='btn btn-outline-primary' onClick={() => borrowOnClick(true)}>Would like to Borrow</button>  
                    <button className='btn btn-outline-primary active' onClick={() => borrowOnClick(false)}>Would like to Lend</button>  
                </div>
            }
        </div>
        <div>Where are you</div>
        <div className='d-flex justify-content-center router'>
            <select className='form-control' form='selection' onChange={changeRoom}>
                <option value='default' disabled selected>study room number</option>
                <option value='one'>one</option>
                <option value='focus'>focus</option>
                <option value='two'>two</option>
                <option value='three'>three</option>
                <option value='four'>four</option>
            </select>
            
            <form className='form-control' id='selection' onSubmit={submit}>
                {count === 'one' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='one' name='one' min="1" max="181"/>}
                {count === 'focus' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='focus' name='focus' min="1" max="46"/>}
                {count === 'two' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='two' name='two' min="1" max="315"/>}
                {count === 'three' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='three' name='three' min="1" max="156"/>}
                {count === 'four' && <input className='input-group-text' onChange={changeSeat} placeholder='num' type="number" id='four' name='four' min="1" max="149"/>}
                <input className='btn btn-outline-primary' type='submit' value='submit'/>
            </form>
        </div>
        <div>When</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
                <TimePicker label="Basic time picker" onChange={onChange}/>
            </DemoContainer>
        </LocalizationProvider>
    </div>  
  )
}

export default Add

import { useState, useEffect } from 'react'
import { auth, onSocialClick, dbservice, storage } from './serverbase'
import { collection, query, where, orderBy, addDoc, getDocs, doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function Add({ isLoggedIn, userObj }) {
  const [choose, setChoose] = useState(0);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  const roomList = ['one', 'two', 'three', 'four', 'focus']
  const changeRoom = (event) => {
    event.preventDefault()
    const {
        target: {value},
    } = event;
    setCount(value);
  }
  const changeSeat = (event) => {
      event.preventDefault()
      const {
          target: {value},
      } = event;
      setCounter(value);
  }

  const submit = async (event) => {
      event.preventDefault()
      if(count !== 0 && counter !== 0 && from !== '' && to !== '') {
        await addDoc(collection(dbservice, 'num'), {
          point: 0,
            text: {choose: choose, count: count, counting: roomList[count-1], counter: counter, clock: from, clocker: to},
            creatorClock: Date.now(),
            creatorId: userObj.uid,
        })
        setChoose(0)
        setCount(0)
        setCounter(0)
      } else {
          alert('Choose Number')
      }
  }

  const onClick = (num) => setChoose(num)
//   const noticeBorrowOnClick = (boolean) => setChoose(boolean)
  const onChangeFrom = (event) => {
    setFrom({hour: event.$H, minute: event.$m})
  }
  const onChangeTo = (event) => {
    setTo({hour: event.$H, minute: event.$m})
  }
  const roomOne = Array(181).fill().map((value, index) => <option key={index+1} value={index+1}>{index+1}</option>)
  const roomFocus = Array(46).fill().map((value, index) => <option key={index+1} value={index+1}>{index+1}</option>)
  const roomTwo = Array(315).fill().map((value, index) => <option key={index+1} value={index+1}>{index+1}</option>)
  const roomThree = Array(156).fill().map((value, index) => <option key={index+1} value={index+1}>{index+1}</option>)
  const roomFour = Array(149).fill().map((value, index) => <option key={index+1} value={index+1}>{index+1}</option>)
//   console.log(count)
  return (
    <div className='d-flex flex-column'>
        <div className='d-flex justify-content-center btn-group btn-group-toggle'>
            {choose === 0 && 
                <div className='d-flex justify-content-center btn-group btn-group-toggle'>
                    <button className='btn btn-outline-primary' onClick={() => onClick(1)}>Would like to Borrow</button>
                    <button className='btn btn-outline-primary' onClick={() => onClick(2)}>Would like to Lend</button>
                </div>
            }
            {choose === 1 &&
                <div className='d-flex justify-content-center btn-group btn-group-toggle'>
                    <button className='btn btn-outline-primary active' onClick={() => onClick(1)}>Would like to Borrow</button>
                    <button className='btn btn-outline-primary' onClick={() => onClick(2)}>Would like to Lend</button>
                </div>
            }
            {choose === 2 &&
                <div className='d-flex justify-content-center btn-group btn-group-toggle'>
                    <button className='btn btn-outline-primary' onClick={() => onClick(1)}>Would like to Borrow</button>  
                    <button className='btn btn-outline-primary active' onClick={() => onClick(2)}>Would like to Lend</button>  
                </div>
            }
        </div>
        {choose !== 0 &&
            <div>
                <div>Where</div>
                <div className='d-flex justify-content-center router'>
                    <select className='form-control' form='selection' defaultValue={0} onChange={changeRoom}>
                        <option value={0} disabled>study room number</option>
                        <option value={1}>one</option>
                        <option value={5}>focus</option>
                        <option value={2}>two</option>
                        <option value={3}>three</option>
                        <option value={4}>four</option>
                    </select>
                    <select className='form-control' form='selection' defaultValue={0} onChange={changeSeat}>  
                        <option value={0} disabled>seat number</option>
                        {count == 1 && roomOne}
                        {count == 5 && roomFocus}
                        {count == 2 && roomTwo}
                        {count == 3 && roomThree}
                        {count == 4 && roomFour}
                    </select>
                </div>
                <div>When</div>
                <div className='d-flex justify-content-center'>
                    <div className='p-3'>from</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker label="Basic time picker" form='selection' onChange={onChangeFrom}/>
                        </DemoContainer>
                    </LocalizationProvider>
                    <div className='p-3'>to</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker label="Basic time picker" form='selection' onChange={onChangeTo}/>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className='d-flex justify-content-center'>
                    <form id='selection' onSubmit={submit}>
                        <input className='btn btn-outline-primary' type='submit' value='submit'/>
                    </form>
                    <button className='btn btn-outline-primary' onClick={() => onClick(0)}>cancel</button>
                </div>
            </div>
        }
    </div>  
  )
}

export default Add

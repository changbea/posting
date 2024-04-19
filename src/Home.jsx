import { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import Menu from './Menu'
import Notice from './Notice'
import Add from './Add'
import { auth, onSocialClick, dbservice, storage } from './serverbase'

function Home({ isLoggedIn, userObj }) {
    const [borrow, setBorrow] = useState(true);
    const [noticeBorrow, setNoticeBorrow] = useState(true);
    const [count, setCount] = useState('');
    const [counter, setCounter] = useState('');
    const [messages, setMessages] = useState([]);
    const [num, setNum] = useState(null)
    const noticeBorrowOnClick = (boolean) => setNoticeBorrow(boolean)
    
    useEffect(() => {
        onSnapshot(query(collection(dbservice, 'num'), orderBy('creatorClock', 'desc')), (snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setMessages(newArray)
        })
    })

    useEffect(() => {
        onSnapshot(query(doc(dbservice, `members/${userObj.uid}`)), (snapshot) => {
            // const number = snapshot.docs.map((document) => ({
            //     ...document.data(),
            // }));
            const number = snapshot.data().points
            setNum(number)
        })
    }, [])
    
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center'>좋은 날씨네요 {userObj.displayName} 님</div>
            {isLoggedIn && <div className='d-flex justify-content-center'>내 포인트: {num}</div>}
            {isLoggedIn && <Menu userObj={userObj}/>}
            <Add isLoggedIn={isLoggedIn} userObj={userObj}/>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Basic time picker" />
                </DemoContainer>
            </LocalizationProvider> */}
            <Notice isLoggedIn={isLoggedIn} userObj={userObj}/>
        </div>

    )
}

export default Home
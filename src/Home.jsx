import { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import Menu from './Menu'
import Notice from './Notice'
import Auth from './Auth'
import Add from './Add'
// import Navigations from './Navigations'
import { auth, onSocialClick, dbservice, storage } from './serverbase'

function Home({ isLoggedIn, userObj, setUserObj, value, newAccount, setNewAccount, side, setSide, setValue, counter, setCounter}) {
    const [num, setNum] = useState(null)
    // const noticeBorrowOnClick = (boolean) => setNoticeBorrow(boolean)
    
    // useEffect(() => {
    //     onSnapshot(query(collection(dbservice, 'num'), orderBy('creatorClock', 'desc')), (snapshot) => {
    //         const newArray = snapshot.docs.map((document) => ({
    //             id: document.id,
    //             ...document.data(),
    //         }));
    //         setMessages(newArray)
    //     })
    // })
    
    useEffect(() => {
        onSnapshot(query(doc(dbservice, `members/${userObj.uid}`)), (snapshot) => {
            // const number = snapshot.docs.map((document) => ({
            //     ...document.data(),
            // }));
            if (isLoggedIn) {
                const number = snapshot.data().points
                setNum(number)
            }
        })
    }, [])
    
    return (
        <div className={side}>
            {isLoggedIn && 
            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>좋은 날씨네요 {userObj.displayName} 님</div>
                {isLoggedIn && <div className='d-flex justify-content-center'>내 포인트: {num}</div>}
                {value === 0 && 
                    <Add isLoggedIn={isLoggedIn} userObj={userObj} valuing={value}/>
                }
                {value === 1 &&
                    <Notice isLoggedIn={isLoggedIn} userObj={userObj} valuing={value}/>
                }
                {value === 2 && <Menu userObj={userObj} isLoggedIn={isLoggedIn} counter={counter} setCounter={setCounter}/>}
                {value === 3 && 
                    <Add isLoggedIn={isLoggedIn} userObj={userObj} valuing={value}/>
                }
                {value === 4 &&
                    <Notice isLoggedIn={isLoggedIn} userObj={userObj} valuing={value}/>
                }
            </div>
            }
            {!isLoggedIn &&
                <div>
                    {value === 0 &&
                        <Notice isLoggedIn={isLoggedIn} userObj={userObj} valuing={1}/>
                    }
                    {value === 1 &&
                        <Auth newAccount={newAccount} setNewAccount={setNewAccount} userObj={userObj} setUserObj={setUserObj} valuing={value}/>
                    }
                    {value === 2 &&
                        <Notice isLoggedIn={isLoggedIn} userObj={userObj} valuing={4}/>
                    }
                </div>
            }
        </div>
    )
}

export default Home
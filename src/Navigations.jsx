import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function Navigations({ isLoggedIn, value, setValue }) {
    return (
        <div>
            {isLoggedIn &&
                <BottomNavigation
                    className='border border-primary rounded-top position-fixed bottom-0 start-0 end-0'
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction label={<Link to='./posting/'>Borrow</Link>}/>
                    <BottomNavigationAction label={<Link to='./posting/'>Borrowing</Link>}/>
                    <BottomNavigationAction label={<Link to='./posting/'>Status</Link>}/>
                    <BottomNavigationAction label={<Link to='./posting/'>Lend</Link>}/>
                    <BottomNavigationAction label={<Link to='./posting/'>Lending</Link>}/>
                </BottomNavigation>
            }
            {!isLoggedIn && 
                <BottomNavigation
                className='border border-primary rounded-top position-fixed bottom-0 start-0 end-0'
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    if (newValue === 0) {
                        setValue(1)
                    } else if (newValue === 2) {
                        setValue(4)
                    }
                }}
                >
                    <BottomNavigationAction label={<Link to='./posting/'>Borrowing</Link>}/>
                    <BottomNavigationAction label={<Link to='./posting/sign'>Login</Link>}/>
                    <BottomNavigationAction label={<Link to='./posting/'>Lending</Link>}/>
                </BottomNavigation>
            }
        </div>
    )
}

export default Navigations

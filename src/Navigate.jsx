import { Link } from 'react-router-dom';
import logo from './logos/react.png'
import './Navigate.css'

export default function Navigate() {
    return (
        <div className='nav'>
            <Link to="/">
                <img src={logo} alt='react' width='5%' height='5%' />
            </Link>
            <br />
            <Link to="/newpage/drink">Drink&emsp;</Link>
            <Link to="/newpage/subway">Subway&emsp;</Link>
            <Link to="/newpage/cards">Cards&emsp;</Link>
            <Link to="/newpage/recommendations">Recommendations&emsp;</Link>
            <Link to="/newpage/resume">Resume&emsp;</Link>
            <Link to="/newpage/leagues">Leagues&emsp;</Link>
            <Link to="/newpage/gamersp">Gamersp&emsp;</Link>
            <Link to="/newpage/gamesrspextended">Gamesrspextended&emsp;</Link>
            <Link to="/newpage/gamefinding">Gamefinding&emsp;</Link>
            <Link to="/newpage/gameflipping">Gameflipping&emsp;</Link>
            <Link to="/newpage/gamehint">Gamehint&emsp;</Link>
        </div>
    );      
}
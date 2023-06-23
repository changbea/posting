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
            <Link to="/drink">Drink&emsp;</Link>
            <Link to="/subway">Subway&emsp;</Link>
            <Link to="/cards">Cards&emsp;</Link>
            <Link to="/recommendations">Recommendations&emsp;</Link>
            <Link to="/resume">Resume&emsp;</Link>
            <Link to="/leagues">Leagues&emsp;</Link>
            <Link to="/gamersp">Gamersp&emsp;</Link>
            <Link to="/gamesrspextended">Gamesrspextended&emsp;</Link>
            {/* <Link to="/gamefinding">Gamefinding&emsp;</Link>
            <Link to="/gameflipping">Gameflipping&emsp;</Link>
            <Link to="/gamehint">Gamehint&emsp;</Link> */}
        </div>
    );      
}
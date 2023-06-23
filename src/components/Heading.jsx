import Navigate from '../Navigate'
import './Heading.css'

export default function Heading() {
    return (
      <div>
        <Navigate />
        <div className='centered'>
          <h1 className='centered'>START PAGE</h1>
          <p className='centered'>Template by me</p>
          <button>Get Started</button>
        </div>
      </div>
    );
}
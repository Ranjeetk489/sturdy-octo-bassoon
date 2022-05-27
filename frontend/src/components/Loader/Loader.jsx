import {SquareLoader} from 'react-spinners';
import './Loader.css'

const Loader = () => {
  return (
    <div className='d-flex  loader'>
        <SquareLoader color = "orange"/>
    </div>
  )
}

export default Loader
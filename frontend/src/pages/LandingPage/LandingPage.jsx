import React,{useState, useEffect} from 'react';
import SideBar from '../../components/SideBar/SideBar'
import DisplayNotes from '../../components/DisplayNotes/DisplayNotes'
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../services/user.service'
import './LandingPage.css'
import { addNewNote, getAllNotes } from '../../store/slices/notesSlice';


const LandingPage = ({props}) => {
  const [details, setDetails] = useState('');
  const  state  = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllNotes())
  },[])

  

  return (
    <div className='landingpage-container'>
        <SideBar className = "landingpage-sidebar"/>
        <div className="wrapper">
        {props && props.map(item => (
            <>
            <DisplayNotes item = {item}/>
            <div className= "hz-l" />
            <br/>
            </>
        ))}
        </div> 
    </div>
  )
}

export default LandingPage
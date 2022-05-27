import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSvg from '../../assets/user.svg';
import {CgOptions} from 'react-icons/cg';
import {GrNotes} from 'react-icons/gr';
import {BsArchiveFill} from 'react-icons/bs';
import {IoTrashBin} from 'react-icons/io5';
import {BiSearchAlt} from 'react-icons/bi'
import './SideBar.css'
const SideBar = () => {
    const [content, setContent] = useState({username: 'Ranjeet Kumar'});
    return (
        <div className='sbar-container'>
            <div className="userinfo-container d-flex">
                <img src={UserSvg} alt="user" className='sbar-pfl'/>
                <span className = 'sbar-title'>{content.username}</span>
                <button><CgOptions/></button>
            </div>
            <div className="sbar-search">
                <input className="sbar-search-field" type="search" placeholder="Search" aria-label="Search"/>
                <BiSearchAlt className = 'sbar-search-ic' size ={20}/>
            </div>
            <div className="sbar-search-result"></div>
            <div className="notetypes-container d-flex flex-column">
                <div className="notes-container d-flex">
                    <GrNotes />
                    <span className='sbar-title'>My Notes</span>
                </div>
                <div className="notes-container d-flex">
                    <BsArchiveFill />
                    <span className='sbar-title'>Archived Notes</span>
                </div>
                <div className="notes-container d-flex">
                    <IoTrashBin />
                    <span className='sbar-title'>Trash Notes</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
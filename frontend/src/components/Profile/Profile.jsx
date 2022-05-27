import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import userService from '../../services/user.service';
import UserSvg from '../../assets/user.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDeleteOutline } from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai"
import './Profile.css'

const Profile = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        userService.getUserDetails().then(
            (response) => { setContent(response.data) },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);
    console.log(content)
    const {username, email} = content;
    const createdAt = new Date(content.createdAt);
    return (
        <div>
            {true &&
                <>
                    <div className="container">
                        <h3 className="my-pfl">My Profile</h3>
                        <button className="profile-close-btn"><AiFillCloseCircle size ={40}/></button>
                        <span className="pfl-pic-title fs-4 al">Profile Picture</span>
                        <div className="d-flex col pic-container">
                            <img src={UserSvg} alt="" className="picture rounded-circle" />
                            <div className="d-flex flex-column">
                                <button className="btn btn-primary ">Upload Photo</button>
                                <button className="btn btn-secondary"><MdDeleteOutline className="del-icon" /> Remove Photo</button>
                            </div>
                        </div>
                        <div className="inner-container d-flex flex-column justify-items-start">
                            <label className="field-title inline ">Username</label>
                            <input className="field-content w-50 border border-4" value ={username} disabled/>
                            <label className="field-title">Created at</label>
                            <input className="field-content w-50 border border-4" value ={createdAt.toString()} disabled/>
                            <label className="email-field-title">Registered Email</label>
                            <span className="email-container d-flex align-items-baseline">
                                <input className="field-content inline w-50 border border-4 p-1" value ={email} disabled />
                                <button className="btn btn-outline-secondary">Modify</button>
                            </span>
                            <label className="field-title">Contact No.</label>
                            <input className="field-content w-50 border border-4" value={'+9121231233'} disabled/>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Profile
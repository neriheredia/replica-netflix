import React, { useContext } from 'react';
import { logout } from '../../context/authContext/AuthActions';
import { AuthContext } from '../../context/authContext/AuthContext'
import "./topbar.css";

export default function Topbar() {
    const { dispatch } = useContext(AuthContext)
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Netflix Admin</span>
                </div>
                <div className="topRight">
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                    <div className="profile">
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())} >Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

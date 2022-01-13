import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
  
  export default function User() {

  const [currentUser, setUser] = useState()
  const {userId} = useParams()
  //console.log(userId)
  
  useEffect(()=>{
    const getNewUsers = async () => {
      try {
          const res = await axios.get("/users?new=true", {
              headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGRlZWY0ZDI0NWE4MWRlNGY3NDIyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjAyNTk2MiwiZXhwIjoxNjQyNDU3OTYyfQ.jqoTjpcoA2sl3VX2NHnsRV7PTqgXly433uerttcK48k"}
          })
          setUser(res.data.filter(e=>e._id===userId)[0])
          
      } catch (err) {
          console.log(err);
      }
  }
  getNewUsers()
  }, [])

  const updateUser = async () => {
    try {
        const res = await axios.put(`/users/${userId}`, {
            updatedUser:currentUser,
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGRlZWY0ZDI0NWE4MWRlNGY3NDIyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjA4NjgyOCwiZXhwIjoxNjQyNTE4ODI4fQ.KIl8Hhx68vRKeEgwpmJbj2e51gcrg0YR--8weoNAEm4"}
        })
        console.log('res', res)
    } catch (err) {
        console.log(err);
    }
  }
  
  console.log(currentUser)

  if(currentUser)
    {return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{currentUser.username}</span>
                <span className="userShowUserTitle">{currentUser.profession||'No career'}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{currentUser.username}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{currentUser.createdAt.split('T')[0].replaceAll('-','.')}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{currentUser.phoneNumber||'No phone number available'}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{currentUser.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{currentUser.location||'Undisclosed location '}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" onSubmit={(event) => {
                event.preventDefault()
                updateUser()
                }
            }>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={currentUser.username}
                    className="userUpdateInput"
                    onChange={(userEditor) => setUser({...currentUser, username: userEditor.target.value})}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder={currentUser.fullname||'Unknown'}
                    className="userUpdateInput"
                    onChange={(userEditor) => setUser({...currentUser, fullname: userEditor.target.value})}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={currentUser.email}
                    className="userUpdateInput"
                    onChange={(userEditor) => setUser({...currentUser, email: userEditor.target.value})}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Unknown"
                    className="userUpdateInput"
                    onChange={(userEditor) => setUser({...currentUser, phoneNumber: userEditor.target.value})}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Unknown | Unknown"
                    className="userUpdateInput"
                    onChange={(userEditor) => setUser({...currentUser, address: userEditor.target.value})}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button type='submit' className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );} else return null
  }
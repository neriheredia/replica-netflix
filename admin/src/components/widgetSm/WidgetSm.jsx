import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

export default function WidgetSm() {

    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDllZGExNzY5NzJjMWE5ODNlMWY5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTY3ODQzNSwiZXhwIjoxNjQyMTEwNDM1fQ.Ugk6TE71cDhrsoXlmW3AySdXqnumrZREcDYxlPOz504",
                    }
                })
                setNewUsers(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getNewUsers()
    }, [])


    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user =>
                    <li className="widgetSmListItem">
                        <img
                            src={user.profilePic || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">{user.email}</span>
                        </div>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.createdAt}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
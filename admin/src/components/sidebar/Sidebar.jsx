import "./sidebar.css";
import {
    LineStyle,
    PermIdentity,
    PlayArrow,
    AddToQueue,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Users Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to='/newUser' className="link" >
                            <li className="sidebarListItem">
                                <AddToQueue className="sidebarIcon" />
                                New User
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Movies Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/movies" className="link">
                            <li className="sidebarListItem">
                                <PlayArrow className="sidebarIcon" />
                                Movies
                            </li>
                        </Link>
                        <Link to='/newMovie' className="link" >
                            <li className="sidebarListItem">
                                <AddToQueue className="sidebarIcon" />
                                Add Movie
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Lists Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/lists" className="link">
                            <li className="sidebarListItem">
                                <PlayArrow className="sidebarIcon" />
                                Lists
                            </li>
                        </Link>
                        <Link to="/newlist" className="link">
                            <li className="sidebarListItem">
                                <AddToQueue className="sidebarIcon" />
                                New List
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
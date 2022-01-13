import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState} from "react";
import axios from 'axios'
import { useEffect } from "react";

export default function UserList() {

  const [newUsers, setNewUsers] = useState([])
  
  useEffect(()=>{
    const getNewUsers = async () => {
      try {
          const res = await axios.get("/users?new=true", {
              headers: {
                  token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}
          })
          setNewUsers(res.data)
      } catch (err) {
          console.log(err);
      }
  }
  getNewUsers()
  }, [])
  console.log(newUsers)

  if(newUsers){
    const handleDelete = (id) => {
      setNewUsers(newUsers.filter((item) => item._id !== id));
    };
    
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          );
        },
      },
      { field: "email", headerName: "Email", width: 200 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/${params.row._id}`}>
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          );
        },
      },
    ];

    return (
      <div className="userList">
        <DataGrid
          rows={newUsers}
          getRowId={(r)=>r._id}
          disableSelectionOnClick
          columns={columns}
          pageSize={newUsers.length}//Cantidad de usuarios 
          checkboxSelection
        />
      </div>
    );
  }
  
  //return null
  
}

//ignacio@gmail.com
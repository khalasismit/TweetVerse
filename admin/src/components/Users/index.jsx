import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { setUsers } from "../../redux/reducers";

const Users = () => {
    const USERS = useSelector(state => state.users)
    const POSTS = useSelector(state => state.posts)
    const [users, setUser] = useState([]);
    const dispatch = useDispatch()
    // const [id, setId] = useState("");
    const getRowId = (user) => {
        return user._id
    }
    const columns = [
        { field: 'createdAt', headerName: 'Created At', minWidth: 150, flex: 1 },
        { field: 'updatedAt', headerName: 'Updated At', minWidth: 150, flex: 1 },
        { field: '_id', headerName: 'Id', minWidth: 150, flex: 1 },
        { field: 'firstName', headerName: 'First Name', minWidth: 150, flex: 1 },
        { field: 'lastName', headerName: 'Last Name', minWidth: 150, flex: 1 },
        { field: 'email', headerName: 'Email', minWidth: 150, flex: 1 },
        { field: 'password', headerName: 'Password', minWidth: 150, flex: 1 },
        { field: 'bio', headerName: 'Bio', minWidth: 150, flex: 1 },
        { field: 'location', headerName: 'Location', minWidth: 150, flex: 1 },
        {
            field: '',
            headerName: '',
            flex: 1,
            renderCell: (params) => (
                <DeleteOutlineIcon onClick={()=>{handleDelete(params.row)}} />
            ),
        }
    ];
    const getUsers = async () => {
        const getUsersRes = await fetch("http://localhost:3001/users", {
            method: "GET",
        });
        const data = await getUsersRes.json();
        setUser(data);
    }
    const handleDelete = async (userToDelete) => {
        // console.log(id) 
        const id = userToDelete._id
        const deleteUser = await fetch(`http://localhost:3001/deleteuser/${id}`, {
            method: "POST",
        })
        const deluser = await deleteUser.json();
        console.log(deluser)
        if (deluser) {
            dispatch(
                setUsers({
                    users: deluser
                })
            )
        }
    }
    useEffect(() => {
        getUsers()
    }
        //  eslint-disable-next-line
        , [USERS, POSTS]);

    return <Box>
        <Typography sx={{ m: '1.5rem', fontSize: "1.5rem", fontWeight: "bold" }}>Users</Typography>

        <DataGrid sx={{ m: '1.5rem' }}
            checkboxSelection
            rowSelection
            getRowId={getRowId}
            rows={users}
            columns={columns}
        />
    </Box>
}
export default Users
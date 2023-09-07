import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import DeleteUser from "../DeleteUser";
import EditUser from "../EditUser";

const Users = () => {
    const USERS = useSelector((state) => state.users)
    const [users, setUser] = useState([]);
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
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (<Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <DeleteUser params={params}></DeleteUser>
                <EditUser params={params}></EditUser>
            </Box>
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
    useEffect(() => {
        getUsers();
    },[USERS]);

    return <Box>
        <Typography sx={{ m: '1.5rem', fontSize: "1.5rem", fontWeight: "bold" }}>Users</Typography>
        <DataGrid sx={{ m: '1.5rem' }}
            rowSelection
            getRowId={getRowId}
            rows={users}
            columns={columns}
        />
    </Box>
}
export default Users
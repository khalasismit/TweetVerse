import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import DeletePost from "../DeletePost";
import EditPost from "../EditPost";

const Posts = () => {
    // const USERS = useSelector(state => state.users)
    const POSTS = useSelector((state) => state.posts)
    const getRowId = (post) => {
        return post._id
    }
    const columns = [
        { field: 'createdAt', headerName: 'Created At', minWidth: 150, flex: 1 },
        { field: 'updatedAt', headerName: 'Updated At', minWidth: 150, flex: 1 },
        { field: '_id', headerName: 'PostId', minWidth: 150, flex: 1 },
        { field: 'userId', headerName: 'UserId', minWidth: 150, flex: 1 },
        { field: 'firstName', headerName: 'First Name', minWidth: 150, flex: 1 },
        { field: 'lastName', headerName: 'Last Name', minWidth: 150, flex: 1 },
        { field: 'post', headerName: 'Post', minWidth: 150, flex: 1 },
        { field: 'location', headerName: 'Location', minWidth: 150, flex: 1 },
        {
            field: '',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (<>
             <DeletePost params={params}></DeletePost>
             <EditPost params={params}></EditPost>
            </>
            ),
        }
    ];
    const [posts, setPost] = useState([]);
    const token = useSelector((state) => state.token);
    const getFeedPosts = async () => {
        const getFeedRes = await fetch("http://localhost:3001/posts", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await getFeedRes.json();
        setPost(data);
    }

    useEffect(() => {
        getFeedPosts();
    }//eslint-disable-next-line
    ,[POSTS]);
    
    return <Box>
        <Typography sx={{ m: '1.5rem', fontSize: "1.5rem", fontWeight: "bold" }}>Posts</Typography>
        <DataGrid sx={{ m: '1.5rem' }}
            rowSelection
            getRowId={getRowId}
            rows={posts}
            columns={columns}
        />
    </Box>
}
export default Posts
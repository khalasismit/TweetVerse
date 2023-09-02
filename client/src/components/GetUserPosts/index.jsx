import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "../Post";
import { useSelector } from "react-redux";

const GetUserPost = () => {
    const userId = useSelector((state)=>state.user._id)
    const token = useSelector((state)=>state.token)
    const [posts,setPosts] = useState([])   
    const POSTS = useSelector((state)=> state.posts) 
    const getUserPost = async ()=>{
        const getUserPostRes = await fetch(`http://localhost:3001/posts/${userId}/posts`,{
            method:"GET",
            headers:{Authorization :`Bearer ${token}`}
        })
        const data = await getUserPostRes.json();
        setPosts(data);
    }
    useEffect(()=>{
        getUserPost();
    },[POSTS])
    return <Box sx={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column-reverse"}}>
        {
            posts.map(({ _id, firstName, lastName, location, post }) => (
                <Post
                    deleteIcon
                    userId={userId}
                    key={_id}
                    postId={_id}
                    firstName={firstName}
                    lastName={lastName}
                    location={location}
                    post={post} 
                />
            ))
        }
    </Box>
}
export default GetUserPost;
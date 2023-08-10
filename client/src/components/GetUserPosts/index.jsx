import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "../Post";

const GetUserPost = ({id}) => {
    const [posts,setPosts] = useState([])    
    const getUserPost = async ()=>{
        const getUserPostRes = await fetch(`http://localhost:3001/posts/${id}/posts`,{
            method:"GET",
        })
        const data = await getUserPostRes.json();
        setPosts(data);
    }
    useEffect(()=>{
        getUserPost();
    }//eslint-disable-next-line
    ,[])
    return <Box sx={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column-reverse"}}>
        {
            posts.map(({ _id, firstName, lastName, location, post }) => (
                <Post
                    userId={id}
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
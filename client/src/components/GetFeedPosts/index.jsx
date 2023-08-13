import { useEffect, useState } from "react";
import Post from "../Post";
import { Box } from "@mui/material";

const GetFeedPosts = () => {
    const [posts, setPosts] = useState([]);
    const getFeedPosts = async () => {
        const getFeedRes = await fetch("http://localhost:3001/posts", {
            method: "GET",
        });
        const data = await getFeedRes.json();
        setPosts(data);
    }

    useEffect(() => {
        getFeedPosts();
        // setInterval(() => {
        //     getFeedPosts();
        // }, 3000);
    }
    , []);
    // eslint-disable-next-line
    // hh
    
    return <>
        <Box sx={{display:"flex",flexDirection:"column-reverse",justifyContent:"center",width:"100%",alignItems:"center"}}>
            {
                posts.map(({ _id, firstName, lastName, location, post }) => (
                    <Post
                        deleteIcon={false}
                        key={_id}
                        firstName={firstName}
                        lastName={lastName}
                        location={location}
                        post={post} />
                ))
            }
        </Box>
    </>
}
export default GetFeedPosts;
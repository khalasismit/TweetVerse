import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Post from "./Post";

const GetFeedPosts = () => {

    //
    const [posts, setPosts] = useState([]);
    const getFeedPosts = async () => {
        const getFeedRes = await fetch("http://localhost:3001/posts", {
            method: "GET",
        });
        const data = await getFeedRes.json();
        setPosts(data);
    }
    useEffect(() => {
        getFeedPosts()
    }// eslint-disable-next-line
        , []);
    return <>
        <Box width="100%" display="flex" flexDirection="column-reverse" justifyContent="center" alignItems="center" >
            {
                posts.map(({ firstName, lastName, location, post }) => (
                    <Post
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
import { useEffect, useState } from "react";
import Post from "../Post";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const GetFeedPosts = () => {
    const [posts, setPosts] = useState([]);
    const token = useSelector((state) => state.token);
    const POSTS = useSelector((state) => state.posts);
    const getFeedPosts = async () => {
        const getFeedRes = await fetch("http://localhost:3001/posts", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await getFeedRes.json();
        setPosts(data);
    }

    useEffect(() => {
        getFeedPosts()
    }
    // eslint-disable-next-line
    ,[POSTS]);
    return <Box sx={{ display: "flex", flexDirection: "column-reverse", justifyContent: "center", width: "100%", alignItems: "center" }}>
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
}
export default GetFeedPosts;
import { Avatar, Box, Button, Divider, Typography, useMediaQuery } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useEffect, useState } from "react";

import DeletePost from "../DeletePost";
// import { useSelector } from "react-redux";
const Post = ({ userId, firstName, lastName, location, post, postId, deleteIcon,likes }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    // const token = useSelector((state)=>state.token);
    const [isliked, setIsLiked] = useState(false);
    const [Post, setPost] = useState('');
    useEffect(() => {
        setPost(post);
    }, []); //eslint-disable-line   
    function changeLike() {
        // patchLike()
        setIsLiked(!isliked);
    }
//    const liked = Boolean(likes(loggedInUserId))
//    const likeCount = Object.keys(likes).length

//    const patchLike = async () => {
//     const res = await fetch(`htttp://localhost:3001/posts/${postId}/like`,{
//         method :"FETCH",
//         headers:{
//             Authorization:`Bearer ${token}`,
//             "Content-Type" : "application/json"
//         },
//         body:JSON.stringify({userId:loggedInUserId})
//     }
//     )
//     const updatedPost = await res.json();
//    }
    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} p="0.5rem 1rem" m="0.5rem" width={isNonMobile ? "40%" : "90%"} boxShadow="0px 0px 3px 0px black" borderRadius="0.5rem">
        <Box display="flex" justifyContent="space-between" width="100%">
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }} gap="1rem" p="0.5rem" m="0.2rem" >
                <Avatar></Avatar>
                <Box>
                    <Typography fontSize="1.1rem" fontWeight="bold">{lastName}.{firstName}</Typography>
                    <Typography>{location}</Typography>
                </Box>
            </Box>
            <DeletePost deleteIcon={deleteIcon} userId={userId} postId={postId} />
        </Box>
        <Divider orientation="horizontal" sx={{ m: "0rem 0.5rem" }}></Divider>
        <Box display="flex" flexDirection="column" justifyContent="space-between" width="100%">
            {Post.split('\n').map((line, index) => {
                return <Typography p="0.2rem" key={index}>
                    {line}
                    <br />
                </Typography>
            })}
            <Divider sx={{ m: "0.5rem 0rem" }}></Divider>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-between", boxShadow: "0px 0px 2px 0px black", borderRadius: "0.5rem", width: "100%" }} >
                <Button m="0 0.3rem" p="0.2rem" gap="0.2rem" sx={{ display: "flex", alignItems: "center", textTransform: "initial", borderRadius: "0.5rem", color: "black" }} onClick={changeLike}>
                    {isliked ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderOutlinedIcon />}
                    {/* {Liked} */}
                </Button>
                <Button m="0 0.3rem" p="0.2rem" gap="0.2rem" sx={{ display: "flex", alignItems: "center", textTransform: "initial", borderRadius: "0.5rem", color: "black" }}>
                    <CommentOutlinedIcon />
                    Comment
                </Button>
                <Button m="0 0.3rem" p="0.2rem" gap="0.2rem" sx={{ display: "flex", alignItems: "center", textTransform: "initial", borderRadius: "0.5rem", color: "black" }}>
                    <ShareOutlinedIcon />
                    share
                </Button>
            </Box>
        </Box>
    </Box>
}
export default Post;
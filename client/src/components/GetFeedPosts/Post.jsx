import { Avatar, Box, Button, Divider, Typography, useMediaQuery } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from "react";
const Post = ({ firstName, lastName, location, post }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [isliked, setIsLiked] = useState(false);
    function changeLike() {
        setIsLiked(!isliked);
    }
    return <Box display="flex" flexDirection="column" justifyContent="center" p="0.5rem 1rem" m="0.5rem" width={isNonMobile ? "40%" : "90%"} boxShadow="0px 0px 20px 0px black" borderRadius="1rem">
        <Box display="flex" gap="1rem" p="0.5rem" m="0.2rem" width="100%">
            <Avatar></Avatar>
            <Box>
                <Typography fontSize="1.1rem" fontWeight="bold">{lastName}.{firstName}</Typography>
                <Typography>{location}</Typography>
            </Box>
        </Box>
        <Divider orientation="horizontal" sx={{ m: "0rem 0.5rem" }}></Divider>
        <Box display="flex" flexDirection="column" justifyContent="space-between" width="100%">
            <Typography p="0.2rem" variant="p">{post}</Typography>
            <Divider sx={{ m: "0.5rem 0rem" }}></Divider>
            <Box display='flex' alignItems="center" justifyContent="space-between" boxShadow="0px 0px 4px 0px black" borderRadius="1rem" width="100%">
                <Button display="flex" alignItems="center" m="0 0.3rem" p="0.2rem" gap="0.2rem" sx={{textTransform:"initial",borderRadius:"1rem",color:"black"}}  onClick={changeLike}>
                    { isliked ? <FavoriteIcon sx={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>}
                    <Typography color="black">Like</Typography>
                </Button>
                <Button display="flex" alignItems="center" m="0 0.3rem" p="0.2rem" gap="0.2rem" sx={{textTransform:"initial",borderRadius:"1rem",color:"black" }}>
                    <CommentOutlinedIcon />
                    <Typography>Comment</Typography>
                </Button>
                <Button display="flex" alignItems="center" m="0 0.3rem" p="0.2rem" gap="0.2rem" sx={{textTransform:"initial",borderRadius:"1rem",color:"black" }}>
                    <ShareOutlinedIcon />
                    <Typography>Share</Typography>
                </Button>
            </Box>
        </Box>
    </Box>
}
export default Post
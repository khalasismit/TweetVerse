import { Avatar, Box, Typography,InputBase, useMediaQuery } from "@mui/material";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
// import { useSelector } from "react-redux";
// import { setPosts } from "../../state";
import { useState } from "react";

const MakePost = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const _id  = "64c78203194b05430b92edf9"
    // const { token } = useSelector((state)=> state.token)
    const [post,setPost] = useState("");

    const handleMakePost = async () => {
        const formdata = new FormData();
        formdata.append("userId",_id);
        formdata.append("description",post);
        console.log(JSON.stringify(formdata));

        const savedPostRes = await fetch("http://localhost:3001/posts", {
            method: "POST",
            // headers:{Authorization : `Bearer ${token}`},
            body: formdata,
        })
        const savedPost = await savedPostRes.json();
        console.log("saved post:", savedPost);
        setPost("");
    }

    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p="1rem" m="1rem 0.5rem" textAlign="center" width={isNonMobile ? "40%" : "90%"} boxShadow="0px 0px 10px 0px black" borderRadius="1rem">
        {/* First Row */}
        <Box display="flex" alignItems="center" gap="0.5rem" width="100%">
            <Avatar></Avatar>
            <InputBase fullWidth sx={{ border: "1px solid black", padding: "0.2rem 0.5rem", borderRadius: "0.5rem" }} placeholder="What's in your mind?" value={post} onChange={(e)=>{setPost(e.target.value)}}/>
        </Box>
        {/* <Divider sx={{ width:"90%",margin: "1rem 0.2rem", border: "1px solid black", }} ></Divider> */}
        {/* Second Row */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p="0.5rem" gap="0.5rem" width="100%" >
            <Box display="flex" alignItems="center" 
            sx={{
                "div & *":{fontSize:"1.5rem",p:"0.5rem",borderRadius:"0.9rem"},    
                "div & :hover": { background: "lightgray"}
            }}>
                <PhotoCameraOutlinedIcon />
                <ImageOutlinedIcon />
                <AttachFileOutlinedIcon />
                <LocationOnOutlinedIcon />
                <SentimentSatisfiedOutlinedIcon />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" gap="0.2rem" p="0.5rem" bgcolor="lightblue" borderRadius="1rem" sx={{ ":hover": { background: "lightgray", cursor: "pointer" } }} onClick={handleMakePost}>
                <SendOutlinedIcon />
                <Typography fontFamily="monospace">Tweet</Typography>
            </Box>

        </Box>
    </Box>
}
export default MakePost
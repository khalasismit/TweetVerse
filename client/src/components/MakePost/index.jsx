import { Avatar, Box, Button, CircularProgress, TextField, Typography, useMediaQuery } from "@mui/material";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from "react";

const MakePost = () => {
    function handleChange(event) {
        setDescription(event.target.value);
    }
    const [error, setError] = useState("");
    const [showProgress, setShowProgress] = useState(false);
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const _id = "64c7df92f5df807920c01479"
    
    
    // const { token } = useSelector((state)=> state.token)
    const [description, setDescription] = useState("");
    const handleMakePost = async (e) => {
        const data = { userId: _id, post: description }
        if (data.post === "") {
            setError("*Post can not be empty");
            setTimeout(() => {
                setError("");
            }, 2000);
            return
        } else {
            setShowProgress(true);
            setTimeout(() => {
                setShowProgress(false);
                e.preventDefault();
            }, 1000);
        }
        const savedPostRes = await fetch("http://localhost:3001/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const savedPost = await savedPostRes.json();
        if (savedPost) {
            setDescription("");
        }
    }

    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p="1rem" m="1rem 0.5rem" textAlign="center" width={isNonMobile ? "40%" : "90%"} boxShadow="0px 0px 10px 0px black" borderRadius="1rem">
        {/* First Row */}
        <Box display="flex" alignItems="center" gap="0.5rem" width="100%">
            <Avatar></Avatar>
            <TextField fullWidth sx={{ border: "1px solid black", m: "0", p: "0", borderRadius: "0.5rem" }} placeholder="What's in your mind?" value={description} onChange={handleChange} />
        </Box>
        {/* <Divider sx={{ width:"90%",margin: "1rem 0.2rem", border: "1px solid black", }} ></Divider> */}
        <Typography sx={{ color: "red", p: "0.2rem" }}>{error}</Typography>
        {/* Second Row */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p="0.5rem" gap="0.5rem" width="100%" >
            <Box display="flex" alignItems="center"
                sx={{
                    "div & *": { fontSize: "1.5rem", p: "0.5rem", borderRadius: "0.9rem" },
                    "div & :hover": { background: "lightgray" }
                }}>
                <PhotoCameraOutlinedIcon />
                <ImageOutlinedIcon />
                <AttachFileOutlinedIcon />
                <LocationOnOutlinedIcon />
                <SentimentSatisfiedOutlinedIcon />
            </Box>
            {   showProgress ? <CircularProgress /> : undefined }
            <Button type="submit" onClick={handleMakePost} display="flex" alignItems="center" justifyContent="center" gap="0.2rem" p="0.5rem" bgcolor="lightblue" borderRadius="1rem" sx={{ textTransform:"capitalize",borderRadius:"1rem",":hover": { background: "lightgray", cursor: "pointer" } }} >
                <SendOutlinedIcon />
                <Typography fontFamily="monospace">Tweet</Typography>
            </Button>
        </Box>
    </Box >
}
export default MakePost;    
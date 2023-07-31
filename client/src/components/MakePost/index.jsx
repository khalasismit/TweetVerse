import { Avatar, Box, InputBase, Typography, useMediaQuery } from "@mui/material"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
const MakePost = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const handleMakePost = async (value) =>{
        const savedPostRes = await fetch("",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(value),
        })
        const savedPost = await savedPostRes.json();
        console.log("saved post:", savedPost);
    }

    
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p="1rem" width={isNonMobile ? "30%" : "90%"}>
        {/* First Row */}
        <Box display="flex" alignItems="center" gap="1rem" width="100%">
            <Avatar></Avatar>
            <InputBase fullWidth sx={{ border: "1px solid black", padding: "0.2rem 0.5rem", borderRadius: "1rem" }} value=""/>
        </Box>
        {/* Second Row */}
        <Box display="flex" alignItems="center" p="0.5rem" gap="0.5rem" width="100%" sx={{"div & :hover" :{background:"lightgray",cursor:"pointer"}}} >
            <Box display="flex" alignItems="center" gap="0.2rem" p="0.5rem" border="1px solid black" borderRadius="1rem">
                <ImageOutlinedIcon />
                <Typography fontFamily="monospace">Image</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="0.2rem" p="0.5rem" border="1px solid black" borderRadius="1rem">
                < MicOutlinedIcon />
                <Typography fontFamily="monospace">Audio</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="0.2rem" p="0.5rem" border="1px solid black" borderRadius="1rem">
                <AttachFileOutlinedIcon />
                <Typography fontFamily="monospace">File</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="0.2rem" p="0.5rem" border="1px solid black" borderRadius="1rem" onClick={handleMakePost}>
                <SendOutlinedIcon />
                <Typography fontFamily="monospace">Tweet</Typography>
            </Box>

        </Box>
    </Box>
}
export default MakePost
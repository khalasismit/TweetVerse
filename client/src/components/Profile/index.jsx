import { Avatar, Box, Button, Typography} from "@mui/material";

const Profile = ({firstName,lastName,location,bio,email}) => {
    return <Box m="1rem" >
        <Box display="flex" alignItems="center" justifyContent="center" gap="1rem">
            <Avatar sx={{
                p: "3rem",
                m: "1.5rem 4rem"
            }} ></Avatar>
            <Box>
                <Box display="flex" alignItems="center" gap="1rem"  marginBottom="1rem"> 
                <Typography fontSize="1rem" fontWeight="Bold" textTransform={"capitalize"}>
                    {firstName} {lastName}
                </Typography>
                <Button sx={{color:"black",background:"lightgray", textTransform:"capitalize"}}>Edit profile</Button>  
                </Box>
                    <Typography sx={{ fontSize: "1rem"}}>{email}</Typography>
                    <Typography sx={{ fontSize: "1rem"}}>{bio}</Typography>
                    <Typography sx={{ fontSize: "1rem"}}>{location}</Typography>
            </Box>
        </Box>
    </Box>
}
export default Profile;
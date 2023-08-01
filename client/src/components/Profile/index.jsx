import { Avatar, Box, Button, Typography} from "@mui/material";
import { useEffect, useState } from "react";

const Profile = ({ userId }) => {

    const [user, setUser] = useState(null);
    //set usersData
    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}/`, {
            method: 'GET'
        });
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => { 
        getUser() 
    }
    // eslint-disable-next-line
    , [] );

    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        bio,
        email
    } = user;

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
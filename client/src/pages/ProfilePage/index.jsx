import { Box, useMediaQuery } from "@mui/material";
import Profile from "../../components/Profile";
import { useEffect, useState } from "react";
import GetUserPost from "../../components/GetUserPosts";
import Navigate from "../../components/Navigate";

const ProfilePage = ({ userId, plateformName }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [user, setUser] = useState([]);
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
        , []);

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
    console.log(userId)

    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
        <Navigate plateformName={plateformName} />
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
            <Profile firstName={firstName} lastName={lastName} location={location} bio={bio} email={email} />
            <GetUserPost id={userId} />
        </Box>
    </Box>
}

export default ProfilePage;
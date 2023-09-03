import { Box } from "@mui/material";
import Profile from "../../components/Profile";
import { useEffect, useState } from "react";
import GetUserPost from "../../components/GetUserPosts";
import Navigate from "../../components/Navigate";
import { useSelector } from "react-redux";
import EditProfile from "../../components/EditProfile";
const ProfilePage = ({ plateformName }) => {
    const [user, setUser] = useState([]);
    const USER =  useSelector((state) => state.user);
    const { _id } = USER;
    
    const token = useSelector((state) => state.token);
    //set usersData
    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${_id}/`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, [USER]);

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
    // console.log(userId)
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
        <Navigate plateformName={plateformName} />
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
            <Box  sx={{ m: "1rem 0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "0px 0px 3px 0px black", borderRadius: "0.5rem" }}>
                <Profile firstName={firstName} lastName={lastName} location={location} bio={bio} email={email} />
                <EditProfile firstName={firstName} lastName={lastName} location={location} bio={bio} />
            </Box>
            <GetUserPost />
        </Box>
    </Box>
}

export default ProfilePage;
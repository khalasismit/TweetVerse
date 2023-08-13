import { Box } from "@mui/material";
import Profile from "../../components/Profile";
import { useEffect, useState } from "react";
import GetUserPost from "../../components/GetUserPosts";
import Navigate from "../../components/Navigate";
import { GETUSER } from "../../state/auth";
const ProfilePage = ({ plateformName }) => {
    const [user, setUser] = useState([]);
    // const token = localStorage.getItem("token")
    // const token = useSelector((state)=> state.user)
    //set usersData
    const userId = GETUSER();
    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}/`, {
            method : 'GET',
            // headers : {token:`Bearer ${token}`}
        });
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser()
    }, []);// eslint-disable-line

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
            <Profile firstName={firstName} lastName={lastName} location={location} bio={bio} email={email} />
            <GetUserPost id={userId} />
        </Box>
    </Box>
}

export default ProfilePage;
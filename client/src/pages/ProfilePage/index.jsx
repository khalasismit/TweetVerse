import { Box } from "@mui/material";
import Profile from "../../components/Profile";
import { useEffect, useState } from "react";
import GetUserPost from "../../components/GetUserPosts";
import Navigate from "../../components/Navigate";

const ProfilePage = ({userId,plateformName}) => {
  const [user, setUser] = useState([]);
  //set usersData
  // const userId = "64c7df92f5df807920c01479";
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


  return <Box width="100%">
    <Navigate plateformName={plateformName}/>
    <Profile firstName={firstName} lastName={lastName} location={location} bio={bio} email={email} />
    <GetUserPost userId={userId}/>
  </Box>


}

export default ProfilePage;
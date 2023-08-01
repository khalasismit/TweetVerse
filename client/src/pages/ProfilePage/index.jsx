import { Box } from "@mui/material";
import Profile from "../../components/Profile";
import { useSelector } from "react-redux"
const ProfilePage = () => {
  const _id = useSelector((state) => state.user)
  return <Box>
    <Profile userId={_id} />
  </Box>
}

export default ProfilePage;
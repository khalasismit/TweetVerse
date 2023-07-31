import Navigate from "../../components/Navigate"
import { Box } from "@mui/material"
import Profile from "../../components/Profile"
import MakePost from "../../components/MakePost"
const HomePage = ({plateformName}) =>{
    return <Box>
        <Navigate plateformName={plateformName}/>
        <MakePost/>
        <Profile/>
    </Box>
}

export default HomePage
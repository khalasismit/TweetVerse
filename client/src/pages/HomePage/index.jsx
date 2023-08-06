import Navigate from "../../components/Navigate";
import MakePost from "../../components/MakePost";
import GetFeedPosts from "../../components/GetFeedPosts";
import { Box, Divider } from "@mui/material";
const HomePage = ({plateformName}) =>{
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
        <Navigate plateformName={plateformName}/>
        <MakePost/>
        <Divider variant="middle"></Divider>
       <GetFeedPosts/>
    </Box>
}

export default HomePage
import Navigate from "../../components/Navigate";
import MakePost from "../../components/MakePost";
import { Box } from "@mui/material";
const HomePage = ({plateformName}) =>{
    return <Box display="flex" flexDirection="column" alignItems="center" width="100%">
        <Navigate plateformName={plateformName}/>
        <MakePost/>
    </Box>
}

export default HomePage
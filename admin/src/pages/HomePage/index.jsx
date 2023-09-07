import { Box} from "@mui/material"
import Navigate from "../../components/Navigate"
import Users from "../../components/Users"
import Posts from "../../components/Posts"

const HomePage = ({ plateformName }) => {
    return <Box>
        <Navigate plateformName={plateformName}></Navigate>
        <Users></Users>
        <Posts></Posts>
    </Box>
}
export default HomePage
import { Box } from "@mui/material"
import Navigate from "../../components/Navigate"
import Users from "../../components/Users"

const HomePage = ({ plateformName }) => {
    return <Box>
        <Navigate plateformName={plateformName} ></Navigate>
        <Users></Users>
    </Box>
}
export default HomePage
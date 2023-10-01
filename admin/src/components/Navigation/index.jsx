import { Box, Typography } from "@mui/material";
import { Link} from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
import Logout from "../Logout";

const Navigation = ({ plateformName }) => {
    return <Box width="100%">
        <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="white" boxShadow="0px 0px 3px 0px black" padding="0rem 1.2rem" borderRadius="0.5rem">
            <Link style={{ textDecoration: "none", color: "black" }} to={"/admin"} >
                <Typography fontSize="2rem" fontFamily="monospace" fontWeight="bold">
                    {plateformName}
                </Typography>
            </Link>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                {/* <Link to={"/AdminHome"}>
                    <HomeIcon sx={{ color: "black" }} titleAccess='Home' />
                </Link> */}
                {/* <Link to={"/search"}>
                    <SearchIcon sx={{ color: "black" }} titleAccess='Search' />
                </Link> */}
                {/* <Link to={"/profile"}>
                    <PersonIcon sx={{ color: "black" }} titleAccess='Profile' />
                </Link> */}
                <Logout></Logout>
            </Box>
        </Box>
    </Box>
}

export default Navigation
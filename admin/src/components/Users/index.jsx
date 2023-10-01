import { Box,useMediaQuery } from "@mui/material"
// import { useEffect, useState } from "react";
// import { DataGrid } from '@mui/x-data-grid';
import UserDG from "../UserDG"
// import { useSelector } from "react-redux";
// import DeleteUser from "../DeleteUser";
// import EditUser from "../EditUser";
import Navigation from "../Navigation"
import SidebarMini from "../Sidebar";

const Users = ({ plateformName }) => {
    const NonMobile = useMediaQuery("(min-width:600px)")
    return <Box>
        <Navigation plateformName={plateformName} ></Navigation>
        <Box sx={{ display: "flex", alignItems: "start" }}>
            <SidebarMini></SidebarMini>
            <Box sx={{width:NonMobile?"90%":"80%"}}>
                <UserDG/>
            </Box>
        </Box>
    </Box>
}
export default Users
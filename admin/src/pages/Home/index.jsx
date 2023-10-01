import { Box, useMediaQuery } from "@mui/material"
import Navigation from "../../components/Navigation"
import TotalUser from "../../components/TotalUser"
import TotalPost from "../../components/TotalPost"
import SidebarMini from "../../components/Sidebar"
import UserDG from "../../components/UserDG"
import PostDG from "../../components/PostDG"

const HomePage = ({ plateformName }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return <Box>
        <Navigation plateformName={plateformName}></Navigation>
        <Box sx={{ display: "flex", alignItems: "start" }}>
            <SidebarMini></SidebarMini>
            <Box sx={{ width: isNonMobile ? "90%" : "80%", display: "column" }}>
                <Box
                    width={"100%"}
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        "& > div": {
                            flex: "1",
                            minWidth: "25%",
                            gridColumn: isNonMobile ? undefined : "span 4"
                        },
                    }} >
                    <TotalUser></TotalUser>
                    <TotalPost></TotalPost>
                </Box>
                {/* <Box sx={{maxWidth:isNonMobile?"90%":"80%"}}> */}
                    <UserDG></UserDG>
                    <PostDG></PostDG>
                {/* </Box> */}
            </Box>
        </Box>
    </Box>
}
export default HomePage
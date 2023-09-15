import { Box, useMediaQuery } from "@mui/material"
import Navigate from "../../components/Navigate"
// import Users from "../../components/Users"
// import Posts from "../../components/Posts"
import TotalUser from "../../components/TotalUser"
import TotalPost from "../../components/TotalPost"

const HomePage = ({ plateformName }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return <Box>
        <Navigate plateformName={plateformName}></Navigate>
        <Box
            width={"100%"}
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                "& > div": {
                    flex: "1",
                    minWidth:"25%",
                    gridColumn: isNonMobile ? undefined : "span 4"
                },
            }} >
            <TotalUser></TotalUser>
            <TotalPost></TotalPost>
        </Box>
        {/* <Users></Users> */}
        {/* <Posts></Posts> */}
    </Box>
}
export default HomePage
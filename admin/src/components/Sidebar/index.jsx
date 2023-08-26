import { Box, useMediaQuery } from "@mui/material"
const Sidebar = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return <Box width={isNonMobile ? '20%' : '10%'} bgcolor="darkgray">
        
    </Box>
}
export default Sidebar;
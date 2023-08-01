import { Avatar, Box, Typography } from "@mui/material"

const Navigate = ({ plateformName }) => {
    return <Box width="100%">
    <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="white" boxShadow="0px 0px 10px 0px black" padding="0rem 1.2rem" borderRadius="1rem">
        <Typography fontSize="2rem" fontFamily="monospace" fontWeight="bold">
            {plateformName}
        </Typography>
        <Avatar></Avatar>
        </Box>
    </Box>
}

export default Navigate
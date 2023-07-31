import { Avatar, Box, Typography } from "@mui/material"

const Navigate = ({ plateformName }) => {
    return <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="lightgray" padding="0rem 1.2rem" borderRadius="1rem">
        <Typography fontSize="2rem" fontFamily="monospace" fontWeight="bold">
            {plateformName}
        </Typography>
        <Avatar></Avatar>
    </Box>
}

export default Navigate
import { Box, Typography } from "@mui/material"
const SearchFeed = ({firstName,lastName}) =>{
    return <Box>
            <Typography>{firstName} {lastName}</Typography>
    </Box>
}
export default SearchFeed
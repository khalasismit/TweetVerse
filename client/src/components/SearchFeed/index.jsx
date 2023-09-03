import { Box, Typography, Avatar, useMediaQuery, Divider } from "@mui/material"
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
const SearchFeed = ({ firstName, lastName,bio }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} p="0.5rem 1rem" m="0.5rem" width={isNonMobile ? "40%" : "90%"} boxShadow="0px 0px 3px 0px black" borderRadius="0.5rem" >
        <Box display="flex" justifyContent="space-between" width="100%">
            <Box sx={{width:"100%", display: "flex", alignItems: "center", justifyContent: 'space-between' }} gap="1rem" p="0.5rem" m="0.2rem" >
                <Avatar></Avatar>
                <Box sx={{display:"flex",flexDirection:"column",width:"100%"}}>
                    <Typography fontSize="1.1rem" fontWeight="bold">{firstName} {lastName}</Typography>
                    <Divider orientation="horizontal" sx={{ m: "0rem 0.5rem" }}></Divider>
                    <Typography fontSize="0.8rem" fontWeight={"light"} >{bio}</Typography>
                </Box>
                <PersonAddOutlinedIcon />
            </Box>
        </Box>
    </Box>
}
export default SearchFeed
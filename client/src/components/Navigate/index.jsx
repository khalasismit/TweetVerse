import { Avatar, Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setLogout } from "../../redux/reducers"
const Navigate = ({ plateformName }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(setLogout())
        navigate("/")
    }
    return <Box width="100%">
        <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="white" boxShadow="0px 0px 10px 0px black" padding="0rem 1.2rem" borderRadius="1rem">
            <Link style={{ textDecoration: "none", color: "black" }} to={"/home"} >
                <Typography fontSize="2rem" fontFamily="monospace" fontWeight="bold">
                    {plateformName}
                </Typography>
            </Link>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <Button
                    onClick={handleLogout}
                    sx={{
                        textTransform:"initial",
                        border: "1px solid black",
                        borderRadius: "2rem",
                        backgroundColor: "lightgray",
                        color: "black",
                        "&:hover": { color: "black" },
                    }}>
                    <Typography fontFamily="monospace">
                        Logout
                    </Typography>

                </Button>
                <Link to={"/profile"}>
                    <Avatar></Avatar>
                </Link>
            </Box>
        </Box>
    </Box>
}

export default Navigate
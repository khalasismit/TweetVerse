import { Alert, Avatar, Box, Button, Snackbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../../redux/reducers";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
const Navigate = ({ plateformName }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        setSnackbar(true)
        setTimeout(() => {
            setSnackbar(false)
            dispatch(setLogout())
            navigate("/")
        }, 1500);
    }
    const [snackbar, setSnackbar] = useState(false)
    return <Box width="100%">
        <Snackbar
            open={snackbar}
            varient="filled"
            autoHideDuration={1500}
            anchorOrigin={{ vertical: 'bottom', horizontal: "left" }}
        ><Alert variant="filled" severity="success">Log out</Alert></Snackbar>
        <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="white" boxShadow="0px 0px 3px 0px black" padding="0rem 1.2rem" borderRadius="1rem">
            <Link style={{ textDecoration: "none", color: "black" }} to={"/home"} >
                <Typography fontSize="2rem" fontFamily="monospace" fontWeight="bold">
                    {plateformName}
                </Typography>
            </Link>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <Link to={"/search"}>
                    <SearchIcon />
                </Link>
                <Link to={"/home"}>
                    <HomeIcon />
                </Link>
                <Button
                    onClick={handleLogout}
                    sx={{
                        textTransform: "initial",
                        borderRadius: "0.5rem",
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
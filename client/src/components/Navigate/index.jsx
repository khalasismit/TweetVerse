import { Alert, Avatar, Box, Button, Snackbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setLogout } from "../../redux/reducers"
import { useState } from "react"
const Navigate = ({ plateformName }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(setLogout())
        setSnackbar(true)
        setTimeout(() => {
            setSnackbar(false)
        }, 3000);
        navigate("/")
    }
    const [snackbar,setSnackbar] = useState(false)
    return <Box width="100%">
        <Snackbar
            open={snackbar}
            varient="filled"
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        ><Alert variant="filled" severity="success">Log out </Alert></Snackbar>

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
                        textTransform: "initial",
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
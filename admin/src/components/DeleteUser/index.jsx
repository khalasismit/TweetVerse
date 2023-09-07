import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/reducers";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Alert, Box, Button, Dialog, Snackbar, Typography } from "@mui/material"
import { useState } from "react";

const DeleteUser = ({ params }) => {
    const [snackbar, setSnackbar] = useState(false)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = async (userToDelete) => {
        // console.log(id) 
        const id = userToDelete._id
        const deleteUser = await fetch(`http://localhost:3001/deleteuser/${id}`, {
            method: "POST",
        })
        const deluser = await deleteUser.json();
        console.log(deluser)
        if (deluser) {
            setSnackbar(true)
            setTimeout(() => {
                dispatch(
                    setUsers({
                        users: deluser
                    })
                )
                setSnackbar(false)
                handleClose()
            }, 1500);
        }
    }
    return <Box p={"1rem"} sx={{ ":hover": { background: "lightgray", borderRadius: "1rem" } }}>
        <Snackbar
            open={snackbar}
            varient="filled"
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
            <Alert variant="filled" severity="success">User Deleted Successfully.</Alert>
        </Snackbar>
        <DeleteOutlineIcon onClick={handleClickOpen} />
        <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "1rem" }}>
            <Typography textAlign="center" m="1rem" fontFamily="monospace" fontSize="1.2rem" fontWeight="bold">Are you sure? You want to delete this user.</Typography>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                gap="1rem">
                <Button
                    onClick={handleClose}
                    sx={{
                        // border: "1px solid black",
                        borderRadius: "0.5rem",
                        m: "1.5rem 0rem",
                        p: "0.5rem 5%",
                        backgroundColor: "lightgray",
                        color: "black",
                        "&:hover": { color: "black" },
                    }}
                >
                    <Typography fontFamily="monospace">
                        Cancel
                    </Typography>
                </Button>
                <Button
                    onClick={() => handleDelete(params.row)}
                    sx={{
                        // border: "1px solid black",
                        borderRadius: "0.5rem",
                        m: "1.5rem 0rem",
                        p: "0.5rem 5%",
                        backgroundColor: "lightgray",
                        color: "black",
                        "&:hover": { color: "black" },
                    }}
                >
                    <Typography fontFamily="monospace">
                        Delete
                    </Typography>
                </Button>
            </Box>
        </Dialog>
    </Box>
}
export default DeleteUser
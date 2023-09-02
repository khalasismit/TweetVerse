import { Alert, Box, Button, Dialog, Snackbar, Typography} from "@mui/material"
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setPosts } from "../../redux/reducers";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const DeletePost = ({ userId,postId,deleteIcon }) => {
    const [snackbar, setSnackbar] = useState(false)
    const token = useSelector((state) => state.token);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deletePost = async () => {

        const deletePostRes = await fetch(`http://localhost:3001/posts/${userId}/posts/${postId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        })
        const delPost = await deletePostRes.json();
        
        if (deletePostRes) {
            setSnackbar(true)
            setTimeout(() => {
                dispatch(setPosts({posts : delPost}))
                setSnackbar(false)
            }, 1500);
        }
    }

    return <Box p={"0rem 0rem 1rem 0rem"}>
                <Snackbar
            open={snackbar}
            varient="filled"
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
            <Alert variant="filled" severity="success">Post Deleted Successfully.</Alert>
        </Snackbar>

        <DeleteOutlineIcon sx={{ display: deleteIcon ? 'block' : 'none', p: "0.5rem", borderRadius: "1rem", ":hover": { bgcolor: "lightgray" } }} onClick={handleClickOpen} />
        <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "1rem" }}>
            <Typography textAlign="center" m="1rem" fontFamily="monospace" fontSize="1.2rem" fontWeight="bold">Are you sure? You want to delete this post.</Typography>
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
                    onClick={deletePost}
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
export default DeletePost
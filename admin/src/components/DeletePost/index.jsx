import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { setPosts } from "../../redux/reducers";
import { Alert, Box, Button, Dialog, Snackbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DeletePost = ({ params }) => {
    const [snackbar, setSnackbar] = useState(false)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const token = useSelector((state) => state.token);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = async (postToDelete) => {
        // console.log(id) 
        const id = postToDelete._id
        const userId = postToDelete.userId
        console.log(id, userId)
        const deletePost = await fetch(`http://localhost:3001/posts/${userId}/posts/${id}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        })
        const delpost = await deletePost.json();
        console.log(delpost)
        if (delpost) {
            setSnackbar(true)
            setTimeout(() => {
                dispatch(
                    setPosts({
                        posts: delpost
                    })
                )
                setSnackbar(false)
                handleClose()
            }, 1500);
        }
    }

    return <>
        <Snackbar
            // sx={{position:"fixed",bottom:"0"}}
            open={snackbar}
            varient="filled"
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
            <Alert variant="filled" severity="success">Post Deleted Successfully.</Alert>
        </Snackbar>
        <DeleteOutlineIcon onClick={handleClickOpen} />
        <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "1rem" }}>
            <Typography textAlign="center" m="1rem" fontFamily="monospace" fontSize="1.2rem" fontWeight="bold">Are you sure? You want to this post.</Typography>
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
    </>
}
export default DeletePost
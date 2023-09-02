import { Alert, Box, Divider, Snackbar, Typography, useMediaQuery } from "@mui/material"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/reducers";
import { useState } from "react";
const EditProfile = ({ firstName, lastName, bio, location }) => {
    const [snackbar, setSnackbar] = useState(false)
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const initialValues = {
        firstName, lastName, bio, location
    }
    const handleFormSubmit = async (values, onSubmitProps) => {
        let savedUserRes = await fetch(`http://localhost:3001/editUser/${user._id}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }
        )
        let savedUser = await savedUserRes.json();
        if (savedUser) {
            setSnackbar(true)
            setTimeout(() => {
                setSnackbar(false)
            }, 1500);
            dispatch(
                setLogin({
                    user: savedUser,
                    token: token,
                })
            );
            onSubmitProps.resetForm();
            handleClose();
        }
    }
    return <Box p={"0rem 0rem 1rem 0rem"}>
        <Snackbar
            open={snackbar}
            varient="filled"
            autoHideDuration={1500}
            anchorOrigin={{ vertical: 'bottom', horizontal: "left" }}
        ><Alert variant="filled" severity="success">Profile Updated Successfully.</Alert></Snackbar>
        
        <Button sx={{ color: "black", bgcolor: "lightgrey", width: "100%", ":hover": { bgcolor: "darkgray" } }} onClick={handleClickOpen} >
            <Typography sx={{ fontFamily: "monospace", textTransform: "initial" }}>Edit Profile</Typography>
        </Button>

        <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "1rem" }}>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    resetForm,
                }) => (
                    <form autoComplete="on" onSubmit={handleSubmit}>
                        <Typography textAlign="center" m="1rem" fontFamily="monospace" fontSize="1.7rem" fontWeight="bold">
                            Edit Profile
                        </Typography>
                        <Divider sx={{ margin: "0rem 0rem 0.5rem 0rem" }} />
                        <Box
                            p={"1rem"}
                            display="grid"
                            gap="15px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={
                                    Boolean(touched.firstName) && Boolean(errors.firstName)
                                }
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                name="location"
                                error={Boolean(touched.location) && Boolean(errors.location)}
                                helperText={touched.location && errors.location}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Bio"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.bio}
                                name="bio"
                                multiline
                                error={
                                    Boolean(touched.bio) && Boolean(errors.bio)
                                }
                                helperText={touched.bio && errors.bio}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
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
                                type="submit"
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
                                    Update
                                </Typography>
                            </Button>
                        </Box>
                    </form>
                )}</Formik>
        </Dialog>
    </Box>
}
export default EditProfile

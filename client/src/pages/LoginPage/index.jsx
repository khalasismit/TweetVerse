import { Box, Typography } from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () => {
    const plateformName = "TweetVerse"
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    >
      <Box
        width="100%"
        backgroundColor="lightgray"
        borderRadius="1rem"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontFamily="monospace" fontSize="2rem" color="Black">
            {plateformName}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Typography width="100%" p="1rem" textAlign="center" fontWeight="500" fontFamily="monospace" fontSize="1.2rem" marginBottom="1.2rem">
          Welcome to {plateformName}, the Social Media Application!
        </Typography>
        <Form/>
      </Box>
    </Box>
  );
};

export default LoginPage;
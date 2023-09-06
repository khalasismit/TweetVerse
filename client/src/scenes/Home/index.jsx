import React, { Suspense } from "react";
import Navigate from "../../components/Navigate";
import MakePost from "../../components/MakePost";
import { Box, Divider } from "@mui/material";

const HomePage = ({ plateformName }) => {
    const GetFeedPosts = React.lazy(() => import('../../components/GetFeedPosts'));
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
        <Navigate plateformName={plateformName} />
        <MakePost />
        <Divider variant="middle"></Divider>
        <Suspense>
            <GetFeedPosts />
        </Suspense>
    </Box>
}

export default HomePage
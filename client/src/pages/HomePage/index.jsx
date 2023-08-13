import React, { Suspense } from "react";
import Navigate from "../../components/Navigate";
import MakePost from "../../components/MakePost";

// import GetFeedPosts from "../../components/GetFeedPosts";
import { Box, Divider } from "@mui/material";
const HomePage = ({ plateformName, userId }) => {
    const GetFeedPosts = React.lazy(() => import('../../components/GetFeedPosts'));
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" >
        <Navigate plateformName={plateformName} />
        <MakePost userId={userId} />
        <Divider variant="middle"></Divider>
        <Suspense>
            <GetFeedPosts />
        </Suspense>

    </Box>
}

export default HomePage
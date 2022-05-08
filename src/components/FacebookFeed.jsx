import React from 'react';
import {Box} from "@mui/material";
import FacebookPost from "./FacebookPost";

function FacebookFeed(props) {
    return (
        <Box flex={4} p={{xs: 0, md: 2}}>
            <FacebookPost/>
            <FacebookPost/>
            <FacebookPost/>
        </Box>

    );
}

export default FacebookFeed;
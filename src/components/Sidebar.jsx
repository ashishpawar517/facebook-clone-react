import React from 'react';
import {Box} from "@mui/material";

function Sidebar(props) {
    return (
        <Box bgcolor="red"
             flex={1}
             p={2}
             sx={{display: {xs: "none", sm: "block"}}}
        >
            Sidebar
        </Box>
    );
}

export default Sidebar;
import FacebookSideBar from "./components/FacebookSideBar";
import FacebookFeed from "./components/FacebookFeed";
import RightBar from "./components/Rightbar";
import {Box, Stack} from "@mui/material";
import FacebookNavBar from "./components/FacebookNavBar";

function App() {
    return (
        <Box>
            <FacebookNavBar/>
            <Stack direction="row" spacing={2} justifyContent='space-between'>
                <FacebookSideBar/>
                <FacebookFeed/>
                <RightBar/>
            </Stack>
        </Box>
    );
}

export default App;

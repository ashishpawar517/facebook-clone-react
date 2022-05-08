import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/Rightbar";
import {Box, Stack} from "@mui/material";
import FacebookNavBar from "./components/FacebookNavBar";

function App() {
    return (
        <Box>
            <FacebookNavBar/>
            <Stack direction="row" spacing={2} justifyContent='space-between'>
                <Sidebar/>
                <Feed/>
                <RightBar/>
            </Stack>
        </Box>
    );
}

export default App;

import FacebookSideBar from "./components/FacebookSideBar";
import FacebookFeed from "./components/FacebookFeed";
import RightBar from "./components/Rightbar";
import {Box, Stack} from "@mui/material";
import FacebookNavBar from "./components/FacebookNavBar";
import AddPostButton from "./components/AddPostButton";

function App() {
    return (
        <Box>
            <FacebookNavBar/>
            <Stack direction="row" spacing={2} justifyContent='space-between'>
                <FacebookSideBar/>
                <FacebookFeed/>
                <RightBar/>
            </Stack>
            <AddPostButton/>
        </Box>
    );
}

export default App;

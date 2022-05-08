import {useState} from "react";
import FacebookSideBar from "./components/FacebookSideBar";
import FacebookFeed from "./components/FacebookFeed";
import RightBar from "./components/Rightbar";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import FacebookNavBar from "./components/FacebookNavBar";
import AddPostButton from "./components/AddPostButton";


function App() {
    const [mode, setMode] = useState("dark")
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>

            <Box bgcolor={"background.default"} color={"text.primary"}>
                <FacebookNavBar/>
                <Stack direction="row" spacing={2} justifyContent='space-between'>
                    <FacebookSideBar mode={mode} setMode={setMode}/>
                    <FacebookFeed/>
                    <RightBar/>
                </Stack>
                <AddPostButton/>
            </Box>
        </ThemeProvider>);
}

export default App;

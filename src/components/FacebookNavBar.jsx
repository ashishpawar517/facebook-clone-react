import React, {useState} from 'react';
import {AppBar, Avatar, Box, InputBase, Menu,MenuItem, Toolbar, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {Facebook,  Notifications} from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function FacebookNavBar(props) {

    const [open, setOpen] = useState(false);

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({theme}) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))

    const Icons = styled(Box)(({theme}) => ({
        // backgroundColor: "white",
        display: 'none',
        gap: "20px",
        alignItems: 'center',
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        }
    }))
    const UserBox = styled(Box)(({theme}) => ({
        display: 'flex',
        gap: "10px",
        alignItems: 'center',
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    }))
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography varient='h6' sx={{display: {xs: "none", sm: "block"}}}>FAKEBOOK</Typography>
                <Facebook sx={{display: {xs: "block", sm: "none"}}}/>
                <Search><InputBase placeholder="Search.."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={() => setOpen(true)}>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography varient="span">Tourist</Typography>
                </UserBox>

            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default FacebookNavBar;
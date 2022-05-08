import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import styled from "@emotion/styled";


function AddPostButton(props) {
    const [open, setOpen] = useState(false);
    const UserBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: "10px",
        marginBottom: "20px"
    }))
    return (
        <>
            <Tooltip title={"Add"} onClick={() => setOpen(true)} sx={{
                position: 'fixed', bottom: 20,
                left: {
                    xs: "calc(50% - 25px)",
                    md: 30
                }
            }}>
                <Fab color="primary">
                    <Add/>
                </Fab>
            </Tooltip>
            <Modal sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
                   open={open}
                   onClose={() => setOpen(false)}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280}
                     bgcolor={"background.default"}
                     color={"text.primary"}
                     p={3}
                     borderRadius={5}

                >
                    <Typography variant="h6" color={'gray'} textAlign={'center'}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            sx={{width: 30, height: 30}}
                        />
                        <Typography fontWeight={500} variant="span">
                            Tourist
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary"/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                        <PersonAdd color="error"/>
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}>
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    );
}

export default AddPostButton;
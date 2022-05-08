import React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";

function FacebookPost({avtar_text,title,descr,date,link}) {
    return (<Card sx={{m:5}}>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: "blue"}} aria-label="recipe">
                    {avtar_text}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title={title}
            subheader={date}
        />
        <CardMedia
            component="img"
            height="20%"
            image={link}
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {descr}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: "red"}}/>}/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
        </CardActions>
    </Card>);
}

export default FacebookPost;
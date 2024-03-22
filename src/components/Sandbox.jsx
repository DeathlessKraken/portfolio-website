import { useTheme } from "@emotion/react";
import { Drawer, List, ListItem, ListItemIcon, ListItemButton, Paper, ListItemAvatar, makeStyles } from "@mui/material";
import React from "react";

const drawerWidth = 50;

function randomColor() {
    const red = Math.floor((Math.random() * 256))
    const green = Math.floor((Math.random() * 256))
    const blue = Math.floor((Math.random() * 256))

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

export default function Sandbox() {
    const theme = useTheme();

    const drawerStyle = makeStyles((theme) => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            position: "relative",
            transition: "width 0.3s"
          },
          drawerPaper: {
            width: open ? drawerWidth : 0,
            position: "absolute"
          }
    }));

    const classes = drawerStyle();

    return (
        <Paper elevation={5} sx={{ backgroundColor: '#cccccc', height: '500px'}}>
            <Drawer
                variant="persistent"
                anchor="left"
                open={true}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                sx={{
                    position: 'relative',
                    width: drawerWidth,
                    height: '100%',
                    backgroundColor: 'rgb(40, 40, 45)'
                }}
            >
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                          <ListItemButton>
                            <ListItemAvatar sx={{ bgcolor: randomColor() }}>P</ListItemAvatar>
                          </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Paper>
    );
}
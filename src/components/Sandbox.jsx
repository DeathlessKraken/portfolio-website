import { Tab, Tabs, Paper, Avatar, Box } from "@mui/material";
import React, { useState } from "react";

function randomColor() {
    const red = Math.floor((Math.random() * 256))
    const green = Math.floor((Math.random() * 256))
    const blue = Math.floor((Math.random() * 256))

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

export default function Sandbox() {
    const [currentTab, setCurrentTab] = useState(false);

    function handleChange(event, tabIndex) {
        setCurrentTab(tabIndex);
    }

    return (
        <Paper elevation={5} sx={{ backgroundColor: '#cccccc', height: '500px' }}>
            <Box sx={{ width: 'fit-content', height: '100%', backgroundColor: 'rgb(40, 40, 45)', borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} orientation='vertical' onChange={handleChange} aria-label="basic tabs example">
                    <Tab value={0} icon={<Avatar sx={{ backgroundColor: randomColor() }}>P</Avatar>} />
                    <Tab value={1} icon={<Avatar sx={{ backgroundColor: randomColor() }}>P</Avatar>} />
                    <Tab value={2} icon={<Avatar sx={{ backgroundColor: randomColor() }}>P</Avatar>} />
                </Tabs>
            </Box>
        </Paper>
    );
}
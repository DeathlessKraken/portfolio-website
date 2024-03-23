import React, { useState } from "react";
import { Tab, Tabs, Paper, Avatar, Box } from "@mui/material";
import TabPanel from './TabPanel';
import PalindromeProject from "./PalindromeProject";
import styles from './sandbox.module.css';

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
        <Paper elevation={5} sx={{ width: '100%' }}>
            <Box className={styles.sandbox}>
                <Box className={styles.sandboxDrawer}>
                    <Tabs value={currentTab} orientation='vertical' onChange={handleChange}>
                        <Tab value={0} icon={<Avatar sx={{ backgroundColor: randomColor() }}>P</Avatar>} />
                        <Tab value={1} icon={<Avatar sx={{ backgroundColor: randomColor() }}>P</Avatar>} />
                        <Tab value={2} icon={<Avatar sx={{ backgroundColor: randomColor() }}>P</Avatar>} />
                    </Tabs>
                </Box>
                <Box className={styles.sandboxArea}>
                    <TabPanel value={currentTab} index={0}>
                        <PalindromeProject />
                    </TabPanel>
                </Box>
            </Box>
        </Paper>
    );
}
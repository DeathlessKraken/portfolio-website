import React, { useState } from "react";
import { Tab, Tabs, Paper, Avatar, Box } from "@mui/material";
import TabPanel from './TabPanel';
import PalindromeProject from "./PalindromeProject";
import NumeralProject from "./project/NumeralProject";
import styles from './sandbox.module.css';
import CipherProject from "./project/CipherProject";
import Filter1Icon from '@mui/icons-material/Filter1';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import KeyboardIcon from '@mui/icons-material/Keyboard';

export default function Sandbox() {
    const [currentTab, setCurrentTab] = useState(0);

    function handleChange(event, tabIndex) {
        setCurrentTab(tabIndex);
    }

    return (
        <Paper elevation={5} sx={{ width: '100%' }}>
            <Box className={styles.sandbox}>
                <Box className={styles.sandboxDrawer} sx={{ color: 'blue.main' }}>
                    <Tabs value={currentTab} orientation='vertical' onChange={handleChange} textColor="inherit">
                        <Tab value={0} icon={<AllInclusiveIcon />} />
                        <Tab value={1} icon={<Filter1Icon />} />
                        <Tab value={2} icon={<KeyboardIcon />} />
                    </Tabs>
                </Box>
                <Box className={styles.sandboxArea}>
                    <TabPanel value={currentTab} index={0}>
                        <PalindromeProject />
                    </TabPanel>
                    <TabPanel value={currentTab} index={1}>
                        <NumeralProject />
                    </TabPanel>
                    <TabPanel value={currentTab} index={2}>
                        <CipherProject />
                    </TabPanel>
                </Box>
            </Box>
        </Paper>
    );
}
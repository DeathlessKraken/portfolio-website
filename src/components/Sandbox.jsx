import React, { useState } from "react";
import { Tab, Tabs, Paper, Box, MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import TabPanel from './TabPanel';
import PalindromeProject from "./PalindromeProject";
import NumeralProject from "./project/NumeralProject";
import styles from './sandbox.module.css';
import CipherProject from "./project/CipherProject";
import Filter1Icon from '@mui/icons-material/Filter1';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import KeyboardIcon from '@mui/icons-material/Keyboard';

export default function Sandbox(props) {
    const [currentTab, setCurrentTab] = useState(0);

    function handleChange(event, tabIndex) {
        if(typeof(tabIndex) === 'number') {
            setCurrentTab(tabIndex);
        } else {
            setCurrentTab(event.target.value);
        }
    }

    return (
        <Paper elevation={5} className={styles.sandboxPaper}>
            <Box className={styles.sandbox} flexDirection={props.isDesktop ? 'row' : 'column'}>
                <Box className={styles.sandboxDrawer} sx={{ color: 'blue.main' }} hidden={!props.isDesktop}>
                    <Tabs value={currentTab} orientation='vertical' onChange={handleChange} textColor="inherit">
                        <Tab value={0} icon={<AllInclusiveIcon />} />
                        <Tab value={1} icon={<Filter1Icon />} />
                        <Tab value={2} icon={<KeyboardIcon />} />
                    </Tabs>
                </Box>
                <Box className={styles.sandboxSelect} hidden={props.isDesktop}>
                    <FormControl 
                        fullWidth 
                        focused
                        variant="filled"
                    >
                        <InputLabel 
                          id="project-demo-select"  
                        >
                            Demo
                        </InputLabel>
                        <Select
                          labelId="project-demo-select"
                          id="demo-select"
                          value={currentTab}
                          label="Project"
                          onChange={handleChange}
                          MenuProps={{
                              MenuListProps: {
                                  sx: {
                                      bgcolor: '#cccccc',
                                  }
                              }
                          }}
                        >
                          <MenuItem value={0} sx={{color:'#000'}}>Palindromes</MenuItem>
                          <MenuItem value={1} sx={{color:'#000'}}>Roman Numeral Conversion</MenuItem>
                          <MenuItem value={2} sx={{color:'#000'}}>ROT13 Transcoder</MenuItem>
                        </Select>
                    </FormControl>
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
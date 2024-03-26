import React, { useState } from "react";
import PalindromeProject from "./demos/PalindromeProject";
import NumeralProject from "./demos/NumeralProject";
import CipherProject from "./demos/CipherProject";
import styles from './sandbox.module.css';

export default function Sandbox() {
    const [tab, setTab] = useState(0);
    const colors = ['red', 'blue', 'green'];

    function handleClick(event) {
        setTab(event.target.value);
    }

    return (
        <div className={styles.sandbox}>
            <h2>Sandbox</h2>
            <p>A couple of things to mess around with!</p>
            <div className={styles.sandboxTabs}>
                <button type="button" value={0} onClick={handleClick}>Roman Numerals</button>
                <button type="button" value={1} onClick={handleClick}>Palindromes</button>
                <button type="button" value={2} onClick={handleClick}>ROT13 Cipher</button>
            </div>
            <div className={styles.sandboxArea} style={{backgroundColor: colors[tab]}}>
            </div>
        </div>
    );
}

/*function Sandbox_odl(props) {
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
}*/
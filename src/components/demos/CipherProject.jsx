import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';
import styles from './cipherproject.module.css'

function rot13(str) {
    const reg = /(?!_)\w/i;
    const decoded = "abcdefghijklmnopqrstuvwxyz";
    const encoded = "nopqrstuvwxyzabcdefghijklm";
    const result = [];

    //Go through all letters in the input string
    str.split('').map((elem) => {

      //If the letter I'm looking at is alphanumeric...
      if(reg.test(elem)) {

        //...return the character from the opposite key, at the same index (case-sensitive)
        if(elem.toUpperCase() === elem){
            const index = encoded.toUpperCase().indexOf(elem);
            result.push(decoded.toUpperCase().charAt(index));
        } else {
            const index = encoded.indexOf(elem);
            result.push(decoded.charAt(index));
        }
      
      //Otherwise, it must be punctuation or whitespace.
      } else {
        result.push(elem);
      }
    });
    
    return result.join('');
}

function GoodResult(...values) {
    return (
        <Box className={styles.goodResult}>
            <Typography variant='h6' className={styles.good}>
                {values[0]}
            </Typography>
            <ArrowDownwardIcon />
            <Typography variant='h6' className={styles.good}>
                {values[1]}
            </Typography>
        </Box>
    );
}

function NeutralResult() {
    return (
        <Box className={styles.neutralResult}>
            <EditIcon className={styles.neutralIcon}/>
            <Typography variant='h6' className={styles.neutral}>
                Enter some text!
            </Typography>
        </Box>
    );
}

export default function CipherProject() {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function showResult(value) {
        const result = rot13(value);

        if(value === '') {
            return NeutralResult();
        } else {
            return GoodResult(value, result);
        }
    }

    return (
        <>
            <Typography variant='h3' color='#000'>
                ROT13 Cipher Transcoder
            </Typography>

            <TextField 
                id='cipher-input' 
                label='ROT13 Cipher' 
                variant='filled' 
                color='blue'
                fullWidth 
                multiline
                minRows={10}
                value={inputText}
                onChange={handleChange}
                focused
            />

            { showResult(inputText) }
        </>
    )
}
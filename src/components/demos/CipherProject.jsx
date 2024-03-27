import React, { useState } from 'react';
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
        <div className={styles.goodResult}>
            <p className={styles.good}>
                {values[0]}
            </p>
            <i class="fa-solid fa-arrow-down"></i>
            <p className={styles.good}>
                {values[1]}
            </p>
        </div>
    );
}

function NeutralResult() {
    return (
        <div className={styles.neutralResult}>
            <i className="fa-solid fa-xmark"></i>
            <p className={styles.neutral}>
                Enter some text!
            </p>
        </div>
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
            <h3>
                ROT13 Cipher Transcoder
            </h3>
            <input 
                type="text" 
                value={inputText}
                onChange={handleChange}
            />
            { showResult(inputText) }
        </>
    )
}

/*
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
            /> */
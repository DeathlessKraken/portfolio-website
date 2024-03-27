import React, { useState } from 'react';
import styles from './numeralproject.module.css'

function convertToRoman(num) {

    if(
        typeof(num) === 'number' 
        || num > 3999
        || num < 0 ) 
    { 
            return ''; 
    }

    //Create a table defining the numeral values.
    const Roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    const result = [];
    
    //Start by going through the lookup table.
    for(const numeral in Roman) {
        
        //This multiplier indicates the amount of each numeral to push to the result.
        //If the multiplier is at least one, it properly represents part of the number.
        const multiplier = Math.floor(num / Roman[numeral]);
        if(multiplier > 0) {
          for(let i = 0; i < multiplier; i++) {
            result.push(numeral);
          }
          num %= Roman[numeral];
        }
    }
  
    return result.join('');
}

function GoodResult(...values) {
    return (
        <div className={styles.result}>
            <p className={styles.good}>
                { values[0] } equals { values[1] }
            </p>
        </div>
    );
}

function NeutralResult() {
    return (
        <div className={styles.result}>
            <i className="fa-solid fa-i-cursor"></i>
            <p className={styles.neutral}>
                Enter a number!
            </p>
        </div>
    );
}

function BadResult() {
    return (
        <div className={styles.result}>
            <i className="fa-solid fa-xmark"></i>
            <p className={styles.bad}>
                Out of bounds!
            </p>
        </div>
    );
}

export default function NumeralProject(props) {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function showResult(value) {
        const result = convertToRoman(value);

        if(value === '') {
            return NeutralResult();
        } else if(value < 1 || value > 3999) {
            return BadResult();
        } else {
            return GoodResult(value, result);
        }
    }

    return (
        <>
            <h3>
                Roman Numeral Converter
            </h3>
            <input 
                type="number" 
                value={inputText}
                onChange={handleChange}
            />
            { showResult(inputText) }
        </>
    )
}

/*<TextField 
                id='numeral-input' 
                label='Roman Numeral' 
                variant='filled' 
                color='blue'
                type='number'
                fullWidth 
                value={inputText}
                onChange={handleChange}
                focused
                helperText='1-3999'
                FormHelperTextProps={{ sx: {color: '#000'}}}
            />*/
import React, { useState } from "react";
import styles from './leavenote.module.css';

export default function Sandbox() {
    const [input, setInput] = useState({
        name: '', 
        email: '',
        phone: '',
        note: ''
    });

    function handleChange(event) {
        setInput(prevInput => {
            return ({
                ...prevInput,
                [event.target.id]: event.target.value,
            });
        });
    }

    return (
        <div className={styles.leaveNote}>
            <div className={styles.leaveNoteHeader}>
                <h2>Reach out to me!</h2>
                <p>If you would like leave me a note, have something to say,
                     <sup className='superText'>or want to offer me a job</sup> please do so!</p>
            </div>

            <div className={styles.noteInputs}>
                <div className={styles.smallInputContainer}>
                    <div className={styles.smallInput}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <p>*</p>
                        </div>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            required
                            value={input.name}
                            onChange={handleChange}
                            maxLength={31}
                            size={20}
                            className={styles.textArea}
                            autoComplete="off"
                        />
                    </div>
                    <div className={styles.smallInput}>
                        <div>
                            <label htmlFor="email">Contact E-mail: </label>
                            <p>*</p>
                        </div>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            required
                            value={input.email}
                            onChange={handleChange}
                            maxLength={31}
                            size={20}
                            className={styles.textArea}
                            autoComplete="off"
                        />
                    </div>
                    <div className={styles.smallInput}>
                        <div>
                            <label htmlFor="phone">Phone Number: </label>
                            <p></p>
                        </div>
                        <input 
                            type="tel" 
                            name="phone"
                            id="phone"
                            value={input.phone}
                            onChange={handleChange}
                            maxLength={20}
                            size={20}
                            className={styles.textArea}
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className={styles.largeInputContainer}>
                    <div>
                        <label htmlFor="note">Note: </label>
                        <p>*</p>
                    </div>
                    <textarea 
                        name="note"
                        id="note"
                        required
                        value={input.note}
                        onChange={handleChange}
                        placeholder="Leave a message..."
                        maxLength={999}
                        rows={7}
                        cols={60}
                        className={styles.textArea}
                    />
                </div>
            </div>
            <button className={styles.sendButton} type="submit" title="Send" name="Send">
                <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
    );
}
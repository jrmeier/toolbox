import styles from '../../styles/Tool.module.css'

import { useState } from "react"

export default function DateTimeMachine() {
    const [input, setInput] = useState('');
    const [isoString, setIsoString] = useState();
    const [epoch, setEpoch] = useState();
    const [epochS, setEpochS] = useState();
    const [inputError, setInputError] = useState('')

    const handleChange = (value) => {
        // try to parse the input
        setInput(value);
        try{
            const date = new Date(value); 
            setIsoString(date.toISOString());
            setEpoch(date.getTime());
            setEpochS(date.getTime() / 1000);
            setInputError('');
            return
        }
        catch(e){
            console.log(e)
            console.log("not a date for javascript")
        }

        
        try{

            const date = new Date(value * 1000); 
            setIsoString(date.toISOString());
            setEpoch(date.getTime());
            setEpochS(date.getTime() / 1000);
            setInputError()
            return
        } catch(e){
            console.log(e)
        }

    // nothing worked, so set the input to the error message
    setInputError('Date not recognized');

    }

    return (
        <div className={styles.box}>
            <h1>Date Time Machine</h1>
            <label>Paste your date string or epoch</label>
            <label className={styles.inputError}>{inputError}</label>
            <input type="text" name="input" value={input} onChange={(e) => handleChange(e.target.value)} /><br />

            <h3>Output</h3>
            Epoch (s): {epochS}<br />
            Epoch (ms): {epoch}<br />
            ISO: {isoString}<br />
        </div>

    )
}

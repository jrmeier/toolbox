import styles from '../../styles/Tool.module.css'

import { useEffect, useState } from "react"
export const generateRandomString = (
  length = 20,
  useNumbers = true,
  useSymbols = true,
  useUpperCase = true,
  useLowerCase = true
) => {
  const chars = [
    ...(useNumbers ? '0123456789' : ''),
    ...(useSymbols ? '!@#$%^&*()_+' : ''),
    ...(useLowerCase? 'abcdefghijklmnopqrstuvwxyz' : ''),
    ...(useUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''),

  ]
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  console.log(result)
  return result
}


export default function RandomStringGenerator() {
  const [generatedString,setGeneratedString] = useState('');
  const [useNumbers,setUseNumbers] = useState(true);
  const [useSymbols,setUseSymbols] = useState(true);
  const [useUpperCase,setUseUpperCase] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [length, setLength] = useState(20);

  if(parseInt(length) > 1000) {
    setLength(1000)
  }

  useEffect(() =>{
    setGeneratedString(generateRandomString(length,useNumbers,useSymbols,useUpperCase,useLowerCase))
  },[length,useNumbers,useSymbols,useUpperCase,useLowerCase])

  return (
    <div className={styles.box}>
      <h1>Random String Generator</h1>
      <div>length:<input type="number" name="length" value={length} onChange={(e) =>setLength(e.target.value) } /></div><br />
      <div>Use Numbers: <input type="checkbox" name="useNumbers" checked={useNumbers} onChange={(a) => setUseNumbers(!useNumbers)} /></div>
      <div>Use Symbols <input type="checkbox" name="useSymbols" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} /></div> 
      <div> Use UpperCase<input type="checkbox" name="useUpperCase" checked={useUpperCase} onChange={() => setUseUpperCase(!useUpperCase)} /></div>
      <div>Use LowerCase<input type="checkbox" name="useLowerCase" checked={useLowerCase} onChange={() => setUseLowerCase(!useLowerCase)} /></div> 
      <input type="button" name="generate" value="Generate" className={styles.generate} onClick={() => setGeneratedString(generateRandomString(length, useNumbers, useSymbols, useUpperCase, useLowerCase))} />

      <h2>Output</h2>
      <div/>
      <blockquote>
        { generatedString }
      </blockquote>
    </div>
  )
}
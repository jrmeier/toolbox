import { useState } from 'react'
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

  return (
    <div>
      <h1>Random String Generator</h1>
      <input type="number" name="length" value={length} onChange={(e) =>setLength(e.target.value) } /><br />
      Use Numbers: <input type="checkbox" name="useNumbers" checked={useNumbers} onChange={(a) => setUseNumbers(!useNumbers)} /><br />
      Use Symbols <input type="checkbox" name="useSymbols" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} /><br />
      Use UpperCase<input type="checkbox" name="useUpperCase" checked={useUpperCase} onChange={() => setUseUpperCase(!useUpperCase)} /><br />
      Use LowerCase<input type="checkbox" name="useLowerCase" checked={useLowerCase} onChange={() => setUseLowerCase(!useLowerCase)} /><br />
      <input type="button" name="generate" value="Generate" onClick={() => setGeneratedString(generateRandomString(length, useNumbers, useSymbols, useUpperCase, useLowerCase))} />

      <h2>Output</h2>
      <div style={{ maxWidth: 500}} />
      <blockquote style={{ wordBreak: 'break-word', backgroundColor: 'lightgray'}}>
        { generatedString }
      </blockquote>
    </div>
  )
}

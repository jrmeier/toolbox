import { useState } from 'react'
import styles from '../../styles/Tool.module.css'
import { faker } from '@faker-js/faker'

export const generateRandomizedString = (inputString, percentageToReplace = 20) =>{
    const substitutionMap = {
        'a':['@','q','Q'],
        'b':['8'],
        'c':['(','[','{'],
        'd':[']'],
        'e':['3'],
        'f':['5'],
        'g':['6','9'],
        'h':['#'],
        'i':['1','!','|'],
        'j':[],
        'k':['|>'],
        'l':['|','1'],
        'm':[],
        'n':[],
        'o':['0','()'],
        'p':['%'],
        'q':[],
        'r':['2'],
        's':['5','$'],
        't':[],
        'u':[],
        'v':['\/'],
        'w':['w'],
        'x':['*'],
        'y':['why'],
        'z':[],
        ' ':['+','-','_'],
        0:['o','O','()'],
        1:['i','I','|'],
        2:['z','Z'],
        3:['e','E'],
        4:[],
        5: ['s','S','$'],
        6: [],
        7: [],
        8: ['b','B'],
        9: ['p','P'],
    }

    // figure out how many characters to replace
    const givenStringLength = inputString.length
    const numberOfCharactersToReplace = Math.floor(givenStringLength * (percentageToReplace / 100))


    const indexesToReplace = []
    let i = 0
    
    let newString = inputString
    while(i < numberOfCharactersToReplace){
        // select a random index to replace
        const randomIndex = Math.floor(Math.random() * givenStringLength)
        if(!indexesToReplace.includes(randomIndex)){
            indexesToReplace.push(randomIndex)
        }
        i++
    }
    // replace the characters
    indexesToReplace.forEach(index => {
        // get a character to replace with
        const replacementOptions = substitutionMap[inputString[index]] || []
        const replacement = replacementOptions[Math.floor(Math.random() * replacementOptions.length)] || inputString[index]
        console.log({index, replacement})
        newString = newString.substring(0, index) + replacement + newString.substring(index + 1)
    })
    console.log({givenStringLength, numberOfCharactersToReplace, newString, indexesToReplace: indexesToReplace.join(',')})
    return newString




}


export default function PassphraseGenerator()  {
    const [givenPhrase, setGivenPhrase] = useState('');
    const [generatedPhrase, setGeneratedPhrase] = useState('');
    const [percentageToReplace, setPercentageToReplace] = useState(20);


    return (<div className={styles.box}>
        <h1>Passphrase Generator</h1>
        Phrase: <input type="text" name="givenPhrase" value={givenPhrase} onChange={(e) => setGivenPhrase(e.target.value)} />
        <br />
        % of characters to replace: <input type="number" name="percentageToReplace" value={percentageToReplace} onChange={(e) => setPercentageToReplace(e.target.value)} />
        <input className={styles.generate}type="button" name="generate" value='Generate' onClick={()=>setGeneratedPhrase(generateRandomizedString(givenPhrase, percentageToReplace))}/>
        <h2>Output</h2>
        <div/>
        <blockquote className={styles.output}>
            { generatedPhrase}
        </blockquote>
    </div>)

}
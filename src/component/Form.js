import React, { useState, useEffect } from 'react'
import '../styles/Form.css'
const Form = () => {

    const [text, setText] = useState('')
    const [inputText, setInputText] = useState('')
    const [character, setCharacter] = useState(0);
    const [words, setWords] = useState(0)



    const handleOnChange = (e) => {
        setInputText(e.target.value)
        setCharacter(e.target.value.length);
        setWords(e.target.value == '' ? 0 : e.target.value.split(' ').length)
    }

    const handleToLowerCase = () => {
        setInputText(inputText.toLowerCase());
    }

    const handleToUpperCase = () => {
        setInputText(inputText.toUpperCase());
    }

    const handleToCapitalize = () => {
        let ip = inputText.split(' ');

        for (let i = 0; i < ip.length; i++) {
            console.log(ip[i])
            ip[i] = ip[i].charAt(0).toUpperCase() + ip[i].slice(1);
            console.log(ip[i])
        }

        setInputText(ip.join(' '))
    }

    const handleToClear = () => {
        setInputText('');
        setCharacter(0)
        setWords(0)
    }

    
    return (

        <div className='container'>
            <div className="textarea-container">
                <textarea autoFocus placeholder='Write your text here...' value={inputText} onChange={handleOnChange} />
            </div>
            <div className="hints">
            <p>{character <= 1 ? character + ' character' : character + ' characters'}</p>
            <p>{words <= 1 ? words + ' word' : words + ' words'}</p>
            </div>

            <div className="buttons">
                <button onClick={handleToLowerCase}>lower case</button>
                <button onClick={handleToUpperCase}>UPPER CASE</button>
                <button onClick={handleToCapitalize}>Capitalized Case</button>
                <button onClick={handleToClear}>Clear</button>
            </div>
        </div>
    )
}

export default Form
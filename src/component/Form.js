import React, { useState } from 'react'
import '../styles/Form.css'
const Form = () => {

    const [text, setText] = useState('')
    const [inputText, setInputText] = useState('')
    const [character, setCharacter] = useState(0);
    const [words, setWords] = useState(0)



    const handleOnChange = (e) => {
        setInputText(e.target.value)
        setCharacter(inputText.length + 1);
        setWords(inputText.split(' ').length)
        // console.log(inputText)
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
    }
    return (

        <div className='container'>
            <div className="textarea-container">
                <textarea autoFocus placeholder='Write your text here...' value={inputText} onChange={handleOnChange} />
            </div>
            <div className="hints">
            <p>{character} characters</p>
            <p>{words} words</p>
            </div>

            <div className="buttons">
                <button onClick={handleToLowerCase}>lower case</button>
                <button onClick={handleToUpperCase}>UPPER CASE</button>
                <button onClick={handleToCapitalize}>Capitalized case</button>
                <button onClick={handleToClear}>Clear</button>
            </div>
        </div>
    )
}

export default Form
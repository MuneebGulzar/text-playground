import React from 'react'
import '../styles/Footer.css'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <a href="https://github.com/MuneebGulzar" target="_blank"><FaGithub size={40} /></a>
                <a href="https://www.linkedin.com/in/muneeb-gulzar-391607116/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} /></a>
            </div>
        </>
    )
}

export default Footer
import React, { useState, useEffect } from 'react';
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { fab, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BotList from './Component/BotList.jsx';
import './App.css';

import emcHubImage from './Assets/emchub_icon.png';
import csImage from './Assets/csgoLogo.png';
import rustImage from './Assets/rustLogo.png';
import tarkovImage from './Assets/tarkovLogo.png';
import gambaImage from './Assets/dice.png';

// Bots
import botsData from './data/bots.json';

function App() {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        const updatedData = botsData.map(bot => {
            switch (bot.name) {
                case 'EMCHub': bot.image = emcHubImage; break;
                case 'StatsCS': bot.image = csImage; break;
                case 'TarkovAide': bot.image = tarkovImage; break;
                case 'StatsRust': bot.image = rustImage; break;
                case 'GambaBot': bot.image = gambaImage; break;
                default: break;
            }
            return bot;
        });
        setBots(updatedData);
    }, []);

    return (
        <>
            <div>
                <h1>My Socials 🚀</h1>
                <div className='social-container'>
                    <a target="_blank" href='https://twitter.com/nomad_swe' className="social-link">
                        <FontAwesomeIcon icon={faTwitter} className='social-icon'/> Twitter
                    </a>
                    <a target="_blank" href='https://discord.gg/qSHKRaCEkm' className="social-link">
                        <FontAwesomeIcon icon={faDiscord} className='social-icon'/> Discord
                    </a>
                </div>
                <BotList bots={bots} />
            </div>
        </>
    );
}

export default App;

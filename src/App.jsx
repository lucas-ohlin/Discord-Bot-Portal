import React, { useState, useEffect } from 'react';
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
                <h1>Lucas-Ohlin's Discord Bots</h1>
                <BotList bots={bots} />
            </div>
        </>
    );
}

export default App;

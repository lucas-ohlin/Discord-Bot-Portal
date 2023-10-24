import React, { useState } from 'react';
import BotList from './Component/BotList.jsx';
import './App.css';

import emcHubImage from './Assets/emchub_icon.png';
import csImage from './Assets/csgoLogo.png';

function App() {

    const [bots, setBots] = useState([
        {
            name: 'EMCHub',
            image: emcHubImage,
            servers: '3 servers',
            language: 'discord.js',
            prefix: '/',
            description: 'Display information provided by EMCs API. /help - For commands.',
            website: 'https://earthmc.net/',
            invite: 'https://discord.com/api/oauth2/authorize?client_id=1110920826200526959&permissions=827318455360&scope=applications.commands%20bot',
        },
		{
            name: 'StatsCS',
            image: csImage,
            servers: '1 servers',
            language: 'discord.js',
            prefix: '/',
            description: 'Information about players from CS2 & Faceit. /help - For commands.',
            website: 'https://www.counter-strike.net/',
            invite: 'https://discord.com/api/oauth2/authorize?client_id=920788315551170640&permissions=824633845824&scope=bot%20applications.commands',
        },
    ]);

    return (
        <>
            <div>
                <h1>Discord Bots</h1>
                <BotList bots={bots} />
            </div>
        </>
    );
}

export default App;
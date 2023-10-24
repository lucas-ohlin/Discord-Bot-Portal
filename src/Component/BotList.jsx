import React from 'react';
import BotCard from './BotCard';

function BotList({ bots }) {
    return (
        <div className="bot-list">
            {bots.map((bot, index) => (
                <BotCard key={index} bot={bot} />
            ))}
        </div>
    );
}

export default BotList;
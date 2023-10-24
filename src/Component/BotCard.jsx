import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../CSS/BotCard.css';

function BotCard({ bot }) {
    return (
        <div className="bot-card">
            <div className="bot-details">
                <div className="bot-name">
                    <img src={bot.image} alt={bot.name} className="bot-image" />
                    <div className='bot-name-lang'>
                        {bot.name}
                        <p className="bot-language"><i class="bi bi-code-slash"></i> {bot.language} </p>
                    </div>
                </div>
                <p className="bot-description">
                    <span className="bot-prefix">Prefix: {bot.prefix}</span>
                    {bot.description}
                </p>
            </div>
            <div className="bot-actions">
                <a href={bot.website} target="_blank" rel="noopener noreferrer" className="bot-button">More Info</a>
                <a href={bot.invite} target="_blank" rel="noopener noreferrer" className="bot-button"><i class="bi bi-download"></i> Invite</a>
            </div>
        </div>
    );
}

export default BotCard;
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../CSS/BotCard.css';
import { Modal, Button } from 'react-bootstrap';

function BotCard({ bot }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="bot-card">
            <div className="bot-details">
                <div className="bot-name">
                    <img src={bot.image} alt={bot.name} className="bot-image" />
                    <div className='bot-name-lang'>
                        {bot.name}
                        <p className="bot-language"><i className="bi bi-code-slash"></i> {bot.language} </p>
                    </div>
                </div>
                <p className="bot-description">
                    <span className="bot-prefix">Prefix: {bot.prefix}</span>
                    {bot.description}
                </p>
            </div>
            <div className="bot-actions">
                <Button onClick={handleShowModal} className="bot-button">More Info</Button>
                <a href={bot.invite} target="_blank" rel="noopener noreferrer" className="bot-button"><i className="bi bi-download"></i> Invite</a>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} className="custom-modal">
                <Modal.Header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={bot.image} alt={bot.name} className="bot-image" />
                            <Modal.Title>{bot.name}</Modal.Title>
                        </div>
                        <Button onClick={handleCloseModal} className="custom-modal-button">
                            <i className="bi bi-x-lg"></i>
                        </Button>
                    </div>
                </Modal.Header>
                <Modal.Body  style={{ justifyContent: 'center' }}>
                    <p>Data here eventually</p>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center' }}>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BotCard;

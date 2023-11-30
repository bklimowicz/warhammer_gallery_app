import React from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, name }) => {
    return (
        <div className="card-container">
            <div className="card-container__image">
                <FontAwesomeIcon icon={faImage} size="4x" />
            </div>
            <div className="card-container__details">
                <hr />
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    );
};

export default Card;

import React from 'react';
import './addNewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddNewCard = () => {
    return (
        <div className="addNewCard-container">
            <div className="addNewCard-container__image">
                <FontAwesomeIcon icon={faCirclePlus} beat size="4x" />
            </div>
            <div className="addNewCard-container__details">
                <hr />
                <h2>Add new item</h2>
            </div>
        </div>
    );
};

export default AddNewCard;

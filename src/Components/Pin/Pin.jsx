import React from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';

const Pin = ({ pinSize, url }) => {
    return (
        <div style={{ gridRowEnd: pinSize == "small" ? 'span 26' : pinSize == "medium" ? 'span 33' : 'span 45' }} className={`${Styles.pin} ${pinSize}`}>
            <Link to='/postDetails'>
                <img src={url} />
                <button>Details</button>
            </Link>
        </div>
    );
}

export default Pin;

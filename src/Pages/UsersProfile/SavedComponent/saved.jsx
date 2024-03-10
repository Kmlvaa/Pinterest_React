import React from 'react';
import Styles from './saved.module.scss'
import { Link } from 'react-router-dom';

const Saved = () => {
    return (
        <>
            <div className={Styles.context}>
                You haven't save any pins yet
            </div>
            <div className={Styles.btn}>
                <button><Link to='/explore'>Explore</Link></button>
            </div>
        </>
    );
}

export default Saved;

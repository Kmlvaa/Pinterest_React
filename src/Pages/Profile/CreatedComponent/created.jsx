import React from 'react';
import Styles from './created.module.scss'
import { Link } from 'react-router-dom';

const Created = () => {
    return (
        <>
            <div className={Styles.context}>Nothing to show...yet! Pins you create will live here.</div>
            <div className={Styles.btn}>
                <button><Link to='/create'>Create Pin</Link></button>
            </div>
        </>
    );
}

export default Created;

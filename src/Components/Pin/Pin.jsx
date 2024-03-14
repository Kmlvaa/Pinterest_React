import React from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pin = ({ pinSize, url }) => {
    const {t, i18n} = useTranslation(); 
    return (
        <div style={{ gridRowEnd: pinSize == "small" ? 'span 26' : pinSize == "medium" ? 'span 33' : 'span 45' }} className={`${Styles.pin} ${pinSize}`}>
            <Link to='/postDetails'>
                <img src={url} />
                <button>{t("home.details")}</button>
            </Link>
        </div>
    );
}

export default Pin;

import React from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pin = (props) => {
    const {t} = useTranslation(); 
    return (
        <div style={{ gridRowEnd: props.pinSize >= 2 && props.pinSize <= 3 || props.pinSize >= 6? 'span 26' : props.pinSize >= 4 || props.pinSize < 6 ? 'span 33' : 'span 45' }} className={`${Styles.pin} ${props.pinSize}`}>
            <Link to={`/postDetails/${props.id}`}
                id={props.id}
            >
                <img src={props.url} />
                <button>{t("home.details")}</button>
            </Link>
        </div>
    );
}

export default Pin;

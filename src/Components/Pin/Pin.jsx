import React from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pin = (props) => {
    const {t} = useTranslation(); 
    console.log(props.url)
    return (
        <div style={{ gridRowEnd: props.pinSize >= 1002 && props.pinSize <= 1003 || props.pinSize >= 1010? 'span 26' : props.pinSize >= 1015 || props.pinSize < 1016 ? 'span 33' : 'span 45' }} className={`${Styles.pin} ${props.pinSize}`}>
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

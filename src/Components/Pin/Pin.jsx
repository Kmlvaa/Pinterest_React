import React from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pin = (props) => {
    const { t } = useTranslation();
    return (
        <div style={{ gridRowEnd: props.pinSize >= 1011 && props.pinSize <= 1013
         || props.pinSize >= 1023 && props.pinSize <= 1027
         || props.pinSize >= 2017 && props.pinSize <= 2018 ? 'span 26' 
        : props.pinSize >= 1014 && props.pinSize <= 1022
        || props.pinSize >= 2014 && props.pinSize <= 2016 ? 'span 33' 
        : 'span 45' }} className={`${Styles.pin} ${props.pinSize}`}>
            <div>
                <Link to={`/postDetails/${props.id}`}>
                    <img src={props.url} />
                    <button>{t("home.details")}</button>
                </Link>
            </div>
            <div>{props.username}</div>
        </div>
    );
}

export default Pin;

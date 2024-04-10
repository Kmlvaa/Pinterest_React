import React from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pin = (props) => {
    const { t } = useTranslation();
    return (
        <div className={`${Styles.pin} ${props.pinSize}`}>
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

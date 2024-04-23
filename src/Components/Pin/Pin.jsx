import React, { useEffect } from 'react';
import Styles from './pin.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Pin = (props) => {
    const { t } = useTranslation();
    return (
        <div className={Styles.pin} style={{height: `${Math.floor(Math.random() * (450 - 250 + 1)) + 250}px`}}>
            <div>
                <Link to={`/postDetails/${props.id}`}>
                    <img src={props.url} />
                    <button>{t("home.details")}</button>
                </Link>
            </div>
        </div>
    );
}

export default Pin;

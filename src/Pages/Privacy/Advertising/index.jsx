import React from 'react';
import Styles from './index.module.scss'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t} = useTranslation(); 
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.header}>{t("policy.advertising")}</div>
                <div className={Styles.body}>
                <div className={Styles.section1}>
                        <h1>{t("policy.community.section1.header")}</h1>
                        <div>
                            <p style={{ marginBottom: 20 }}>{t("policy.community.section1.p")}</p>
                        </div>
                    </div>
                    <div className={Styles.section2}>
                        <h1>{t("policy.community.section2.header")}</h1>
                        <p>{t("policy.community.section2.p1")}</p>
                        <p>{t("policy.community.section2.p2")}</p>
                    </div>
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section3.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section3.p")}</p>
                        <ul>
                            <li>{t("policy.community.section3.li1")}</li>
                            <li>{t("policy.community.section3.li2")}</li>
                            <li>{t("policy.community.section3.li3")}</li>
                            <li>{t("policy.community.section3.li4")}</li>
                            <li>{t("policy.community.section3.li5")}</li>
                            <li>{t("policy.community.section3.li6")}</li>
                            <li>{t("policy.community.section3.li7")}</li>
                            <li>{t("policy.community.section3.li8")}</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section4.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section4.p")}</p>
                        <ul>
                            <li>{t("policy.community.section4.li1")}</li>
                            <li>{t("policy.community.section4.li2")}</li>
                            <li>{t("policy.community.section4.li3")}</li>
                            <li>{t("policy.community.section4.li4")}</li>
                            <li>{t("policy.community.section4.li5")}</li>
                            <li>{t("policy.community.section4.li6")}</li>
                            <li>{t("policy.community.section4.li7")}</li>
                            <li>{t("policy.community.section4.li8")}</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section5.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section5.p")}</p>
                        <ul>
                            <li>{t("policy.community.section5.li1")}</li>
                            <li>{t("policy.community.section5.li2")}</li>
                            <li>{t("policy.community.section5.li3")}</li>
                            <li>{t("policy.community.section5.li4")}</li>
                            <li>{t("policy.community.section5.li5")}</li>
                            <li>{t("policy.community.section5.li6")}</li>
                            <li>{t("policy.community.section5.li7")}</li>
                            <li>{t("policy.community.section5.li8")}</li>
                            <li>{t("policy.community.section5.li9")}</li>
                            <li>{t("policy.community.section5.li10")}</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section6.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section6.p")}</p>
                        <ul>
                            <li>{t("policy.community.section6.li1")}</li>
                            <li>{t("policy.community.section6.li2")}</li>
                            <li>{t("policy.community.section6.li3")}</li>
                            <li>{t("policy.community.section6.li4")}</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section6.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section6.p")}</p>
                        <ul>
                            <li>{t("policy.community.section6.li1")}</li>
                            <li>{t("policy.community.section6.li2")}</li>
                            <li>{t("policy.community.section6.li3")}</li>
                            <li>{t("policy.community.section6.li4")}</li>
                        </ul>
                    </div> 
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section6.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section6.p")}</p>
                        <ul>
                            <li>{t("policy.community.section6.li1")}</li>
                            <li>{t("policy.community.section6.li2")}</li>
                            <li>{t("policy.community.section6.li3")}</li>
                            <li>{t("policy.community.section6.li4")}</li>
                        </ul>
                    </div> 
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section6.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section6.p")}</p>
                        <ul>
                            <li>{t("policy.community.section6.li1")}</li>
                            <li>{t("policy.community.section6.li2")}</li>
                            <li>{t("policy.community.section6.li3")}</li>
                            <li>{t("policy.community.section6.li4")}</li>
                        </ul>
                    </div> 
                    <div className={Styles.section5}>
                        <h1>{t("policy.community.section6.header")}</h1>
                        <p style={{marginBottom: 20}}>{t("policy.community.section6.p")}</p>
                        <ul>
                            <li>{t("policy.community.section6.li1")}</li>
                            <li>{t("policy.community.section6.li2")}</li>
                            <li>{t("policy.community.section6.li3")}</li>
                            <li>{t("policy.community.section6.li4")}</li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default Index;

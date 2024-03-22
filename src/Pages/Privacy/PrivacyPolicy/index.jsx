import React from 'react';
import Styles from './index.module.scss'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.header}>{t("policy.privacy.header")}</div>
                <div className={Styles.body}>
                    <div className={Styles.section1}>
                        <h1>{t("policy.privacy.section1.header")}</h1>
                        <div>
                            <p style={{ marginBottom: 20 }}>{t("policy.privacy.section1.p")}</p>
                        </div>
                    </div>
                    <div className={Styles.section2}>
                        <h1>{t("policy.terms.section2.header")}</h1>
                        <p>{t("policy.terms.section2.p1")}</p>
                    </div>
                    <div className={Styles.section3}>
                        <h1>{t("policy.terms.section3.header")}</h1>
                        <div className={Styles.a}>
                            <h3>{t("policy.terms.section3.a")}</h3>
                            <p>{t("policy.terms.section3.p1")}</p>
                            <p>{t("policy.terms.section3.p2")}</p>
                            <p>{t("policy.terms.section3.p3")}</p>
                            <p>{t("policy.terms.section3.p4")}</p>
                            <p>{t("policy.terms.section3.p5")}</p>
                        </div>
                    </div>
                    <div className={Styles.section4}>
                        <h1>{t("policy.terms.section4.header")}</h1>
                        <div className={Styles.a}>
                            <h3>{t("policy.terms.section4.a.header")}</h3>
                            <p>{t("policy.terms.section4.a.p1")}</p>
                            <p>{t("policy.terms.section4.a.p2")}</p>
                        </div>
                        <div className={Styles.b}>
                            <h3>{t("policy.terms.section4.b.header")}</h3>
                            <p>{t("policy.terms.section4.b.p1")}</p>
                            <p>{t("policy.terms.section4.b.p2")}</p>
                            <p>{t("policy.terms.section4.b.p3")}</p>
                        </div>
                        <div className={Styles.c}>
                            <h3>{t("policy.terms.section4.c.header")}</h3>
                            <p>{t("policy.terms.section4.c.p1")}</p>
                        </div>
                        <div className={Styles.d}>
                            <h3>{t("policy.terms.section4.d.header")}</h3>
                            <p>{t("policy.terms.section4.d.p1")}</p>
                        </div>
                        <div className={Styles.e}>
                            <h3>{t("policy.terms.section4.e.header")}</h3>
                            <p>{t("policy.terms.section4.e.p1")}</p>
                        </div>
                    </div>
                    <div className={Styles.section4}>
                        <h1>{t("policy.terms.section5.header")}</h1>
                        <div className={Styles.a}>
                            <h3>{t("policy.terms.section5.a.header")}</h3>
                            <p>{t("policy.terms.section5.a.p")}</p>
                        </div>
                        <div className={Styles.b}>
                            <h3>{t("policy.terms.section5.b.header")}</h3>
                            <p>{t("policy.terms.section5.b.p1")}</p>
                            <p>{t("policy.terms.section5.b.p2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

import React from 'react';
import Styles from './index.module.scss'
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t} = useTranslation(); 
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.header}>{t("policy.terms.header")}</div>
                <div className={Styles.body}>
                    <div className={Styles.section1}>
                        <h1>{t("policy.terms.section1.header")}</h1>
                        <div>
                            <p style={{ marginBottom: 20 }}>{t("policy.terms.section1.p1")}</p>
                        </div>
                        <div>
                            <p style={{ marginBottom: 20 }}>
                                {t("policy.terms.section1.p2")}
                            </p>
                            <ul>
                                <li>{t("policy.terms.section1.li1")}</li>
                                <li>{t("policy.terms.section1.li2")}</li>
                                <li>{t("policy.terms.section1.li3")}</li>
                            </ul>
                            <p style={{ marginTop: 20 }}>{t("policy.terms.section1.p3")}</p>
                        </div>
                        <SimplePut text={t("policy.terms.section1.put1")} />
                    </div>
                    <div className={Styles.section2}>
                        <h1>{t("policy.terms.section2.header")}</h1>
                        <p>{t("policy.terms.section2.p1")}</p>
                        <SimplePut text={t("policy.terms.section2.put2")} />
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
                        <div className={Styles.b}>
                            <h3>b. Our license to you</h3>
                            <p>Subject to your compliance with these Terms and our policies, we hereby grant you a limited,
                                non-exclusive, non-transferable, non-sublicensable and revocable license to access and use the
                                Service as contemplated under these Terms and our policies.</p>
                            <p>You may not permit Pinterest to be used by or for the benefit of unauthorized third parties.
                                Nothing in these Terms will be construed to grant you any right to transfer or assign
                                rights to access or use Pinterest. All rights not expressly granted to you are reserved
                                by us and our licensors. Except as described in Section 3(b), you may not: (i) modify
                                or make derivative works based upon the Service; (ii) reverse engineer the Service or access the Service
                                or (iii) copy any features or functions of the Service.</p>
                        </div>
                        <div className={Styles.c}>
                            <h3>c. Commercial use of Pinterest</h3>
                            <p>If you want to use Pinterest for commercial purposes, you must create a business
                                account and agree to our Business Terms of Service . If you do open an account for
                                a company, organization or other entity, then "you" includes you and that entity,
                                and you represent and warrant that you are authorized to grant all permissions and
                                licenses provided in these Terms and bind the entity to these Terms, and that you
                                agree to these Terms on the entity's behalf. To the extent that any provisions in the
                                Business Terms of Service conflict with these Terms,
                                the Business Terms of Service shall govern to the extent of the conflict.</p>
                            <SimplePut text={"These Terms are an agreement between you and us. You cannot use Pinterest if you're under 13 (or older in some countries). If you use Pinterest for work, you need to set up a business account. We grant you a revocable license to use Pinterest, which is subject to our Terms and policies as outlined immediately above.  Unless we have agreed otherwise, if your account has been suspended you can’t return to Pinterest."} />
                        </div>
                    </div>
                    <div className={Styles.section4}>
                        <h1>{t("policy.terms.section4.header")}</h1>
                        <div className={Styles.a}>
                            <h3>{t("policy.terms.section4.a.header")}</h3>
                            <p>{t("policy.terms.section4.a.p1")}</p>
                            <p>{t("policy.terms.section4.a.p2")}</p>
                            <SimplePut text={t("policy.terms.section4.a.put3")} />
                        </div>
                        <div className={Styles.b}>
                            <h3>{t("policy.terms.section4.b.header")}</h3>
                            <p>{t("policy.terms.section4.b.p1")}</p>
                            <p>{t("policy.terms.section4.b.p2")}</p>
                            <p>{t("policy.terms.section4.b.p3")}</p>
                            <SimplePut text={t("policy.terms.section4.b.put4")} />
                        </div>
                        <div className={Styles.c}>
                            <h3>{t("policy.terms.section4.c.header")}</h3>
                            <p>{t("policy.terms.section4.c.p1")}</p>
                            <SimplePut text={t("policy.terms.section4.c.put5")} />
                        </div>
                        <div className={Styles.d}>
                            <h3>{t("policy.terms.section4.d.header")}</h3>
                            <p>{t("policy.terms.section4.d.p1")}</p>
                        </div>
                        <div className={Styles.e}>
                            <h3>{t("policy.terms.section4.e.header")}</h3>
                            <p>{t("policy.terms.section4.e.p1")}</p>
                            <SimplePut text={t("policy.terms.section4.e.put")} />
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
                            <SimplePut text={t("policy.terms.section5.b.put")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function SimplePut(props) {
    const {t} = useTranslation(); 
    return (
        <div className={Styles.simplePut}>
            <div>{t("policy.terms.put")}</div>
            <p>{props.text}</p>
        </div>
    );
}

export default Index;

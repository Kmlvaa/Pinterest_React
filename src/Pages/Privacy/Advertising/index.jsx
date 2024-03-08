import React from 'react';
import Styles from './index.module.scss'

const Index = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.header}>Advertising Guidelines</div>
                <div className={Styles.body}>
                    <div className={Styles.section1}>
                        <h1>Our mission</h1>
                        <div>
                            <p style={{ marginBottom: 20 }}>Pinterest's mission is to provide everyone with the inspiration to 
                            create a life they love. Having said that, not all content is inspiring – so we have community guidelines 
                            to outline what we do and don’t allow on Pinterest. These guidelines are our acceptable use policy, so if you 
                            find content that shouldn’t be on Pinterest, please report it to us . We appreciate your feedback and work hard to 
                            review your report and take appropriate action in a timely fashion. We use your reports to learn and evolve our standards,
                             and work with subject matter experts to inform and update our guidelines.
                             You can learn more about how we enforce these guidelines in our biannual transparency report .</p>
                        </div>
                    </div>
                    <div className={Styles.section2}>
                        <h1>Content safety</h1>
                        <p>
                            Pinterest isn’t a place for antagonistic, explicit, false or misleading, harmful, hateful, or violent content or behavior. We may remove, limit, or block the distribution of such content and the accounts, individuals, groups and domains that create or spread it based on how much harm it poses. You can read more about how we put our Community Guidelines into practice on our Enforcement page here .
                        </p>
                        <p>We’re committed to presenting you with clear and transparent expectations that are easy to understand and follow. If you have questions or encounter problems on Pinterest, please contact us .</p>
                    </div>
                    <div className={Styles.section5}>
                        <h1>Hateful activities</h1>
                        <p style={{marginBottom: 20}}>Pinterest isn’t a place for hateful content or the people and groups that promote hateful activities. We limit the distribution of or remove such content and accounts, including:</p>
                        <ul>
                            <li>Slurs or negative stereotypes, caricatures and generalisations</li>
                            <li>Support for hate groups and people promoting hateful activities, prejudice and conspiracy theories</li>
                            <li>Condoning or trivialising violence because of a victim’s membership in a vulnerable or protected group</li>
                            <li>Support for white supremacy, limiting women’s rights and other discriminatory ideas</li>
                            <li>Hate-based conspiracy theories and misinformation, such as Holocaust denial</li>
                            <li>Denial of an individual’s gender identity or sexual orientation, and support for conversion therapy and related programmes</li>
                            <li>Attacks on individuals including public figures based on their membership in a vulnerable or protected group</li>
                            <li>Mocking or attacking the beliefs, sacred symbols, movements or institutions of the protected or vulnerable groups identified below</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>Misinformation</h1>
                        <p style={{marginBottom: 20}}>Pinterest isn’t a place for misinformation, disinformation, mal-information or the individuals or groups spreading or creating it. We remove or limit distribution of false or misleading content that may harm Pinners’ or the public’s well-being, safety or trust, including:</p>
                        <ul>
                            <li>Medically unsupported health claims that risk public health and safety, including the promotion of false cures, anti-vaccination advice, or misinformation about public health or safety emergencies</li>
                            <li>False or misleading content about individuals or protected groups that promotes fear, hate or prejudice</li>
                            <li>alse or misleading content that encourages turning individuals, groups of people, places or organisations into targets of harassment or physical violence</li>
                            <li>Support for white supremacy, limiting women’s rights and other discriminatory ideas</li>
                            <li>Hate-based conspiracy theories and misinformation, such as Holocaust denial</li>
                            <li>Denial of an individual’s gender identity or sexual orientation, and support for conversion therapy and related programmes</li>
                            <li>Attacks on individuals including public figures based on their membership in a vulnerable or protected group</li>
                            <li>Mocking or attacking the beliefs, sacred symbols, movements or institutions of the protected or vulnerable groups identified below</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>Civic participation misinformation</h1>
                        <p style={{marginBottom: 20}}>Pinterest isn’t a place for hateful content or the people and groups that promote hateful activities. We limit the distribution of or remove such content and accounts, including:</p>
                        <ul>
                            <li>False or misleading content that impedes an election’s integrity or an individual's or group's civic participation, including registering to vote, voting and being counted in a census.</li>
                            <li>False or misleading information about the dates, times, locations and procedure for voting or census participation.</li>
                            <li>Condoning or trivialising violence because of a victim’s membership in a vulnerable or protected group</li>
                            <li>Support for white supremacy, limiting women’s rights and other discriminatory ideas</li>
                            <li>Content that misleads voters about how to correctly fill in and submit a vote (including a postal vote) or census form.</li>
                            <li>Hate-based conspiracy theories and misinformation, such as Holocaust denial</li>
                            <li>False or misleading statements about who is collecting information and/or how it will be used.</li>
                            <li>Fabricated or manipulated content (e.g. content generated with AI tools) making someone appear to do or say something they didn't with the clear intent of influencing public sentiment about a political figure and/or election.</li>
                            <li>Our policies also prohibit threats against voting locations, census or voting personnel, or voters or census participants, including intimidation and doxxing of vulnerable or protected group voters or participants.</li>
                            <li>Denial of an individual’s gender identity or sexual orientation, and support for conversion therapy and related programmes</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>Harassment and criticism</h1>
                        <p style={{marginBottom: 20}}>Pinterest isn’t a place to insult, hurt or antagonise individuals or groups of people. There are good reasons to express criticism, but we may limit the distribution of or remove insulting content to keep Pinterest a positive, inspiring place; this includes:</p>
                        <ul>
                            <li>False or misleading content about climate change solutions that contradict well-established scientific consensus.</li>
                            <li>False or misleading information about the dates, times, locations and procedure for voting or census participation.</li>
                            <li>Content that misrepresents scientific data, including by omission or cherry-picking, in order to erode trust in climate science and experts.</li>
                            <li>Denial of an individual’s gender identity or sexual orientation, and support for conversion therapy and related programmes</li>
                        </ul>
                    </div>
                    <div className={Styles.section5}>
                        <h1>Climate misinformation</h1>
                        <ul>
                            <li>False or misleading content about climate change solutions that contradict well-established scientific consensus.</li>
                            <li>False or misleading information about the dates, times, locations and procedure for voting or census participation.</li>
                            <li>Content that misrepresents scientific data, including by omission or cherry-picking, in order to erode trust in climate science and experts.</li>
                            <li>Denial of an individual’s gender identity or sexual orientation, and support for conversion therapy and related programmes</li>
                        </ul>
                    </div>
                    <div className={Styles.section3}>
                        <h1>Adult content</h1>
                        <div className={Styles.a}>
                            <h3>1. When you give it to us or give us permission to obtain it</h3>
                            <p>You may use Pinterest only if you follow these Terms and all applicable laws. Using Pinterest
                                may include downloading software to your computer, phone, tablet or other device. You agree that
                                we may automatically update that software, and these Terms will apply to any updates.
                                When you create your Pinterest account, you must provide us with accurate and complete information. </p>
                            <p>Any use or access to Pinterest by anyone under the age of 13 is not allowed.
                                If you are older than 13, you can use Pinterest if you are over the minimum age
                                of consent in your country. If you are 13 to 18, you may only use the Services
                                with the permission of your parent or legal guardian.
                                Please be sure your parent or legal guardian has reviewed and discussed these Terms with you. </p>
                            <p>If we’ve previously disabled your account for violating these Terms, any of our policies or
                                for legal reasons, you will not create a new Pinterest
                                account without our express written permission, which is provided at our sole discretion. </p>
                            <p>In using Pinterest, you agree not to scrape, collect, search, copy or otherwise access
                                data or content from Pinterest in unauthorized ways, such as by using automated means (without our express prior permission),
                                or access or attempt to access data you do not have permission to access. </p>
                            <p>Any use of Pinterest not expressly permitted by these Terms is a breach of
                                these Terms and may violate copyright, trademark, and other laws.</p>
                        </div>
                        <div className={Styles.b}>
                            <h3>2. We also get technical information when you use Pinterest</h3>
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
                            <h3>3. Our partners and advertisers share information with us</h3>
                            <p>If you want to use Pinterest for commercial purposes, you must create a business
                                account and agree to our Business Terms of Service . If you do open an account for
                                a company, organization or other entity, then "you" includes you and that entity,
                                and you represent and warrant that you are authorized to grant all permissions and
                                licenses provided in these Terms and bind the entity to these Terms, and that you
                                agree to these Terms on the entity's behalf. To the extent that any provisions in the
                                Business Terms of Service conflict with these Terms,
                                the Business Terms of Service shall govern to the extent of the conflict.</p>
                        </div>
                    </div>
                    <div className={Styles.section4}>
                        <h1>Exploitation</h1>
                        <div className={Styles.a}>
                            <p>Pinterest isn’t a place for exploitation of people or animals. We’ll remove or limit the distribution of content and accounts involved in practices that risk harm to people or animals, including sexual, physical or financial exploitation. That includes:</p>
                            <p>You will only post User Content that you have the rights to post, and you won’t post User Content that
                                infringes the intellectual property rights of others (e.g., copyright infringement, trademark
                                infringement or counterfeit), or that is otherwise unlawful, unless an exception or limitation
                                applies under applicable law. We can take action against User Content that violates these Terms
                                or our policies or where we are permitted or required by law, such as by removing, restricting,
                                or limiting access to, or distribution of, the content. We can also suspend or terminate accounts
                                of users who repeatedly or seriously infringe third-party intellectual property rights, violate the
                                law, these Terms, or our policies, or where permitted or required to do so by law. We are a neutral
                                intermediary and we do not review all User Content before or after it is published on the Service,
                                so we are not responsible or liable to any third party for the content or accuracy of any User Content
                                posted by you or any other Pinterest user. For more information about how we enforce our policies or
                                otherwise take action on content on Pinterest, see our Enforcement page .</p>
                        </div>
                        <div className={Styles.b}>
                            <h3>b. How we and other users can use your User Content</h3>
                            <p>By providing any User Content on the Service, you grant us and our affiliates and service providers,
                                and our users, a non-exclusive, royalty-free, transferable, sublicensable, worldwide license to use,
                                store, publicly perform or display, reproduce, save, modify, create derivative works, monetize,
                                download, translate and distribute your User Content, including for the purpose of promoting and
                                redistributing part or all of the Pinterest Service. Nothing in these Terms: (i) entitles you to
                                any payments or the right to share in any revenue from any monetization of User Content; or (ii)
                                restricts other legal rights we may have to User Content, for example under other licenses. We
                                reserve the right to remove, limit distribution of, or modify User Content, or change the way it’s
                                used in Pinterest, for any reason in our sole discretion, and without notice. This not only
                                includes User Content that we believe violates these Terms, but also our Community Guidelines ,
                                our Copyright Policy , our Trademark Policy or any of our other policies, or other circumstances
                                where we feel such action is in the best interest of Pinterest or our Users. Where appropriate,
                                you may appeal the decisions you think were made in error.</p>
                            <p>Content recommendations on Pinterest are made based on a combination of factors.
                                Your recommendations are mainly influenced by how you engage with our service,
                                the topics we think you’re interested in and how interested you are in them, and
                                what other users who share your similar characteristics and interests like. The relative
                                importance of these criteria is influenced by how you engage with our service,
                                including how often you engage, your saves, and your hides.</p>
                            <p>You can adjust how recommendations are made in your Privacy and Data Settings, and through your Home Feed Tuner.</p>
                        </div>
                        <div className={Styles.c}>
                            <h3>c. How long we keep your User Content</h3>
                            <p>Following termination or deactivation of your account, or User Content removal from Pinterest,
                                we may keep your User Content for a reasonable period of time for backup, archival, or audit purposes.
                                We and our users may retain and continue to use, store, display, reproduce, re-pin, modify,
                                create derivative works, perform, and distribute any of your User Content that
                                you or other users have stored or shared on Pinterest.</p>
                        </div>
                        <div className={Styles.d}>
                            <h3>d. Feedback you provide</h3>
                            <p>We value hearing from our users and are always interested in learning about ways we can make
                                Pinterest more awesome. If you choose to submit comments, ideas, or feedback, you agree that
                                we have no obligation to keep your feedback confidential or to compensate you for the feedback.
                                Do not submit any feedback that is confidential or owned by any third party. By accepting your
                                submission, we don’t waive any rights to use similar or related feedback previously known to us,
                                or developed by our employees, or obtained from sources other than you.</p>
                        </div>
                        <div className={Styles.e}>
                            <h3>e. Our reporting channels</h3>
                            <p>Pinterest offers reporting channels that you may use to tell us about content on
                                Pinterest that you think violates these Terms, our policies, or local law. We will
                                review your report and take any appropriate action in a timely fashion.  In using these
                                channels, you agree to submit reports in  good faith and not misuse any reporting or appeals
                                channel by making baseless reports or appeals. Visit our Help
                                Center to learn more about how to report content on Pinterest.</p>
                        </div>
                    </div>
                    <div className={Styles.section4}>
                        <h1>4. Intellectual Property</h1>
                        <div className={Styles.a}>
                            <h3>a. Copyright Policy and Trademark Policy</h3>
                            <p>Pinterest has adopted and implemented the Pinterest Copyright Policy and the Pinterest
                                Trademark Policy in accordance with applicable intellectual property laws.
                                For more information, please read our Copyright Policy and Trademark Policy .</p>
                        </div>
                        <div className={Styles.b}>
                            <h3>b. Pinterest Intellectual Property</h3>
                            <p>You acknowledge and agree that, as between you and us, we own all right, title
                                and interest in and to Pinterest and all intellectual property rights (including
                                but not limited to the copyrights, trademarks and patents) therein (the “Pinterest IP”)
                                and you must not use any of the Pinterest IP, except as necessary for your permitted use of Pinterest.
                                For clarity, Pinterest IP does not include User Content.</p>
                            <p>If you use Pinterest IP in breach of these Terms, your right to use Pinterest will
                                terminate immediately and you must, at our option, return or destroy any copies of
                                the Pinterest IP you have made. No right, title or interest in or to Pinterest or
                                any Pinterest IP is transferred to you under these Terms,
                                and we reserve all rights not expressly granted.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default Index;

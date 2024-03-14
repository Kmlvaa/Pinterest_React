import React from 'react';
import Styles from './index.module.scss'
import { SimpleGrid } from '@chakra-ui/react';
import addUser from '../../Images/add-user.png';
import plus from '../../Images/plus.png'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t, i18n} = useTranslation(); 
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <h1>{t("account.addAccount")}</h1>
                    <p>{t("account.p1")}</p>
                </div>
                <div className={Styles.second_section}>
                    <CardLayout img={addUser} heading={t("account.card1Header")}
                        body={t("account.card1p")}
                        button={t("account.card1btn")} link={'/login'}></CardLayout>
                    <CardLayout img={plus} heading={t("account.card2Header")}
                        body={t("account.card2p")}
                        button={t("account.card2btn")} link={'/register'}></CardLayout>

                </div>
            </div>
        </>
    );
}
function CardLayout(props) {
    return (
        <SimpleGrid width={300} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader className={Styles.cardHeader}>
                    <div className={Styles.pic_cover}>
                        <img src={props.img} width={50} height={50} />
                    </div>
                    <Heading size='md'>{props.heading}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{props.body}</Text>
                </CardBody>
                <CardFooter className={Styles.cardFooter}>
                    <Button className={Styles.button}><Link to={props.link}>{props.button}</Link></Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    );
}

export default Index;

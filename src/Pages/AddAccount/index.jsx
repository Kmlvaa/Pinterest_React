import React from 'react';
import Styles from './index.module.scss'
import { SimpleGrid } from '@chakra-ui/react';
import addUser from '../../Images/add-user.png';
import plus from '../../Images/plus.png'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.first_section}>
                    <h1>Add Account</h1>
                    <p>Add a new account or connect an existing account for seamless account switching</p>
                </div>
                <div className={Styles.second_section}>
                    <CardLayout img={addUser} heading={'Connect existing account'}
                        body={'Connect Pinterest accounts with different emails for seamless account switching'}
                        button={'Connect account'} link={'/login'}></CardLayout>
                    <CardLayout img={plus} heading={'Create a new personal account'}
                        body={'Create a separate account with another email address'}
                        button={'Create'} link={'/register'}></CardLayout>

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

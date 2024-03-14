import React from 'react';
import Styles from './home.module.scss'
import Pin from '../../Components/Pin/Pin';
import kaonashi8 from '../../Images/Kaonashi8.jpg'
import kaonashi4 from '../../Images/Kaonashi4.jpg'
import pic from '../../Images/Screenshot 2024-01-31 011531.png'

const Home = () => {
    return (
        <>
            <div className={Styles.main}>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
               <Pin pinSize={"small"} url={kaonashi8}/>
               <Pin pinSize={"medium"} url={kaonashi4}/>
               <Pin pinSize={"large"} url={pic}/>
            </div>
        </>
    );
}

export default Home;

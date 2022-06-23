import { Box, Heading, Stack } from "@chakra-ui/react";
import styles from '../../styles/Home.module.css';
import React from 'react';
import SocialMedia from "./SocialMedia";

export default function Header() {
    // check time of user
    const time = new Date();
    let backgroundGif = "pp";
    // if night, show night GIF
    if (time.getHours() > 19 ||  time.getHours() < 6){
        backgroundGif= "/testNight.gif";
    }
    // else, show day GIF
    //else { backgroundGif = "/testNight.gif"}
    else { backgroundGif = "/dayClouds3.gif"}

    return (
        <Box
            display='flex'
            w="100%"
            h="100vh"
            sx = {{ backgroundImage: backgroundGif }}
            backgroundSize="cover"   
            color="white"
            alignItems='center'
            justifyContent='center'
        >
            <Box
             backgroundColor='#001220'
             padding='6%'
             borderRadius='40px'
             >
                <Heading fontSize={["2rem", "3rem", "4rem", "5rem", "7rem"]} as="h1">Xavier<br/>Nishikawa</Heading>
                <hr className={styles.hrHeader}/>
                <Heading
                as="h2" 
                fontWeight={450}
                fontSize={[ "0.75rem", "1.25rem", "1.75rem"]}
                >High school student</Heading>
                <SocialMedia className={styles.socialMedia}/>
            </Box>
            
        </Box>
        
    )
}
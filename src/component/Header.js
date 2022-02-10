import { Box, Heading, Stack } from "@chakra-ui/react";
import styles from '../../styles/Home.module.css'
import React from 'react';
import SocialMedia from "./SocialMedia";

export default function Header() {
    
    return (
        <Box
            display='flex'
            w="100%"
            h="100vh"
            backgroundImage="/layered-waves-haikei.svg"
            backgroundSize="cover"
            color="white"
            paddingTop="calc(100vw/10)"
            paddingRight="calc(100vh / 10)"
            alignItems='center'
            justifyContent='flex-end'
        >
            <Box
             backgroundColor='#001220'
             padding='3%'
             borderRadius='10px'
             >
                <Heading fontSize={["2rem", "3rem", "4rem", "5rem"]} as="h1">Xavier<br/>Nishikawa</Heading>
                <hr className={styles.hrHeader}/>
                <Heading
                as="h2" 
                fontWeight={450}
                fontSize={[ "0.75rem", "1.25rem"]}
                >High school student</Heading>
                {/* <Heading as="h2" 
                fontWeight={450} 
                fontSize={[ "0.75rem", "1.25rem"]}
                >Developer</Heading>
                */}
                <SocialMedia className={styles.socialMedia}/>
            </Box>
            
        </Box>
        
    )
}
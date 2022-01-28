import { Box, Heading, Stack } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import React from 'react';
import SocialMedia from "./SocialMedia";

export default function Header() {
    
    return (
        <Box
            w="100%"
            h="100vh"
            backgroundImage="/background-cover.svg"
            backgroundSize="cover"
            color="white"
            paddingLeft="calc(100vw/1.8)"
            paddingTop="calc(100vh / 2.2)"
        >
            <Heading fontSize={["2rem", "3rem", "4rem", "5rem"]} as="h1">Xavier<br/>Nishikawa</Heading>
            <hr className={styles.hrHeader}/>
            <Heading
             as="h2" 
             fontWeight={450}
             fontSize={[ "0.75rem", "1.25rem"]}
            >High school student</Heading>
            <Heading as="h2" 
              fontWeight={450} 
              fontSize={[ "0.75rem", "1.25rem"]}
            >Developer</Heading>
            
            <SocialMedia className={styles.socialMedia}/>

            
        </Box>
        
    )
}
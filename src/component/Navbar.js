import React from "react";
import { navLinks } from "../data";
import { Link, Box, UnorderedList, ListItem, Heading } from "@chakra-ui/layout";
import styles from '../../styles/Home.module.css'

export default function Navbar() {
    console.log('pp')
    return (
        <Box className={styles.navBarContainer}>
            <Box className={styles.navbarTitle}>

                <Box  className={styles.navbarName}>
                    <Link href={'/'}><Heading fontSize={[".75rem", "1.2rem"]} as="h2">Xavier Nishikawa </Heading> </Link>
                </Box>
                <Heading fontSize={[".75rem", "1.2rem"]} as="h2"> | </Heading>
            </Box>
            <Box className={styles.navBarRight}>
                {navLinks.map((link, index) => {
                return (
                    <UnorderedList className={styles.ul}>
                       <Link href={link.path} >
                            <ListItem key={index} className={styles.listItem}>
                                <Heading fontSize={[".75rem", "1.2rem"]} as="h2">{link.name}</Heading>
                                </ListItem>
                        </Link>

                    </UnorderedList>
                 );
                })}
            
            </Box>
        </Box>
    );
}
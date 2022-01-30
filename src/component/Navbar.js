import React from "react";
import { navLinks } from "../data";
import { Link, Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import styles from '../../styles/Home.module.css'
import styled from "styled-components";

export default function Navbar() {
    console.log('pp')
    return (
        <Box className={styles.navBarContainer}>
            <Box>
                <h3>Example</h3>
            </Box>
            <Box className={styles.navBarRight}>
                {navLinks.map((link, index) => {
                return (
                    <UnorderedList className={styles.ul}>
                       <Link href={link.path} >
                            <ListItem key={index} className={styles.listItem}>{link.name}</ListItem>
                        </Link>
                    </UnorderedList>
                 );
                })}
            
            </Box>
        </Box>
    );
}
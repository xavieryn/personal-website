import React from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Box, Link, Icon } from "@chakra-ui/react";
import styles from '../../styles/Home.module.css'


export default function SocialMedia() {
    return (
    <Box className={styles.socialContainer}>
      
      <Link
        href="https://github.com/xavieryn"
        className={styles.iconSocial, styles.socialLeft}
      >
        <Icon as={FaGithub} w={[3,6,8]} h={[3,6,8]}/>

      </Link>
      <Link
        href="https://www.linkedin.com/in/xavier-nishikawa-a89191221/"
        className={styles.iconSocial, styles.social}
      >
        <Icon as={FaLinkedin} w={[3,6,8]} h={[3,6,8]} />
      </Link>
      <Link 
        href="https://www.youtube.com/channel/UCUTDUsHh1ZDDW6jA3zlOhTw"
        className={styles.iconSocial, styles.social}
      >
        <Icon as={FaYoutube} w={[3,6,8]} h={[3,6,8]}/>

      </Link>
      <Link
        href="https://www.instagram.com/xavierynx/"
        className={styles.iconSocial, styles.social}
      >
        <Icon as={FaInstagram} w={[3,6,8]} h={[3,6,8]}/>
      </Link>
    </Box>
    )
}
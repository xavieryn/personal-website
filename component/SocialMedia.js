import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Box, Stack, Heading } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'

export default function SocialMedia() {
    return (
    <Box className={styles.socialContainer}>
      
      <a
        href="https://github.com/xavieryn"
        className={styles.iconSocial, styles.socialLeft}
      >
        <FontAwesomeIcon icon={faGithub} width={'30%'} height={'auto'}/>
      </a>
      <a
        href="https://www.linkedin.com/in/xavier-nishikawa-a89191221/"
        className={styles.iconSocial, styles.social}
      >
        <FontAwesomeIcon icon={faLinkedin} width={'30%'} height={'auto'}/>
      </a>
      <a    
        href="https://www.youtube.com/channel/UCUTDUsHh1ZDDW6jA3zlOhTw"
        className={styles.iconSocial, styles.social}
      >
        <FontAwesomeIcon icon={faYoutube} width={'35%'} height={'auto'}/>
      </a>
      <a
        href="https://www.instagram.com/xavierynx/"
        className={styles.iconSocial, styles.social}
      >
        <FontAwesomeIcon icon={faInstagram} width={'30%'} height={'auto'}/>
      </a>
    </Box>
    )
}
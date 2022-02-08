import { Box, Heading, Image, Text, Link} from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Home.module.css'
import NextLink from 'next/link';
import NextImage from 'next/image'


const ProjectCard = ( { props }) => {
    // console.log(props.items);
    // console.log(props.items.map((item) => transformContent(item))); 
    return (
        <Box className={styles.ProjectCardContainer}>
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(project => {
                
                return (
                    // card 
                    <Box key={project.key}  className={styles.ProjectCard} > 
                        
                        <NextLink href={'youtube.com'}>
                            <Link>
                                <Image 
                                src={ "https://berowra.xavier.deta.app" + "/file/" + project.content.ImageGallery.value[0]} 
                                alt='Project Photo'
                                /> 
                            </Link>
                        </NextLink>
                    </Box>
                )
            })
            } 
        </Box>
    )
};

export default ProjectCard;
function transformContent(content) {
    return {
    //instead of variable names being weird numbers, changes variable name to actual title value
      ...content,
      content: Object.fromEntries(Object.values(content.content).map(c => [c.title, c]))
    };
}

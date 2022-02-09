import { Box, Heading, Image, Text, Link} from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Home.module.css'
import NextLink from 'next/link';
import NextImage from 'next/image'
import { urlObjectKeys } from 'next/dist/shared/lib/utils';


const ProjectCard = ( { props }) => {
    // console.log(props.items);
    // console.log(props.items.map((item) => transformContent(item))); 
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            flexDirection='row'
            gap="1rem"
            justifyContent='center'
            w='100%'
                     
        >
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(project => {
                
                return (
                    // card 
                    <NextLink href={'youtube.com'} key={project.key} >
                        <Link>
                            <Box
                                style = {{ backgroundImage:`url(${"https://berowra.xavier.deta.app" + "/file/" + project.content.ImageGallery.value[0]})`}}
                                h="40vh"
                                display='flex'
                                w='800px'
                                maxW='100vw'
                                backgroundSize='cover'
                                backgroundPosition='center'
                                backgroundRepeat='no-repeat'
                                
                            > 
                                
                            
                            </Box>
                        </Link>
                    </NextLink>
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

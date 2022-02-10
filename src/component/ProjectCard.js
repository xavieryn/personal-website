import { Box, Heading, Image, Text, Link, AspectRatio} from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Home.module.css'
import NextLink from 'next/link';
import NextImage from 'next/image'
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Head from 'next/head';


const ProjectCard = ( { props }) => {
    // console.log(props.items);
    // console.log(props.items.map((item) => transformContent(item))); 
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            flexDirection='row'
            gap="1rem"
            //justifyContent='center'
            // w='calc(100% - 20px)'
            w="100%"
            padding='10px'
                     
        >
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(project => {
                
                return (
                    // card 
                    <NextLink href={'youtube.com'} key={project.key} style={{ textDecoration: 'none' }}>
                    
                        <Link maxW='100%'  textDecoration='none'>
                            <Box
                                style = {{ backgroundImage:`url(${"https://berowra.xavier.deta.app" + "/file/" + project.content.ImageGallery.value[0]})`,
                                aspectRatio:'16/11'
                                }}
                                h="auto"   
                                // maxH='50vh'
                                display='flex'
                                w='400px'
                                maxW='100%'
                                backgroundSize='cover'
                                backgroundPosition='center'
                                backgroundRepeat='no-repeat'
                                

                                
                            > 
                                
                                <Box
                                w='100%'
                                h='100%'
                                bgColor='white'
                                opacity='0'
                                transition='opacity 0.2s ease-out'
                                _hover={{ 
                                    opacity: 1,  
                                }}
                                
                                
                                >
                                    <Heading 
                                    textAlign='center'
                                    >
                                        {project.content.Title.value}
                                    </Heading>
                                    <Text
                                    textAlign='center'> {project.content.TagLine.value}</Text>
                                </Box>
                            
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

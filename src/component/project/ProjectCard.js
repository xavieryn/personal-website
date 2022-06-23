import { Box, Heading, Text, Link, AspectRatio} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';


const ProjectCard = ( { props }) => {
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            flexDirection='row'
            gap="1rem"
            w="100%"
            padding='10px'  
            justifyContent='center'
            paddingLeft='2%'
            paddingRight='2%'                   
        >
            {props.items.map((item) => transformContent(item)).map(project => {
                return (
                    // card 
                    <Box
                        style = {{ backgroundImage:`url(${"https://berowra.xavier.deta.app" + "/file/" + project.content.ImageGallery.value[0]})`,
                            aspectRatio:'16/11'
                        }}
                        h="auto"   
                        // maxH='50vh'
                        display='flex'
                        w='700px'
                        maxW='100%'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        borderRadius='30'
                        margin='0 4%'
                        key={project.key}
                        > 
                        <NextLink
                            href={`/projects/${project.key}`}
                            styles={{ textDecoration:'none'
                            }}>
                            <Link w='100%' h='100%' textDecoration='none' _hover= {{
                             textDecoration: 'none'
                            }}>     
                                <Box
                                // when hovered, image will change and become white with description
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
                                    textAlign='center'> {project.content.TagLine.value}
                                    
                                    </Text>
                                        
                                </Box>
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

import { Box, Heading, Image, Text, Link, AspectRatio, Center, Icon} from '@chakra-ui/react';
import GitHubLink from './GitHubLink';
import React from 'react';
import NextLink from 'next/link';

const WorkCard = ( { props } ) => {
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
            paddingLeft='2%'
            paddingRight='2%'
            justifyContent='center'                  
        >
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(work => {
                
                return (
                    // card 
                   
                    <Box
                        style = {{ backgroundImage:`url(${"https://berowra.xavier.deta.app" + "/file/" + work.content.ImageGallery.value[0]})`,
                            aspectRatio:'16/11'
                        }}
                        h="auto"   
                        // maxH='50vh'
                        display='flex'
                        w='600px'
                        maxW='100%'
                        backgroundSize='cover'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        borderRadius= '30'
                        margin='0 4%'
                        key={work.content.Title.value}
                        > 
                        <NextLink
                            href={'yourmomshouse.com'}
                            styles={{ textDecoration:'none'
                            }}>
                            <Link w='100%' h='100%' textDecoration='none' _hover= {{
                             textDecoration: 'none'
                            }}>     
                                <Box
                                w='100%'
                                h='100%'
                                bgColor='white'
                                opacity='0'
                                transition='opacity 0.2s ease-out'
                                alignItems='center'
                                _hover={{ 
                                    opacity: 1, 
                                    
                                }}
                                >
                                    
                                    <Heading 
                                    textAlign='center'
                                     >
                                    {work.content.Title.value}
                                    </Heading>
                                    <Text
                                    textAlign='center'> {work.content.TagLine.value}
                                    </Text>
                                    <GitHubLink work={work}/>
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

export default WorkCard;
function transformContent(content) {
    return {
    //instead of variable names being weird numbers, changes variable name to actual title value
      ...content,
      content: Object.fromEntries(Object.values(content.content).map(c => [c.title, c]))
    };
}

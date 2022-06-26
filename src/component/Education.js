import { Box, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';


export default function Education( {props} ){
  return(  
    <Box backgroundColor='#9094EC'  >
        <Heading fontSize={['1rem','2rem','3rem']} textAlign='center' as='h2' margin='2% 1.5%'>Education</Heading>
        {/* {props.items.map((item) => transformContent(item)).map(education => {
             return(
                <Box>
                    {education.content.Title.value}
                    <Image src={"https://berowra.xavier.deta.app" + "/file/" + education.content.Image.value[0]}/>
                    {console.log(education.content.Image.value)}

                </Box>
             )
        })
        }  */}
        <Box textAlign='center'>
        {props.items.map((item) => transformContent(item)).map(education => {
                return (
                    // card 
                    <Box display='inline-block' maxW='500' > 
                        <Box textAlign='center' >
                          {education.content.Title.value}
                          <Image width='600' height='200' src={"https://berowra.xavier.deta.app" + "/file/" + education.content.Image.value[0]} alt='bruh'/>  
                        </Box>
                        <Box  >
                          {education.content.Skills.value}
                        </Box>
                    </Box>
                    
                )
            })
            } 
        </Box>
    </Box>
    
    )
};


function transformContent(content) {
    return {
    //instead of variable names being weird numbers, changes variable name to actual title value
      ...content,
      content: Object.fromEntries(Object.values(content.content).map(c => [c.title, c]))
    };
}


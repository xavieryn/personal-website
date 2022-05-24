import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import WorkCard from './WorkCard';

const Work = ({ props }) => {
  return(  
    <Box id='Work' >
         <Heading fontSize={['1rem','2rem','3rem']} margin='2% 1.5%' as='h2' textAlign='center'  >Work</Heading>
         <WorkCard props={props}/>
    </Box>
    )
};


export default Work;

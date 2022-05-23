import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = ({ props }) => {
  return(  
    <Box  >
        <Heading fontSize={['1rem','2rem','3rem']} textAlign='center' as='h2' margin='2% 1.5%'>Projects</Heading>
        <ProjectCard props={props}/>
         
    </Box>
    )
};


export default Projects;

import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = ({ props }) => {
  return(  
    <Box id='Projects' >
         <Heading fontSize={['1rem','2rem','3rem']} as='h2' margin='0.5% 1.5%'>Projects</Heading>
         <ProjectCard props={props}/>
    </Box>
    )
};


export default Projects;

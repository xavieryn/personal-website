import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ProjectCard from '../src/component/ProjectCard';


const Projects = ({ props }) => {
  return(  
    <Box id='Projects'>
         <Heading fontSize={['1rem','2rem','3rem']} as='h2'>Projects</Heading>
         <ProjectCard props={props}/>
    </Box>
    )
};


export default Projects;

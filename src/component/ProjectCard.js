import { Box, Heading } from '@chakra-ui/react';
import React from 'react';


const ProjectCard = ( { props }) => {
    console.log(props)
    return (
        <Box>
            {props.items.map((project, index) => {
                return (
                    <Box>
                        <Heading>
                            {project.title}
                        </Heading>
                    </Box>
                )
            })
            } 
        </Box>
    )
};

export default ProjectCard;

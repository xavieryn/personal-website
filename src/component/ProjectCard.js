import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Home.module.css'


const ProjectCard = ( { props }) => {
    
    console.log(props)
    console.log(props.items)
    console.log(props.items.imagegallery)
    return (
        <Box>
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(project => {
                
                return (
                    // card 
                    <Box key={project.key} className={styles.ProjectCard}> 
                        <Heading>
                            {project.title}
                        </Heading>
                        <Image src={ "https://berowra.xavier.deta.app" + "/file/" + project.content.ImageGallery.value[0]}/> 
                        <Text>{project.content.Body.value}</Text>
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
      ...content,
      content: Object.fromEntries(Object.values(content.content).map(c => [c.title, c]))
    };
}

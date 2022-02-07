import { Box, Heading, Image, Text, Link} from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Home.module.css'
import nextLink from 'next/link';


const ProjectCard = ( { props }) => {
    
    console.log(props)
    console.log(props.items)
    console.log(props.items.imagegallery)
    return (
        <Box className={styles.ProjectCard}>
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(project => {
                
                return (
                    // card 
                    <Box key={project.key} > 
                        <Heading>
                            {project.title}
                        </Heading>
                        <nextLink>
                            <Link>
                                <Image src={ "https://berowra.xavier.deta.app" + "/file/" + project.content.ImageGallery.value[0]}  w={'100%'}/> 
                            </Link>
                        </nextLink>
                        {/* <Text>{project.content.Body.value}</Text> */}
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

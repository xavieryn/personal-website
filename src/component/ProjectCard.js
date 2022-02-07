import { Box, Heading, Image, Text, Link} from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Home.module.css'
import NextLink from 'next/link';


const ProjectCard = ( { props }) => {
    console.log(props.items);
    console.log(props.items.map((item) => transformContent(item))); 
    return (
        <Box className={styles.ProjectCardContainer}>
            {/* {props.items.map((project) => { */}
            {props.items.map((item) => transformContent(item)).map(project => {
                
                return (
                    // card 
                    <Box key={project.key} className={styles.ProjectCard} > 
                        <Heading>
                            {project.title}
                        </Heading>
                        <NextLink href={'youtube.com'}>
                            <Link>
                                {/* <Image src={ "https://berowra.xavier.deta.app" + "/file/" + project.content.imagegallery.value[0]}/>  */}
                                <Text>pp</Text>
                            </Link>
                        </NextLink>
                        {/* <Text>{project.content.Body.value}</Text>   */}
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

import { Box, Text, Link, Center, Icon} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const GitHubLink = ( {work} ) => {
    // if there is github value in cms, then show
    if (work.content.GitHub.value) {
        return (
            <Center
            padding='30'>
                <Link                                   
                    href={work.content.GitHub.value}> 
                        <Icon as={FaGithub} w={[3,6,8]} h={[3,6,8]}/>
                </Link> 
            </Center>
        );
    }
    // else show nothing
    else {
        return <Text></Text>
    }
  
        
};

export default GitHubLink;

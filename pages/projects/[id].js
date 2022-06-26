import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function ProjectPage( {project} ){
    const transformedProject = transformContent(project);
    // organizes and maps code so that I am able to actually access the strings, files etc 
    let result = Object.keys(transformedProject).map((key) => [Number(key), transformedProject[key]]);
    console.log(result[1][1].ImageGallery.value[0]);
    return (
    <Box 
    padding='5% 20%'>
        <Box >
          <Heading fontSize={[ "2rem", "3rem", "4rem"]}> {result[1][1].Title.value}</Heading>
          <Heading fontSize={[ "1.5rem", "2rem", "2rem"]}> {result[1][1].TagLine.value} </Heading>
          <Text fontSize={[ ".6rem", ".75rem", "1.25rem"]}>  {result[1][1].Skills.value}  </Text>
          <hr/>
        </Box>
       
        <Box padding='3% 2%'>
          {console.log("https://berowra.xavier.deta.app" + "/file/" + result[1][1].ImageGallery.value[0])}
          
          <Image height='40%' src={ "https://berowra.xavier.deta.app" + "/file/" + result[1][1].ImageGallery.value[0]} alt="why no work?"/> 
        
          <Box padding='5% .5%'>
            {result[1][1].Body.value}
          </Box>
        </Box>
    </Box>
  )
}


function transformContent(content) {
    return {
    //instead of variable names being weird numbers, changes variable name to actual title value
      ...content,
      content: Object.fromEntries(Object.values(content.content).map(c => [c.title, c]))
    };
}

export const getStaticPaths = async () => {
    const projects = await fetch("https://berowra.xavier.deta.app/api/collection/t7tp38g89mkw?content").then(r => r.json());
    // grabs every single project from the cms, and matches it with the id
    const paths = projects.items.map((item) => transformContent(item)).map(project => {
      return {
      params: {
        id: project.key,
      },
    };
  });
    return {
        paths,
        fallback: false,
    };
}
// retrieves project from berowa cms, adding the id so that it gets the correct project 
export const getStaticProps = async ( context ) => {
  const project = await fetch("https://berowra.xavier.deta.app/api/content/" + context.params.id).then(r => r.json());
  return {
    props: { project }
  }
}

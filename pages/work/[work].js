import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function WorkPage( {workContent} ){
    const transformedProject = transformContent(workContent);
    const result = Object.keys(transformedProject).map((key) => [Number(key), transformedProject[key]]);
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
    const works = await fetch("https://berowra.xavier.deta.app/api/collection/qey11kq2wxox?content").then(r => r.json());
    const paths = works.items.map((item) => transformContent(item)).map(work => {
      return {
      params: {
        work  : work.key,
      },
    };
  });
    return {
        paths,
        fallback: false,
    };
}
export const getStaticProps = async ( context ) => {
  const workContent = await fetch("https://berowra.xavier.deta.app/api/content/" + context.params.work).then(r => r.json());
  return {
    //project
    props: { workContent }

  }
}

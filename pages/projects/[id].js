import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function ProjectPage( {project} ){
    const transformedProject = transformContent(project);
    let result = Object.keys(transformedProject).map((key) => [Number(key), transformedProject[key]]);
    console.log(result[1][1].ImageGallery.value[0]);
    return (
    <Box>
        <Box>
        <Heading> {result[1][1].Title.value}</Heading>
        <Heading> {result[1][1].TagLine.value} </Heading>
        <Text>  {result[1][1].Skills.value}  </Text>
        </Box>
        {/* <Image src={`url(${"https://berowra.xavier.deta.app" + "/file/" + result[1][1].ImageGallery.value[0]})`}/> */}
        {/* the url function is being funky because my actualy link works*/}
        <Image src='https://berowra.xavier.deta.app/file/2022-02-0518:12:42.336374+00:00cs50_ide.PNG'/> 
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
export const getStaticProps = async ( context ) => {
  //console.log(context.params.id);
  const project = await fetch("https://berowra.xavier.deta.app/api/content/" + context.params.id).then(r => r.json());
  return {
    //project
    props: { project }

  }
}

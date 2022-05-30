import { Box } from "@chakra-ui/react";

export default function ProjectPage( {project} ){
    const transformedProject = transformContent(project);
    let result = Object.keys(transformedProject).map((key) => [Number(key), transformedProject[key]]);

    console.log(result[1][1].Skills.value);
    return (
    <Box>
        
        <Box>
          {result[1][1].Skills.value}

          penis
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
export const getStaticProps = async ( {id} ) => {
  console.log(id);
  const project = await fetch("https://berowra.xavier.deta.app/api/content/" + id).then(r => r.json());
  console.log(project);
  return {
    //project
    props: { project }

  }
}

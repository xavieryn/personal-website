import { Box } from "@chakra-ui/react";

export default function ProjectPage( { project} ){
    console.log(Array.isArray(project));
    console.log(Array.isArray(Object.keys(project)));
    return (
    <Box>
       {/* {project.map((item) => transformContent(item)).map(project => { */}
       {Object.keys(transformContent(project)).map((key) => [Number(key), project[key]]){



        return(
        <Box>
          {project.content.Title.value}
          penis
        </Box>
        )
      })
    
    } 

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
    //console.log("we in????")
    const paths = projects.items.map((item) => transformContent(item)).map(project => {
      //console.log(project.content.Title.value); 
      return {
      params: {
        id: project.content.Title.value,
      },
    };
  });
    return {
        paths,
        fallback: false,
    };
}
export const getStaticProps = async () => {
  const project = await fetch("https://berowra.xavier.deta.app/api/content/p9w96ls7d6s9").then(r => r.json());
  //console.log(projects);
  return {
    //project
    props: { project }

  }
}

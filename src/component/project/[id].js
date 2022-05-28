import { Box } from "@chakra-ui/react";

export default function ProjectPage(){
    return (
    <Box>test </Box>
    )
}


function transformContent(content) {
    return {
    //instead of variable names being weird numbers, changes variable name to actual title value
      ...content,
      content: Object.fromEntries(Object.values(content.content).map(c => [c.title, c]))
    };
}

export function getAllPostIds( projects) {
    return projects.items.map((item) => transformContent(item)).map(project => {
        console.log(project.content.Title.value); 
        return {
        params: {
          id: project.content.Title.value,
        },
      };
    });
  }

export async function getStaticPaths() {
    const projects = await fetch("https://berowra.xavier.deta.app/api/collection/t7tp38g89mkw?content").then(r => r.json());
    //const paths = getAllPostIds( projects );
    const paths = projects.items.map((item) => transformContent(item)).map(project => {
      console.log(project.content.Title.value); 
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
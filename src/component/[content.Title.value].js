export const getStaticPaths = async () => {
    const projects = await fetch("https://berowra.xavier.deta.app/api/collection/t7tp38g89mkw?content").then(r => r.json());

    {projects.items.map((item) => transformContent(item)).map(project => {

        return {
            params:{ title: project.content.Title.value}
        }
    })
    }
    return {
        paths,
        fallback: false
    }
}
const Projects = () => {

    return (
    <Box>test </Box>
    )
}

export default Projects;

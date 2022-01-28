import { Box, Heading, Stack } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box
            w="100%"
            h="100vh"
            backgroundImage="/background-cover.svg"
            backgroundSize="cover"
            color="white"
            paddingLeft="calc(100vw/1.7)"
            paddingTop=/*{{ sm: "100px", md: "175px"}}*/"calc(100vh / 2)"
        >
            <Heading fontSize={["1rem", "2rem", "3rem", "4rem", "5rem"]} as="h1">Xavier<br/>Nishikawa</Heading>
            <Heading
             as="h2" 
             fontWeight={450}
             fontSize={["0.5rem", "0.75rem", "1.25rem"]}
            >High school student</Heading>
            <Heading as="h2" 
              fontWeight={450} 
              fontSize={["0.5rem", "0.75rem", "1.25rem"]}
            >Developer</Heading>
            
        </Box>
    )
}
import { ColorModeButton } from "./ui/color-mode";
import { Container,Heading,Flex,Input,Button } from "@chakra-ui/react";
function Navbar(){
    return <Container p={4} maxW={1200}>
        <nav>
        <Flex justifyContent={'space-between'}>
            <Heading>Movie & TV Show Database</Heading>
            
            <ColorModeButton/>
        </Flex>
    </nav>
    </Container>
}
export default Navbar;
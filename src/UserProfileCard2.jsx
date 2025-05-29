import { Box, Text, List, Button, Heading, Stack, Icon, Circle, Flex} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import pimg from './assets/pimg2.jpg';
import { MdBrightness4 } from "react-icons/md";
import { useColorMode } from "./components/ui/color-mode";


const UserProfileCard2 = ()=>{

    const {colorMode, toggleColorMode} = useColorMode();

    return(
        
        <Box bg={colorMode === 'dark' ? 'white' : 'black'} transition={"all 0.3s"}  w={{base: '90%', sm: '450px'}} h={{base: '470px', md: '450px'}} m={'auto'} mt={10} borderRadius={15} overflow={'hidden'} boxShadow={'md'}>
      
       <Stack>
        <Box h={{base: 'auto', md: '140px'}} pt={2} display={'flex'} justifyContent={'space-between'}>
            <Image src={pimg} borderRadius={'full'} width='30%' ml={5}></Image>

            <Icon size={'md'} color={colorMode === 'dark' ? 'black': 'white'} mr={5} mt={3} onClick={toggleColorMode} cursor={'pointer'}>
            <MdBrightness4 />
            </Icon>

        </Box>


        <Box h={{base: 'auto', md: '180px'}} p={3} w={{base: '90%', sm:'90%'}} ml={3}>
            <Heading size={'3xl'} color={colorMode=== 'dark' ? 'black' : 'white'}>Mukoro Oghenetega</Heading>
            <Text fontSize={'sm'} color={colorMode=== 'dark' ? 'black' : 'white'}>@te_ga_mm</Text>
            <Text fontSize={'md'} pt={2} color={colorMode=== 'dark' ? 'black' : 'white'}>Aspiring Front-End Developer with hands-on experience in HTML, CSS, and JavaScript. Currently expanding skills in React and React Native.</Text>
        </Box>

        <Box h={{base: 'auto', md: '40px'}} w={{base: '90%', sm: '90%'}}  ml={6}>
            <Flex gap={8} align={'center'}>
            <Text fontSize={'sm'} color={colorMode=== 'dark' ? 'black' : 'white'}><b>10 </b>Points</Text>
            <Text fontSize={'sm'} color={colorMode=== 'dark' ? 'black' : 'white'}><b>10 </b>Friends</Text>
            <Text fontSize={'sm'} color={colorMode=== 'dark' ? 'gray' : 'white'}>Joined Apr 2025</Text>
            </Flex>

        </Box>

        <Box h={{base: 'auto', md: '100px'}} ml={3}>

            <Button size={'sm'} bg={'#5e60ce'} ml={3} _hover={{bg: '#4e50bd'}}>Contact Me</Button>

        </Box>

        </Stack>


    </Box>
        
    )


}


export default UserProfileCard2;
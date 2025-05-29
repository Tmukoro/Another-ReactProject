import { Box, Text, List, Button, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import pimg from './assets/pimg2.jpg';
import { useColorMode } from './components/ui/color-mode';

const UserProfileCard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg="white"
      w={350}
      borderRadius={15}
      margin={'auto'}
      marginTop={5}
      boxShadow="md"
      h={{ base: 'auto', md: '460' }}
    >
      <Box h={{ base: 'auto', md: '200px' }} bg={'white'} borderRadius={10}>
        <Image
          src={pimg}
          h="100%"
          width="100%"
          objectPosition="0% 10%"
          borderRadius={3}
        ></Image>
      </Box>

      <Box
        bg={'white'}
        h={{ base: 'auto', md: '230px' }}
        padding={3}
        className="INy"
      >
        <Heading size="xl" color="black">
          Mukoro Oghenetega
        </Heading>
        <Text fontSize="sm" color="#5e60ce" mb={1}>
          Junior Frontend Developer
        </Text>
        <Text textStyle="sm" marginTop={3} color={'black'}>
          Aspiring Front-End Developer with hands-on experience in HTML, CSS,
          and JavaScript. Currently expanding skills in React and React Native.
          Passionate about building user-friendly interfaces and responsive web
          applications. Based in Nigeria.
        </Text>
      </Box>

      <Box h={100} bg={'#5e60ce'}>
        <Button
          size="sm"
          width="100%"
          height="50%"
          color="white"
          bg="#5e60ce"
          _hover={{ bg: '#4e50bd' }}
        >
          Contact Me
        </Button>
        <Button size="sm" width="100%" height="50%" onClick={toggleColorMode}>
          Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfileCard;

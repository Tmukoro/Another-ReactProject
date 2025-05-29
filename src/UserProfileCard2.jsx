import {
  Box,
  Text,
  List,
  Button,
  Heading,
  Stack,
  Icon,
  Circle,
  Flex,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { MdBrightness4 } from 'react-icons/md';
import { useColorMode } from './components/ui/color-mode';

const UserProfileCard2 = ({fullName, username, profileImg, Bio, pointAmount, friendAmount}) => {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Box
      bg={colorMode === 'dark' ? 'white' : 'black'}
      transition={'all 0.3s'}
      w={{ base: '90%', sm: '450px' }}
      h={{ base: '470px', md: '450px' }}
      m={'auto'}
      mt={10}
      borderRadius={15}
      overflow={'hidden'}
      boxShadow={'md'}
    >
      <Stack>
        <Box
          h={{ base: 'auto', md: '140px' }}
          pt={2}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Image src={profileImg} borderRadius={'full'} width="30%" ml={5}></Image>

          <Icon
            size={'md'}
            color={colorMode === 'dark' ? 'black' : 'white'}
            mr={5}
            mt={3}
            onClick={toggleColorMode}
            cursor={'pointer'}
          >
            <MdBrightness4 />
          </Icon>
        </Box>

        <Box
          h={{ base: 'auto', md: '180px' }}
          p={3}
          w={{ base: '90%', sm: '90%' }}
          ml={3}
        >
          <Heading
            size={'3xl'}
            color={colorMode === 'dark' ? 'black' : 'white'}
          >
            {fullName}
          </Heading>
          <Text
            fontSize={'sm'}
            color={colorMode === 'dark' ? 'black' : 'white'}
          >
            @{username}
          </Text>
          <Text
            fontSize={'md'}
            pt={2}
            color={colorMode === 'dark' ? 'black' : 'white'}
          >
            {Bio}
          </Text>
        </Box>

        <Box
          h={{ base: 'auto', md: '40px' }}
          w={{ base: '90%', sm: '90%' }}
          ml={6}
        >
          <Flex gap={8} align={'center'}>
            <Text
              fontSize={'sm'}
              color={colorMode === 'dark' ? 'black' : 'white'}
            >
              <b>{pointAmount} </b>Points
            </Text>
            <Text
              fontSize={'sm'}
              color={colorMode === 'dark' ? 'black' : 'white'}
            >
              <b>{friendAmount} </b>Friends
            </Text>
            <Text
              fontSize={'sm'}
              color={colorMode === 'dark' ? 'gray' : 'white'}
            >
              Joined Apr 2025
            </Text>
          </Flex>
        </Box>

        <Box h={{ base: 'auto', md: '100px' }} ml={3}>
          <Button size={'sm'} bg={'#5e60ce'} ml={3} _hover={{ bg: '#4e50bd' }}>
            Contact Me
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserProfileCard2;
import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import { useRouter } from 'next/router';

const IMAGE =
'https://img.freepik.com/fotos-premium/estadio-futbol-gradas-llenas-fanaticos-esperando-juego-nocturno_207634-2644.jpg?w=740';


export default function PageCard({data}) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  console.log(router.query)
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              data.image || IMAGE
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              --
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {data.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2}>
            {data.description}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Box onClick={()=>router.push(`/deporte/${router.query.slug}/${data.slug}`)}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
          </Box>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            >
           
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}
import Layout from "@/components/Layout";
import Card from "../components/PageCard";
import SportCard from "@/components/SportCard";

import { getSession } from "next-auth/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

export default function Home() {
  const iterar = ["1", "2", "3", "4"];
  return (
    <Layout pagina="Inicio">
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>Bienvenido a DeporteTV</Heading>
            <Text mt="5">Enterate de todo lo que el deporte tiene para ofrecer</Text>
          </Stack>
        </Container>
      </Box>
      <Center>
        <Box maxW={"80%"} justify="center">
          <Flex alignItems={"center"} justify={"center"} wrap={"wrap"}>
            <SportCard />
          </Flex>
        </Box>
      </Center>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
}

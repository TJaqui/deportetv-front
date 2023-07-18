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
} from "@chakra-ui/react";
import axios from "axios";
import { StoreProvider } from "@/components/index-provider";

export default function Home(props) {
  const initialStore = {
    sports: props.sports,
  };

  return (
    <StoreProvider initialStore={initialStore}>
      <Layout pagina="Inicio">
        <Box bg={useColorModeValue("gray.100", "gray.700")}>
          <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
            <Stack spacing={0} align={"center"}>
              <Heading>Bienvenido a DeporteTV</Heading>
              <Text mt="5">
                Enterate de todo lo que el deporte tiene para ofrecer
              </Text>
            </Stack>
          </Container>
        </Box>
        <Center>
          <Box maxW={"80%"} justify="center">
            <Flex
              alignItems={"center"}
              justify={"center"}
              wrap={"wrap"}
              gap={6}
            >
              {props.sports.map((el, index) => {
                return <SportCard data={el} key={index} />;
              })}
            </Flex>
          </Box>
        </Center>
      </Layout>
    </StoreProvider>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  let sports;
  const sportResponse = await axios
    .get(`${process.env.NEXT_PUBLIC_BACK}/api/sports`)
    .then(function (response) {
      sports = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session, sports },
  };
}

import Layout from "@/components/Layout";
import PageCard from "@/components/PageCard";
import { getSession } from "next-auth/react";
import { Flex, Box, SimpleGrid, Center } from "@chakra-ui/react";


function Sport() {
  const iterar = ["1", "2", "3", "4"];
  return (
    <Layout pagina="deporte">
      <Center>
        <Box maxW={"80%"} justify="center">
          <Flex alignItems={"center"} justify={"center"} wrap={"wrap"}>
            {iterar.map((el, index) => {
              return <PageCard key={index} />;
            })}
          </Flex>
        </Box>
      </Center>
    </Layout>
  );
}
export default Sport;

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

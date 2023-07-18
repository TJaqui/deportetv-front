import Layout from "@/components/Layout";
import PageCard from "@/components/PageCard";
import { getSession } from "next-auth/react";
import { Flex, Box, Center } from "@chakra-ui/react";
import axios from "axios";


function Sport(props) {
  console.log(process.env.BACK_URL)
  const sportArr = [props.sports.section.match, props.sports.section.championship]
  return (
    <Layout pagina="deporte">
      <Center>
        <Box maxW={"80%"} justify="center">
          <Flex alignItems={"center"} justify={"center"} wrap={"wrap"}>
            {sportArr.map((el, index) => {
              return <PageCard key={index} data={el}/>;
            })}
          </Flex>
        </Box>
      </Center>
    </Layout>
  );
}
export default Sport;

export async function getServerSideProps({ req, params}) {
  const slug = params.slug
  
  const session = await getSession({ req });
  let sports;
   await axios
    .get(`${process.env.NEXT_PUBLIC_BACK}/api/sports`)
    .then(function (response) {
      for (let i in response.data){
        if(response.data[i].name === slug)
         sports = response.data[i];
      }
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
    props: { session, sports},
  };
}

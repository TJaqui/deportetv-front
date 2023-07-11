import Link from "next/link";
import styles from "../styles/Header.module.css";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
const Header = (props) => {
  const router = useRouter();
  const session = useSession()
  function handleSignOut(){
    signOut()
  }
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div></div>
        <nav>
          <Box w="100vw" h="75px" boxShadow="xl" color="white" bgColor={"blue.300"}>
            <Flex align={"center"} justify={"center"} >
              <Box
                borderX={"1px solid white"}
                h="75px"
                minW="7%"
                type="button"
                onClick={() => router.push("/")}
                p="15"
              >
                Inicio
              </Box>
              <Box
                borderRight={"1px solid white"}
                h="75px"
                minW="7%"
                type="button"
                onClick={() => router.push("/partidos")}
                p="15"
              >
                Partidos
              </Box>
              <Box
                borderRight={"1px solid white"}
                h="75px"
                minW="7%"
                type="button"
                onClick={() => router.push("/jugadores")}
                p="15"
              >
                Jugadores
              </Box>
              <Box
                borderRight={"1px solid white"}
                h="75px"
                minW="7%"
                type="button"
                onClick={() => router.push("/championships")}
                p="15"
              >
                Competencias
              </Box>
              <Spacer/>
              {!session &&  
              <Box
                borderRight={"1px solid white"}
                h="75px"
                w="7%"
                type="button"
                onClick={() => router.push("/login")}
                p="15"
              >
                Iniciar sesión
              </Box>}
              {session && (<Box
                borderRight={"1px solid white"}
                h="75px"
                minW="7%"
                type="button"
                onClick={handleSignOut}
                p="15"
              >
                Cerrar session
              </Box>)}
             
            </Flex>

          </Box>
        </nav>
      </div>
    </header>
  );
};

export default Header;

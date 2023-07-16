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
  const boxStyle ={
    borderX: "1px solid white",
                h:"75px",
                minW:"7%",
                type:"button",
                p:"15",
                fontWeight : "bold",
                ":hover" : {
                  cursor: "pointer",
                  bgColor: "blue.400"
                }
}

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div></div>
        <nav>
          <Box w="100vw" h="75px" boxShadow="xl" color="white" bgColor={"blue.500"}>
            <Flex align={"center"} justify={"center"} >
              <Box
                sx= {boxStyle}
                onClick={() => router.push("/")}
              >
                Inicio
              </Box>
              <Box
                sx= {boxStyle}
                onClick={() => router.push("/partidos")}
                
              >
                Partidos
              </Box>
              <Box
                sx= {boxStyle}
                onClick={() => router.push("/jugadores")}
        
              >
                Jugadores
              </Box>
              <Box
                sx= {boxStyle}
                onClick={() => router.push("/championships")} 
              >
                Competencias
              </Box>
              <Spacer/>
              {!session &&  
              <Box
              sx= {boxStyle}
                onClick={() => router.push("/login")}
              >
                Iniciar sesión
              </Box>}
              {session && (<Box
                sx= {boxStyle}
                onClick={handleSignOut}
                
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

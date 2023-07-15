import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { signIn, getSession} from "next-auth/react"
import { useRouter } from "next/router";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const onSubmit = async (data) =>{
    const status = await signIn('credentials',{
      redirect:false,
      email: data.email,
      password: data.password,
      callbackUrl:"/"
    })
    console.log(status)
    if(status.ok){
      router.push(status.url)
    }
  } 
  

  return (
    <Box
      backgroundColor="gray.200"
      minHeight="100vh"
      minW="100vw"
      align="center"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        as="form"
        boxShadow="lg"
        rounded="md"
        bg="white"
        maxWidth={"400px"}
        maxHeight={"500px"}
        align="center"
        p="12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box as="h1" fontWeight="600" fontSize="40px">
          Bienvenido
        </Box>
        <Box as="h1" fontWeight="600" color="gray.400">
          {" "}
          inicia sesión{" "}
        </Box>
        <Input
          type="email"
          placeholder="email"
          mt="2"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar tu correo
          </Box>
        )}
        <Input
          type="password"
          placeholder="password"
          mt="2"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar tu contraseña
          </Box>
        )}
        <Button type="submit" colorScheme="blue" mt="4">
          iniciar sesión
        </Button>

        <Box mt="4">
          Si aún no estás registrado{" "}
          <Box as="a" href="/signup" color="blue">
            {" "}
            Registrate aquí
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(session){
    return{
      redirect:{
        destination:'/'
      }
    }
    
  }
  return{
    props:{session}
  }
}
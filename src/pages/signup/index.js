import React, { useState } from "react";
import { Box, Button, Input, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { data: session } = useSession();
  const toast = useToast()
  const onSubmit = async (data) => {
    if (data.role === undefined || data.role === null) {
      data.role = "member";
    }
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        role: data.role,
      }),
    };
    await fetch(`${process.env.NEXT_PUBLIC_BACK}/api/registro`, options)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast({
            title: "Usuario registrado",
            description: "",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          router.push("/login");
        }
      });
  };

  return (
    <Box
      backgroundColor="gray.200"
      minHeight="100vh"
      minW="100vw"
      align="center"
    >
      <br />
      <br />
      <Box
        as="form"
        boxShadow="lg"
        rounded="md"
        bg="white"
        maxWidth={"400px"}
        minHeight={"400px"}
        align="center"
        p="12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box as="h1" fontWeight="600" fontSize="40px">
          Unete a la comunidad
        </Box>
        <Box as="h1" fontWeight="600" color="gray.400">
          {" "}
          Enterate de todo lo que el futbol tiene para ofrecer{" "}
        </Box>
        <Input
          type="text"
          placeholder="Nombre"
          mt="2"
          {...register("firstname", { required: true })}
        />
        {errors.firstname?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar un nombre
          </Box>
        )}
        <Input
          type="text"
          placeholder="Apellido"
          mt="2"
          {...register("lastname", { required: true })}
        />
        {errors.lastname?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar un apellido
          </Box>
        )}
        <Input
          type="email"
          placeholder="email"
          mt="2"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Necesitas ingresar un correo
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
            Necesitas ingresar una contraseña
          </Box>
        )}
        {session && (
          <>
            {session.user.role === "admin" && (
              <>
                <Select
                  placeholder="selecciona el rol"
                  {...register("role", { required: true })}
                >
                  <option value="admin">Admininistrador</option>
                  <option value="member">Usuario</option>
                </Select>
                {errors.role?.type === "required" && (
                  <Box textAlign="left" color="red" fontSize="xs">
                    Necesitas seleccionar un rol
                  </Box>
                )}
              </>
            )}
          </>
        )}

        <Button type="submit" colorScheme="blue" mt="4">
          Registrate
        </Button>
        
        <Box mt="4">
          Si ya tienes cuenta inicia sesión{" "}
          <Box as="a" href="/signup" color="blue">
            {" "}
            iniciar sesion
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SingUp;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    if (session.user.role !== "admin") {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
  }
  return {
    props: { session },
  };
}

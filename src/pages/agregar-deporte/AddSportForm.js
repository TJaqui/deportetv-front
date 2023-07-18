import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,

} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function AddSportForm() {
  const [show, setShow] = React.useState(0);
  const handleClick = () => setShow(cur => cur + 1);
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(33.333);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const  onSubmit = async (data) => {
    console.log(data);
    const options ={
      method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: data.name,
              description:data.description,
              image: data.image,
              section:{
                match:{
                  image:data.imageM,
                  description: data.descriptionM,
                  title: data.titleM,
                  slug: data.slugM
                },
                championship:{
                  image:data.imageC,
                  description: data.descriptionC,
                  title: data.titleC,
                  slug: data.slug
                }
              }
            })
    }
    await fetch('http://127.0.0.1:2021/api/registro-deporte',options).then(res=>res.json())
    .then((result) => {if(result.message === "deporte registrado"){router.push("/")} })
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 0 &&(
          <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Agregar un deporte
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={"normal"}>
              Nombre
            </FormLabel>
            <Input
              id="first-name"
              placeholder="nombre"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="last-name" fontWeight={"normal"}>
              Imagen
            </FormLabel>
            <Input
              id="last-name"
              placeholder="Url de imagen"
              {...register("image", { required: true })}
            />
              {errors.image?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            Descripción
          </FormLabel>
          <Textarea
            id="email"
            {...register("description", { required: true })}
          />
            {errors.description?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>
        </>
      ) }
      {step === 1 &&(
          <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Edita las secciones
        </Heading>
        <Box fontSize={20} fontWeight={600}>
        Competiciones

        </Box>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Titulo 
          </FormLabel>
          
          <Input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("titleC",{required:true})}
          />
            {errors.titleC?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Descripción
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("descriptionC",{required:true})}
          />
            {errors.descriptionC?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="state"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Imagen
          </FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("imageC",{required:true})}
          />
            {errors.imageC?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Direccion
          </FormLabel>
          <Input
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("slug",{required:true})}
          />
            {errors.slug?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>
        </>
      ) }
      {step === 2 &&(
          <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Edita las secciones
        </Heading>
        <Box fontSize={20} fontWeight={600}>
        Partidos

        </Box>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Titulo 
          </FormLabel>
          <Input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("titleM",{required:true})}
          />
            {errors.titleM?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Descripción
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("descriptionM",{required:true})}
          />
            {errors.descriptionM?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="state"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Imagen
          </FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("imageM",{required:true})}
          />
            {errors.imageM?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Direccion
          </FormLabel>
          <Input
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register("slugM",{required:true})}
          />
            {errors.slugM?.type === "required" && (
          <Box textAlign="left" color="red" fontSize="xs">
            Campo requerido
          </Box>
        )}
        </FormControl>
        </>
      ) }
       
       
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 0}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                type="submit"
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default AddSportForm;

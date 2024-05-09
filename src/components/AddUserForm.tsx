import { useState } from "react";

import { Input, VStack, Heading, Flex, Button } from "@chakra-ui/react";

import { AiOutlineUsergroupAdd } from "react-icons/ai";

import { useRegisterUser } from "../hooks/useRegisterUser";

export const AddUserForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { handleRegisterUser } = useRegisterUser();

  return (
    <Flex justifyContent={"center"}>
      <VStack width={"40%"} justifyContent={"center"}>
        <Heading as="h2" size="lg" textAlign={"center"} mb={"30px"}>
          User
        </Heading>

        <VStack
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          p={"7"}
          width={"80%"}
          minW={"300px"}
        >
          <Input
            placeholder="Name"
            variant="flushed"
            focusBorderColor="yellow.400"
            autoComplete={"on"}
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />

          <Input
            placeholder="Username"
            variant="flushed"
            focusBorderColor="yellow.400"
            autoComplete={"on"}
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />

          <Input
            type="email"
            placeholder="Email"
            variant="flushed"
            focusBorderColor="yellow.400"
            autoComplete={"on"}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          <Button
            colorScheme="gray"
            variant="solid"
            width={"100%"}
            minW={"260px"}
            mt={"20px"}
            type="submit"
            rightIcon={<AiOutlineUsergroupAdd color="green" />}
            onClick={() => handleRegisterUser(inputs)}
          >
            Add to my List of Users
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

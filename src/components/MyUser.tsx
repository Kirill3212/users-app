import { VStack, Text, Image, Flex, Box } from "@chakra-ui/react";
import { IoCloseCircleSharp } from "react-icons/io5";

import { IUser } from "../types";

import { useAppDispatch } from "../hooks";
import { removeUser } from "../store/usersSlice";

interface MyUserProps {
  user: IUser;
}

export const MyUser = ({ user }: MyUserProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveUser = () => {
    dispatch(removeUser(user));
  };

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      gap={"15px"}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      p={6}
      mt={"18px"}
      width={"300px"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={"10px"}
        right={"10px"}
        onClick={handleRemoveUser}
        cursor={"pointer"}
        color={"#b31d1d"}
      >
        <IoCloseCircleSharp size={"18"} />
      </Box>

      <Image
        src={`https://avatar.iran.liara.run/public/?username=${user.name}`}
        alt={"user photo"}
        boxSize="85px"
      />
      <VStack alignItems={"left"}>
        <Box display={"flex"} gap={"5px"}>
          <Text color={"yellow.500"}>Name: </Text>
          {user.name}
        </Box>
        <Box display={"flex"} gap={"5px"}>
          <Text color={"yellow.500"}>Username: </Text>
          {user.username}
        </Box>
        <Box display={"flex"} gap={"5px"}>
          <Text color={"yellow.500"}>Email: </Text>
          {user.email}
        </Box>
      </VStack>
    </Flex>
  );
};

import { Box, Flex, Image, Text, Link, Button } from "@chakra-ui/react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
import userImg from "../assets/user.png";

import { IUser } from "../types";

import { useAddRemoveUser } from "../hooks/useAddRemoveUser";

interface UserProps {
  user: IUser;
}

export const User = ({ user }: UserProps) => {
  const { handleAddUser, handleRemoveUser, userExists } =
    useAddRemoveUser(user);

  return (
    <>
      <Flex
        flexDirection={"column"}
        gap={"15px"}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        p={6}
        mt={"18px"}
        position={"relative"}
      >
        {userExists ? (
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
        ) : null}

        <Flex
          align="center"
          justify="space-between"
          width={"50%"}
          minWidth={"600px"}
          gap={"10px"}
        >
          {/* User Image Block */}
          <Flex align="center" minWidth={"250px"}>
            <Image src={userImg} alt={"user photo"} boxSize="85px" />
            <Box ml={"20px"}>
              <Text fontWeight="bold" fontSize="xl">
                {user.name}
              </Text>
              <Text color="gray.500" fontSize="md">
                @{user.username}
              </Text>
            </Box>
          </Flex>

          {/* User Info Block */}
          <Flex direction="column" align="end">
            <Text color={"yellow.500"}>
              Email:{" "}
              <Link color="gray.500" mb={2}>
                {user.email}
              </Link>
            </Text>

            <Text color={"yellow.500"}>
              Website: <Link color="gray.500">{user.website}</Link>
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent={"flex-end"}>
          <Button
            width={"30%"}
            rightIcon={<AiOutlineUsergroupAdd color="green" />}
            onClick={handleAddUser}
          >
            Add to My List
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

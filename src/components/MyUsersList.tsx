import { Heading, Text, Link, Flex, Image, VStack } from "@chakra-ui/react";
import tumbleweedImg from "../assets/tumbleweed.gif";

import { PATH_PAGE } from "../constants";

import { useAppSelector, useAppDispatch } from "../hooks";
import { getUsers, clearUsers } from "../store/usersSlice";

import { Link as RouterLink } from "react-router-dom";

import { MyUser } from "./MyUser";

export const MyUsersList = () => {
  const users = useAppSelector(getUsers);
  const dispatch = useAppDispatch();

  return (
    <>
      <Heading as="h2" size="lg" textAlign={"center"} mb={"10px"}>
        My Users
      </Heading>

      <VStack>
        {users.length > 0 ? (
          <>
            <Text
              mt={"20px"}
              color={"#b31d1d"}
              cursor={"pointer"}
              onClick={() => dispatch(clearUsers())}
            >
              Clear All
            </Text>
            <Flex justifyContent={"center"} gap={"20px"} flexWrap={"wrap"}>
              {users.map((user) => (
                <MyUser key={user.username} user={user} />
              ))}
            </Flex>
          </>
        ) : (
          <VStack>
            <Text textAlign={"center"} mt={"30px"} mb={"10px"}>
              There is nobody here, let's add someone.
              <Link
                as={RouterLink}
                to={PATH_PAGE.adduser}
                ml={"10px"}
                color={"green"}
                fontWeight={"500"}
              >
                Go
              </Link>
            </Text>
            <Image
              src={tumbleweedImg}
              width={"320px"}
              borderRadius={"20px"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
              }
            />
          </VStack>
        )}
      </VStack>
    </>
  );
};

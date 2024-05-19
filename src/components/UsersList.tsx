import { useFetchData } from "../hooks/usefetchData";
import { URL_USERS } from "../constants";
import { User } from "./User";
import { IUser } from "../types";
import { Spinner, Heading, Box, Flex } from "@chakra-ui/react";

export const UsersList = () => {
  const { data: users, isLoading, error } = useFetchData(URL_USERS);

  return (
    <>
      <Heading as="h2" size="lg" textAlign={"center"}>
        Users
      </Heading>

      <Box textAlign={"center"} mt={"60px"}>
        {isLoading && <Spinner size="lg" />}
        {error && <>Sorry, something went wrong</>}
      </Box>

      <Flex
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        {users &&
          !error &&
          users.map((user: IUser) => <User key={user.id} user={user} />)}
      </Flex>
    </>
  );
};

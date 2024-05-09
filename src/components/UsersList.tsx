import { useFetchUsers } from "../hooks/usefetchUsers";
import { URL } from "../constants";
import { User } from "./User";
import { Spinner, Heading, Box, Flex } from "@chakra-ui/react";

export const UsersList = () => {
  const { users, isLoading, error } = useFetchUsers(URL);

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
          users.map((user) => <User key={user.id} user={user} />)}
      </Flex>
    </>
  );
};

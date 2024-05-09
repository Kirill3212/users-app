import { FaUsers } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
        backgroundColor={"grey"}
        color={"black"}
        width={"150px"}
        p={"5px"}
      >
        <FaUsers size={"23"} color="rgb(223, 223, 223)" />
        <Text color={"rgb(223, 223, 223)"}>Users App</Text>
      </Flex>
    </header>
  );
};

export default Header;

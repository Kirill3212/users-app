import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Flex justifyContent={"space-between"} mr={"20px"}>
        <Text color="grey">Footer</Text>
        <Flex gap={"5"}>
          <Flex
            cursor={"pointer"}
            transition={"0.3s"}
            borderRadius={"50%"}
            border={"none"}
            _hover={{ backgroundColor: "#F6C52E" }}
          >
            <Link to={"https://t.me/kirillTerekhin1"}>
              <FaTelegram color="grey" size={"25"} />
            </Link>
          </Flex>

          <Flex
            cursor={"pointer"}
            transition={"0.3s"}
            borderRadius={"50%"}
            border={"none"}
            _hover={{ backgroundColor: "#F6C52E" }}
          >
            {" "}
            <Link to={"https://github.com/Kirill3212"}>
              <FaGithub color="grey" size={"25"} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;

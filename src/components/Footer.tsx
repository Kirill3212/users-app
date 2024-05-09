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
          <Link to={"https://t.me/kirillTerekhin1"}>
            <FaTelegram color="grey" size={"22"} cursor={"pointer"} />
          </Link>
          <Link to={"https://github.com/Kirill3212"}>
            <FaGithub color="grey" size={"22"} cursor={"pointer"} />
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;

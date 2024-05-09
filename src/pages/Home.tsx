import { useState } from "react";

import { Flex, Button, Image, VStack } from "@chakra-ui/react";

import { MdSupervisedUserCircle } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { LuUserPlus } from "react-icons/lu";

import spiderImg from "../assets/spider.gif";
import explosionImg from "../assets/explosion.gif";

import { Outlet, Link } from "react-router-dom";

const Home = () => {
  const [web, setWeb] = useState(true);
  const [explosion, setExplosion] = useState(false);

  const handleDeleteWeb = () => {
    setTimeout(() => {
      setExplosion(true);
      setTimeout(() => {
        setExplosion(false);
      }, 300);
      setWeb(false);
    }, 1200);
  };

  return (
    <div className="layout">
      <VStack position={"relative"}>
        {/* Spider */}
        <VStack
          position={"absolute"}
          top={"-37px"}
          right={"-35px"}
          cursor={"pointer"}
        >
          {web && <Image src={spiderImg} onClick={handleDeleteWeb} />}
          {explosion && <Image src={explosionImg} width={"100px"} />}
        </VStack>

        {/* Buttons Nav */}
        <Flex justifyContent={"center"} gap={"10px"} mb={"50px"}>
          <Link to={"addUser"}>
            <Button
              rightIcon={<LuUserPlus />}
              colorScheme="yellow"
              variant="solid"
              minW={"180px"}
            >
              Add User
            </Button>
          </Link>

          <Link to={"users"}>
            <Button
              rightIcon={<FaUserFriends />}
              colorScheme="yellow"
              variant="solid"
              minW={"180px"}
            >
              Show List of Users
            </Button>
          </Link>

          <Link to={"myUsers"}>
            <Button
              rightIcon={<MdSupervisedUserCircle />}
              colorScheme="yellow"
              variant="solid"
              minW={"180px"}
            >
              My List of Users
            </Button>
          </Link>
        </Flex>
      </VStack>

      <Outlet />
    </div>
  );
};

export default Home;

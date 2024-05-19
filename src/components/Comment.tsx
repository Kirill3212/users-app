import { Heading, Flex, Box, Avatar, Text } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";
import { IComment } from "../types";

interface CommentProps {
  comment: IComment;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
      transition="all 0.3s ease"
      width={"850px"}
      mb={"30px"}
    >
      <Flex justifyContent={"space-between"} mb={4}>
        <Flex alignItems="center">
          <Avatar
            name={comment.name}
            src={`https://avatar.iran.liara.run/public/?username=${comment.name}`}
            mr={4}
          />
          <Heading size="md">{comment.name}</Heading>
        </Flex>
        <Flex
          gap={"5px"}
          alignItems={"center"}
          p={"5px 10px"}
          borderRadius={"20px"}
          backgroundColor={"#ededed"}
          cursor={"pointer"}
        >
          <IoHeart size={"20px"} color="red" />
          {Math.floor(Math.random() * 100 + 1)}
        </Flex>
      </Flex>
      <Text color="gray.600" mb={4}>
        {comment.email}
      </Text>
      <Text>{comment.body}</Text>
    </Box>
  );
};

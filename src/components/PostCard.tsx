import { useState } from "react";

import {
  Heading,
  Flex,
  Box,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { IPost } from "../types";

interface PostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [showMore, setShowMore] = useState(false);

  const selectionBg = useColorModeValue("black", "black");
  const selectionColor = useColorModeValue("white", "white");

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Flex
      bg="white"
      boxShadow="lg"
      rounded="md"
      overflow="hidden"
      mb={6}
      _hover={{ transform: "translateY(-1px)", boxShadow: "xl" }}
      transition="all 0.3s ease"
      width={"300px"}
      height={"250px"}
    >
      <Box
        bg="gray.100"
        px={6}
        py={8}
        fontWeight="bold"
        fontSize="4xl"
        display={"flex"}
        alignItems={"center"}
      >
        {post.id}
      </Box>
      <Flex
        justifyContent={"space-between"}
        flexDirection={"column"}
        p={"15px"}
      >
        <VStack>
          <Heading size="md" mb={2}>
            {post.title}
          </Heading>

          <Text
            color="gray.500"
            // noOfLines={3}
            height={"100px"}
            _selection={{
              backgroundColor: selectionBg,
              color: selectionColor,
            }}
            overflowX={"hidden"}
            overflowY={showMore ? "scroll" : "hidden"}
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                backgroundColor: "gray.200",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray.400",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "gray.500",
              },
              "&::-webkit-scrollbar-corner": {},
            }}
          >
            {post.body}
          </Text>
        </VStack>

        {post.body.length > 100 && (
          <Text
            onClick={handleShowMore}
            cursor="pointer"
            color="purple.500"
            fontSize="sm"
          >
            {showMore ? "Show less" : "Show more"}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

import { Heading, Flex, Box, Spinner, VStack } from "@chakra-ui/react";

import { IPost } from "../types";
import { URL_POSTS } from "../constants";
import { useFetchData } from "../hooks/usefetchData";
import { PostCard } from "./PostCard";

export const PostsList = () => {
  const { data: posts, isLoading, error } = useFetchData(URL_POSTS);
  console.log(posts);
  return (
    <VStack>
      <Heading as="h2" size="lg" textAlign={"center"}>
        Posts
      </Heading>

      <Box textAlign={"center"} mt={"60px"}>
        {isLoading && posts.length == 0 && <Spinner size="lg" />}
        {error && <>Sorry, something went wrong</>}
      </Box>

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"15px"}
      >
        {posts &&
          !error &&
          posts.map((post: IPost) => <PostCard key={post.id} post={post} />)}
      </Flex>
    </VStack>
  );
};

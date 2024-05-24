import { useState } from "react";
import { Comment } from "./Comment";
import { IComment } from "../types";
import { URL_COMMENTS } from "../constants";
import { useFetchData } from "../hooks/usefetchData";
import {
  Heading,
  Flex,
  Box,
  Spinner,
  VStack,
  Button,
  Progress,
} from "@chakra-ui/react";

export const CommentsList = () => {
  const [pageToDisplay, setPageToDisplay] = useState(0);
  const pages = [1, 2, 3, 4, 5];
  const commentsToDisplay = 7;

  const {
    data: comments,
    isLoading,
    error,
  } = useFetchData(
    URL_COMMENTS +
      `?_start=${pageToDisplay * commentsToDisplay}&_end=${
        pageToDisplay * commentsToDisplay + commentsToDisplay
      }`
  );

  return (
    <VStack>
      <Heading as="h2" size="lg" textAlign={"center"}>
        Comments
      </Heading>

      <Box textAlign={"center"} mt={"60px"}>
        {isLoading && comments.length == 0 && <Spinner size="lg" />}
        {error && <>Sorry, something went wrong</>}
      </Box>

      <Flex
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        {comments &&
          !error &&
          comments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </Flex>

      {comments.length > 0 && (
        <Flex width={"100%"} justifyContent={"center"}>
          {pages.map((page, i) => {
            return (
              <VStack key={i} position={"relative"}>
                {pageToDisplay === i && isLoading && (
                  <Progress
                    width={"20px"}
                    size="xs"
                    position={"absolute"}
                    bottom={"50px"}
                    left={"10px"}
                    color={"yellow"}
                    isIndeterminate
                    colorScheme="yellow"
                  />
                )}
                <Button
                  size={"50px"}
                  p={"10px"}
                  m={"5px"}
                  onClick={() => setPageToDisplay(i)}
                  colorScheme={pageToDisplay === i ? "yellow" : "gray"}
                >
                  {page}
                </Button>
              </VStack>
            );
          })}
        </Flex>
      )}
    </VStack>
  );
};

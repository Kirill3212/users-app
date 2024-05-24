import { useState } from "react";
import { createPortal } from "react-dom";

import { Flex, Text, VStack, Image, Box } from "@chakra-ui/react";

import { BsFillPatchQuestionFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

import guyWithLaptopImg from "../assets/questionModal/guyWithLaptop.gif";
import correctAnswerImg from "../assets/questionModal/thatIsCorrect.png";
import wrongAnswerImg from "../assets/questionModal/thatIsWrong.png";

import correctSound from "../assets/questionModal/correctSound.mp3";
import wrongSound from "../assets/questionModal/wrongSound.mp3";

export const QuestionModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const targetNode = document.querySelector(".app-wrapper");

  const handleCorrect = () => {
    if (!isWrong) {
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(false);
        setShowModal(false);
      }, 1800);
    }
  };

  const handleWrong = () => {
    if (!isCorrect) {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 1800);
    }
  };

  return (
    <Flex alignItems={"center"} marginLeft={"15px"} cursor={"pointer"}>
      <BsFillPatchQuestionFill size={"20"} onClick={() => setShowModal(true)} />
      {showModal &&
        createPortal(
          <>
            <Box
              width="100%"
              height="100%"
              backgroundColor={"black"}
              position={"absolute"}
              opacity={"0.5"}
            />
            <VStack
              width={"355px"}
              backgroundColor={"#2b2b2b"}
              borderRadius={"xl"}
              position={"absolute"}
              left={"50%"}
              top={"320px"}
              transform={"translate(-50%, -50%)"}
            >
              <Text color={"white"} mt={"10px"}>
                Will you hire me ? &#128516;
              </Text>
              <Image src={guyWithLaptopImg} width={"100%"} />

              {isCorrect && (
                <>
                  <audio src={correctSound} autoPlay={true} />
                  <Image
                    src={correctAnswerImg}
                    position={"absolute"}
                    bottom={"45px"}
                    height={"30px"}
                  />
                </>
              )}

              {isWrong && (
                <>
                  <audio src={wrongSound} autoPlay={true} />
                  <Image
                    src={wrongAnswerImg}
                    position={"absolute"}
                    bottom={"45px"}
                    height={"30px"}
                  />
                </>
              )}

              {/* Answer panel */}
              <Flex
                width={"70%"}
                justifyContent={"space-around"}
                mb={"10px"}
                borderRadius={"20px"}
                backgroundColor={"white"}
              >
                <Flex
                  alignItems={"center"}
                  gap={"5px"}
                  cursor={"pointer"}
                  onClick={handleCorrect}
                >
                  <IoIosCheckmarkCircle color="green" size={"20px"} />
                  <Text color={"grey"}>Yes</Text>
                </Flex>

                <Flex
                  alignItems={"center"}
                  gap={"5px"}
                  cursor={"pointer"}
                  onClick={handleWrong}
                >
                  <IoMdCloseCircle color="red" size={"20px"} />
                  <Text color={"grey"}>No</Text>
                </Flex>
              </Flex>
            </VStack>
          </>,
          targetNode as HTMLDivElement
        )}
    </Flex>
  );
};

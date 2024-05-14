import { useState } from "react";
import { createPortal } from "react-dom";

import { Flex, Text, VStack, Image } from "@chakra-ui/react";

import { BsFillPatchQuestionFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

import guyWithLaptopImg from "../assets/questrionModal/guyWithLapltop.gif";
import correctAnswerImg from "../assets/questrionModal/thatIsCorrect.png";
import wrongAnswerImg from "../assets/questrionModal/thatIsWrong.png";

import correctSound from "../assets/questrionModal/correctSound.mp3";
import wrongSound from "../assets/questrionModal/wrongSound.mp3";

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
          <VStack
            width={"300px"}
            backgroundColor={"grey"}
            borderRadius={"xl"}
            position={"absolute"}
            left={"50%"}
            top={"320px"}
            transform={"translate(-50%, -50%)"}
          >
            <Text color={"white"} mt={"10px"}>
              Are you a cool programmer ? :)
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
              width={"80%"}
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
          </VStack>,
          targetNode as HTMLDivElement
        )}
    </Flex>
  );
};

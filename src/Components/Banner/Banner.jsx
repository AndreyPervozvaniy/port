import { Flex, Icon, Text, Link } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const router = useNavigate();
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems="center"
      w={"full"}
      mt={"50px"}
      mb={"50px"}
    >
      <Text color={"grey"} fontSize={"sm"}>
        NEED A FRONTEND?
      </Text>
      <Link isExternal>
        <Flex
          fontWeight={"bold"}
          fontSize={"5xl"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => router("/contact")}
        >
          <Text> Let's work together</Text>
          <Icon as={IoIosArrowRoundForward} />
        </Flex>
      </Link>
    </Flex>
  );
};

export default Banner;

import { Flex, Link, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const LinkBtns = ({ netlify, git }) => {
  return (
    <Flex flexDir={"column"}>
      <Link href={netlify} isExternal>
        <Flex alignItems={"center"} _hover={{ textDecor: "underline" }}>
          <Text color={"grey"} fontSize={"md"}>
            Visit project
          </Text>
          <Icon as={IoIosArrowRoundForward} color={"grey"} />
        </Flex>{" "}
      </Link>{" "}
      <Link href={git} isExternal>
        <Flex alignItems={"center"} _hover={{ textDecor: "underline" }}>
          <Text color={"grey"} fontSize={"md"}>
            Visit repository
          </Text>
          <Icon as={IoIosArrowRoundForward} color={"grey"} />
        </Flex>{" "}
      </Link>
    </Flex>
  );
};

export default LinkBtns;

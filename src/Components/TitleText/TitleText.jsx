import React from "react";
import { Flex, Text } from "@chakra-ui/react";
const TitleText = ({ text, title, text2 }) => {
  return (
    <Flex flexDir={"column"}>
      <Text color={"grey"}>{text}</Text>
      <Text fontWeight={"extrabold"} fontSize={"6xl"}>
        {title}
      </Text>
      <Text color={"grey"}>{text2}</Text>
    </Flex>
  );
};

export default TitleText;

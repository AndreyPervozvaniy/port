import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
const TypewriterComponent = ({ text }) => {
  return (
    <Flex fontFamily={"Montserrat"}>
      <Text fontWeight={"bold"}>
        <Typewriter words={text} loop="true" delaySpeed={"500"} />
      </Text>
    </Flex>
  );
};

export default TypewriterComponent;

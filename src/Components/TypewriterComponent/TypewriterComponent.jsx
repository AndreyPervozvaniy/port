import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
const TypewriterComponent = () => {
  return (
    <Flex>
      <Text fontWeight={"bold"}>
        <Typewriter
          words={["Code", "or", "Die=)"]}
          loop="true"
          delaySpeed={"500"}
        />
      </Text>
    </Flex>
  );
};

export default TypewriterComponent;

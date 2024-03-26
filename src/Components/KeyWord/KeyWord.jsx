import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

const KeyWord = ({ text, route }) => {
  const router = useNavigate();
  return (
    <Flex>
      <Text
        fontWeight={"bold"}
        _hover={{
          textDecoration: "underline 2px",
          transition: "all 0.3s ease-in-out",
        }}
        cursor={"pointer"}
        onClick={() => router(route)}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default KeyWord;

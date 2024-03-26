import React from "react";
import { Box, keyframes } from "@chakra-ui/react";
const ScrollIcon = () => {
  const wheelAnimation = keyframes`
      to {
        opacity: 0;
        top: 20px;
      }
    `;
  return (
    <Box
      w="35px"
      h="55px"
      borderWidth="3px"
      borderColor="#333"
      borderRadius="60px"
      position="relative"
    >
      <Box
        w="2px"
        h="12px"
        bg="#333"
        opacity="1"
        position="absolute"
        top="10px"
        left="50%"
        transform="translateX(-50%)"
        animation={`${wheelAnimation} 2s infinite`}
        webkitAnimation={`${wheelAnimation} 2s infinite`}
      ></Box>
    </Box>
  );
};

export default ScrollIcon;

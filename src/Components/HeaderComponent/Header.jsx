import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Logo.png";
import TypewriterComponent from "../TypewriterComponent/TypewriterComponent";
const Header = () => {
  return (
    <Flex border={"1px solid red"} w={"full"} p={2}>
      <Image src={Logo} w={"250px"} />
      <TypewriterComponent />
    </Flex>
  );
};

export default Header;

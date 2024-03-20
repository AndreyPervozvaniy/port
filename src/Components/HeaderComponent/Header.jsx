import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Logo.png";
import TypewriterComponent from "../TypewriterComponent/TypewriterComponent";
import { navLinks } from "../../Utills/utills";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {
  const router = useNavigate();
  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (event.ctrlKey && ["1", "2", "3"].includes(key)) {
      event.preventDefault();
      const routes = {
        1: "/product",
        2: "/contact",
        3: "/skills",
      };
      router(routes[key]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Flex
      w={"full"}
      p={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px solid #ccc"}
    >
      <Flex>
        {" "}
        <Image
          src={Logo}
          w={"250px"}
          onClick={() => router("/")}
          cursor={"pointer"}
        />
        <TypewriterComponent text={["Code", "or", "die"]} />
      </Flex>
      <Flex justifyContent={"space-around"} w={"30%"}>
        {navLinks.map((item, index) => (
          <Flex
            key={index}
            onClick={() => router(item.path)}
            cursor={"pointer"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Flex _hover={{ textDecor: "underline" }}>
              <Text fontWeight={"bold"}>{item.name}</Text>
            </Flex>
            <Flex mt={1}>{item.keyComb}</Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;

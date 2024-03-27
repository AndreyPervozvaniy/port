import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Logo.png";
import TypewriterComponent from "../TypewriterComponent/TypewriterComponent";
import { navLinks } from "../../Utills/utills";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const router = useNavigate();
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleKeyDown = (event) => {
    const key = event.key;
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
      p={2}
      justifyContent={"space-between"}
      pos="fixed"
      w="100%"
      zIndex="11"
      top="0"
      background="white"
      left="0"
      alignItems={"center"}
      boxShadow={showShadow ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"}
    >
      <Flex>
        {" "}
        <Image
          src={Logo}
          w={"250px"}
          onClick={() => router("/")}
          cursor={"pointer"}
          _hover={{ opacity: "60%" }}
        />
        <TypewriterComponent text={["Code", "or", "Die..."]} />
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

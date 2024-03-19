import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Logo.png";
import TypewriterComponent from "../TypewriterComponent/TypewriterComponent";
import { navLinks } from "../../Utills/utills";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const router = useNavigate()
  return (
    <Flex   w={"full"} p={2} justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #ccc'}>
      <Flex>  <Image src={Logo} w={"250px"} />
      <TypewriterComponent /></Flex>
      <Flex justifyContent={'space-around'} w={'30%'}>
        {navLinks.map((item,index)=>(
          <Flex key={index} onClick={()=>router(item.path)} cursor={'pointer'} _hover={{textDecor:'underline'}}>
            <Text fontWeight={'bold'}>{item.name}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;

import { Container, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { ContactDescription, SocialLink } from "../../Utills/utills";
import LinkBtns from "../../Components/LinkBtns/LinkBtns";
import { FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Flex flexDir={"column"}>
      <Header />
      <Flex justifyContent={"center"} mt={"20px"}>
        <Text w={"60%"} textAlign={"center"} fontWeight={"bold"}>
          {ContactDescription.desc}
        </Text>
      </Flex>
      <Container maxW={"7xl"} mt={12}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={6}>
          {SocialLink.map((item, index) => (
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={`2px solid ${item.color}`}
              borderRadius={"10px"}
              textAlign={"center"}
              p={5}
              key={index}
              flex={1}
            >
              <Text fontWeight={"bold"}>{item.title}</Text>
              <Icon as={item.icon} w={10} h={10} mt={5} />
              <Text mt={5} fontWeight={"bold"}>
                {item.text}
              </Text>
              <LinkBtns mt={5} href={item.link} icon={FaExternalLinkAlt} />
            </Flex>
          ))}{" "}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Contact;

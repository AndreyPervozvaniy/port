import { Container, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { ContactDescription, SocialLink } from "../../Utills/utills";
import LinkBtns from "../../Components/LinkBtns/LinkBtns";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../../Components/FooterComponent/Footer";

const Contact = () => {
  return (
    <Flex flexDir={"column"} fontFamily={"Montserrat"}>
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
              w={"sm"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              border={`2px solid ${item.color}`}
              borderRadius={"10px"}
              textAlign={"center"}
              p={5}
              key={index}
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
      <Footer />
    </Flex>
  );
};

export default Contact;

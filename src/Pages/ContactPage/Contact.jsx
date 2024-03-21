import {
  Container,
  Flex,
  Icon,
  Link,
  Text,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { ContactDescription, SocialLink } from "../../Utills/utills";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <Flex flexDir={"column"}>
      <Header />
      <Flex justifyContent={"center"} mt={"20px"}>
        <Text w={"60%"} textAlign={"center"}>
          {ContactDescription.desc}
        </Text>
      </Flex>
      <Container maxW={"5xl"} mt={12}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={6}>
          {SocialLink.map((item, index) => (
            <Flex
              flexDir={"column"}
              justify={"center"}
              alignItems={"center"}
              border={`2px solid ${item.color}`}
              borderRadius={"10px"}
              textAlign={"center"}
              p={5}
              key={index}
            >
              <Text fontWeight={"bold"}>{item.title}</Text>
              <Icon as={item.icon} w={10} h={10} />
              <Text>{item.text}</Text>
              <Link isExternal href={item.link}>
                <Button>Перейти</Button>
              </Link>
            </Flex>
          ))}{" "}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Contact;

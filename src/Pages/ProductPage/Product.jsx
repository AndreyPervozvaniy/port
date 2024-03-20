import { Text, Flex, Image, Button, Link, Icon } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { ProductData } from "../../Utills/utills";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import FeedBackForm from "../../Components/FeedbackForm/FeedBackForm";

const Product = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} textAlign={"center"}>
      <Header />
      <Flex justifyContent={"center"} mt={"20px"}>
        <Text w={"60%"} textAlign={"center"}>
          Greetings, my name is Andrey and I am a beginner frontend developer. I
          would like to share with you several projects that I have been working
          on. Please find below the links to each project as well as their
          respective Git repositories. Thank you for taking the time to review
          my work. I would be grateful for any feedback, suggestions, or tips
          that you may have!
        </Text>
      </Flex>{" "}
      <Text mt={"20px"} fontWeight={"bold"}>
        My product:
      </Text>
      <Flex justify={"space-around"} mt={"20px"}>
        {ProductData.map((item, index) => (
          <Flex
            border="2px solid black"
            borderRadius={"10px"}
            key={index}
            flexDir={"column"}
            justifyContent={"center"}
            textAlign={"center"}
            p={2}
          >
            <Link href={item.netlifyLink} isExternal>
              <Image src={item.image} w={"350px"} cursor={"pointer"} />
            </Link>
            <Text mt={5} fontWeight={"bold"}>
              {item.name}
            </Text>
            <Flex justifyContent={"space-around"} mt={5}>
              <Link href={item.netlifyLink} isExternal>
                <Button>
                  <Icon as={SiNetlify} w={10} h={5} />
                </Button>
              </Link>
              <Link href={item.gitLink} isExternal>
                <Button>
                  <Icon as={FaGithub} w={10} h={5} />
                </Button>
              </Link>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Text mt={"20px"} fontWeight={"bold"}>
        Your feedback:
      </Text>
      <FeedBackForm />
    </Flex>
  );
};

export default Product;

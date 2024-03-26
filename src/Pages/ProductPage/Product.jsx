import { Text, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { ProductData, ProductDescription } from "../../Utills/utills";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import FeedBackForm from "../../Components/FeedbackForm/FeedBackForm";
import LinkBtns from "../../Components/LinkBtns/LinkBtns";
import Footer from "../../Components/FooterComponent/Footer";

const Product = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      fontFamily={"Montserrat"}
    >
      <Header />
      <Flex justifyContent={"center"} mt={"20px"}>
        <Text w={"60%"} textAlign={"center"} fontWeight={"bold"}>
          {ProductDescription.description}
        </Text>
      </Flex>{" "}
      <Text mt={"20px"} fontWeight={"bold"}>
        {ProductDescription.title1}
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
              <Image
                src={item.image}
                w={"350px"}
                cursor={"pointer"}
                loading="eager"
              />
            </Link>
            <Text mt={5} fontWeight={"bold"}>
              {item.name}
            </Text>

            <Flex justifyContent={"space-around"} mt={5}>
              <LinkBtns href={item.netlifyLink} icon={SiNetlify} />
              <LinkBtns href={item.gitLink} icon={FaGithub} />
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Text mt={"20px"} fontWeight={"bold"}>
        {ProductDescription.title2}
      </Text>
      <FeedBackForm />
      <Footer />
    </Flex>
  );
};

export default Product;

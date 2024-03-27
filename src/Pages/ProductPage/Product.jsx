import { Text, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { ProductDescription } from "../../Utills/utills";
import FeedBackForm from "../../Components/FeedbackForm/FeedBackForm";
import Footer from "../../Components/FooterComponent/Footer";
import Elevator from "../../Components/ElevatorComp/Elevator";
import FloatingBtnContant from "../../Components/FloatingBtnContact/FloatingBtn";
import { ProductCollection } from "../../Components/ProductCollection/ProductCollection";

const Product = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      fontFamily={"Montserrat"}
    >
      <Elevator />
      <FloatingBtnContant />
      <Header />
      <Flex justifyContent={"center"} mt={"100px"}>
        <Text w={"60%"} textAlign={"center"} fontWeight={"bold"}>
          {ProductDescription.description}
        </Text>
      </Flex>{" "}
      <Text mt={"20px"} fontWeight={"bold"}>
        {ProductDescription.title1}
      </Text>
      <ProductCollection />
      <Text mt={"20px"} fontWeight={"bold"}>
        {ProductDescription.title2}
      </Text>
      <FeedBackForm />
      <Footer />
    </Flex>
  );
};

export default Product;

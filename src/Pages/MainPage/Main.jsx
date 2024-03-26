import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import face from "../../assets/asd.png";
import ScrollIcon from "../../Components/Scroll Icon/ScrollIcon";
import { KeyWordObj, MainPageDesc } from "../../Utills/utills";
import KeyWord from "../../Components/KeyWord/KeyWord";
import TitleText from "../../Components/TitleText/TitleText";
import Elevator from "../../Components/ElevatorComp/Elevator";
import FloatingBtnContant from "../../Components/FloatingBtnContact/FloatingBtn";

const Main = () => {
  return (
    <Flex fontFamily={"Montserrat"} flexDir={"column"} h={"200vh"}>
      <Header />
      <Elevator />
      <FloatingBtnContant />
      <Flex flexDir={"row"}>
        <Flex flexDir={"column"} p={10} mt={20} maxW={"4xl"}>
          <TitleText
            text={MainPageDesc.name}
            text2={MainPageDesc.desc}
            title={MainPageDesc.title}
          />
          <Flex mt={"10px"} fontSize={"lg"}>
            <KeyWord text={KeyWordObj.text} route={KeyWordObj.route} />
            <Text mx={2}>or</Text>
            <KeyWord text={KeyWordObj.text2} route={KeyWordObj.route2} />
          </Flex>
        </Flex>
        <Image mt={"10px"} w={"550px"} src={face} />
      </Flex>
      <Flex justify={"center"}>
        <ScrollIcon />
      </Flex>{" "}
    </Flex>
  );
};

export default Main;

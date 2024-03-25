import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { SkillDescription } from "../../Utills/utills";

const Skills = () => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} textAlign={"center"}>
      <Header />
      <Flex justifyContent={"center"} mt={"20px"}>
        <Text w={"60%"} textAlign={"center"} fontWeight={"bold"}>
          {SkillDescription.desc}
        </Text>
      </Flex>{" "}
    </Flex>
  );
};

export default Skills;

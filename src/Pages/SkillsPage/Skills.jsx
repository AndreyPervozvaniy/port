import { Flex, Icon, Text, Progress, Badge } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/HeaderComponent/Header";
import { SkillDescription, SkillObj } from "../../Utills/utills";
import Footer from "../../Components/FooterComponent/Footer";

const Skills = () => {
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
          {SkillDescription.desc}
        </Text>{" "}
      </Flex>{" "}
      <Flex justifyContent={"center"}>
        <Flex flexDir={"column"} w={"90%"}>
          {SkillObj.map((skill, index) => (
            <Flex
              key={index}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={5}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                w={100}
              >
                <Icon w={7} h={7} as={skill.icon} />
                <Text fontWeight={"bold"} w={100} textAlign="center">
                  {skill.title}
                </Text>
              </Flex>
              <Progress
                value={skill.value}
                size={"sm"}
                w={500}
                colorScheme={skill.color}
                borderRadius={"10px"}
                border={"1px solid #ccc"}
              />
              <Badge variant={skill.variant} colorScheme={skill.color}>
                {skill.badge}
              </Badge>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Skills;

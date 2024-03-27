import { Flex, Container, Text } from "@chakra-ui/react";
import React from "react";
import { ProductData } from "../../Utills/utills";

import { useNavigate } from "react-router-dom";
import LinkBtns from "../LinkBtns/LinkBtns";

export const ProductCollection = () => {
  const router = useNavigate();
  return (
    <Flex>
      <Container maxW={"7xl"} mt={12}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={6}>
          {ProductData.map((item, index) => (
            <Flex
              w={"lg"}
              h={"md"}
              key={index}
              backgroundImage={item.img}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              cursor={"pointer"}
              _hover={{ opacity: 1 }}
            >
              <Flex
                w={"full"}
                opacity={"0"}
                _hover={{ opacity: "70%" }}
                backgroundColor={"black"}
                p={10}
                flexDir={"column"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                {" "}
                <Text color={"grey"} fontWeight={"bold"} fontSize={"lg"}>
                  {item.year}
                </Text>
                <Text color={"white"} fontWeight={"bold"} fontSize={"3xl"}>
                  {item.name}
                </Text>
                <LinkBtns netlify={item.netlifyLink} git={item.gitLink} />
              </Flex>
            </Flex>
          ))}{" "}
        </Flex>
      </Container>
    </Flex>
  );
};

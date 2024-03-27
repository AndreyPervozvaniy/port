import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, IconButton, Icon, Link, Flex } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FloatBtnData } from "../../Utills/utills";

const FloatingBtnContant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      position="fixed"
      bottom="55"
      left={{ base: "25px", xl: "10px" }}
      zIndex="999"
    >
      <IconButton
        icon={<Icon as={isOpen ? IoClose : FaPhone} color={"white"} />}
        borderRadius="full"
        w={50}
        h={50}
        onClick={toggleIcons}
        backgroundColor="black"
        transition={{ duration: 0.2 }}
      />
      <Flex>
        <AnimatePresence>
          {isOpen &&
            FloatBtnData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: item.initial, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: item.exit, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ position: "absolute", top: item.top, left: "5px" }}
              >
                <Link href={item.href} isExternal>
                  <IconButton
                    icon={<Icon as={item.icon} color={"black"} />}
                    borderRadius="full"
                    backgroundColor={"white"}
                  />
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default FloatingBtnContant;

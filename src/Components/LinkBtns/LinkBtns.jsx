import { Flex, Link, Icon, Button } from "@chakra-ui/react";
import React from "react";

const LinkBtns = ({ href, icon, color }) => {
  return (
    <Flex>
      <Link href={href} isExternal>
        <Button backgroundColor={"#1f2328"}>
          <Icon as={icon} w={10} h={5} color={"white"} />
        </Button>
      </Link>
    </Flex>
  );
};

export default LinkBtns;

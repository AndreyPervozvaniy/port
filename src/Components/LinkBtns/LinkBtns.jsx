import { Flex, Link, Icon, Button } from "@chakra-ui/react";
import React from "react";

const LinkBtns = ({ href, icon }) => {
  return (
    <Flex>
      <Link href={href} isExternal>
        <Button>
          <Icon as={icon} w={10} h={5} />
        </Button>
      </Link>
    </Flex>
  );
};

export default LinkBtns;

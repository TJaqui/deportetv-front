import React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  Box,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
function Searcher() {
  return (
    <Box maxW={"400px"}>
      <InputGroup>
        <Input placeholder="Enter amount" />
        <InputRightElement>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<Icon as={FaSearch}/>}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Searcher;

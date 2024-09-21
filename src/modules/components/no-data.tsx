import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const NoData: React.FC<{ message?: string }> = ({
  message = "No Data Available",
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%" padding={4}>
      <Text fontSize="lg" color="gray.500">
        {message}
      </Text>
    </Flex>
  );
};

export default NoData;

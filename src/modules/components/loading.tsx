import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex justify="center" align="center" py={"50%"}>
      <Spinner size="xl" thickness="2px" speed="0.65s" color="#FF692E" />
    </Flex>
  );
};

export default Loading;

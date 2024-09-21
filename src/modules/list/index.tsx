import { Flex } from "@chakra-ui/react";
import { RestaurantListProps } from "./interface";
import Card from "./sub/card";

const List: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <Flex flex={1} flexDirection="column" gap={4} p={4} pt={0}>
      {restaurants?.map((restaurant, index) => (
        <Flex key={index}>
          <Card restaurant={restaurant} />
        </Flex>
      ))}
    </Flex>
  );
};

export default List;

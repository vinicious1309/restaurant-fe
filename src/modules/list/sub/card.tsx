import { Flex, Text } from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";
import { FeaturedIcon } from "../../../assets/icon/FeaturedIcon";
import { HeartIcon } from "../../../assets/icon/HeartIcon";
import { StarIcon } from "../../../assets/icon/StarIcon";
import { textByStoreCategory } from "../../../ultils/constant";
import { isEmpty } from "../../../ultils/helper";
import { trpc } from "../../../ultils/trpc";
import { RestaurantCardProps } from "../interface";
import ImageSlider from "./image-slider";

const Card: React.FC<{ restaurant: RestaurantCardProps }> = ({
  restaurant,
}) => {
  const {
    id,
    isFavorite,
    featured,
    rating,
    ratingCount,
    name,
    desc,
    city,
    category,
    priceRange,
  } = restaurant;

  const [isFavoriteState, setIsFavorite] = useState(isFavorite);
  const { mutate: addFavorite } = trpc.addFavorite.useMutation();

  const onToggleFavorite = useCallback(() => {
    if (!isFavoriteState) {
      setIsFavorite(true);
      addFavorite({ restaurantId: id });
    }
  }, [id, isFavoriteState, addFavorite]);

  return (
    <Flex w="full" flexDirection="column" gap={2} position="relative">
      <ImageSlider />

      <Flex
        position="absolute"
        right={2}
        top={2}
        bg="#FFFFFF50"
        p={2}
        borderRadius="full"
        zIndex={99}
        cursor="pointer"
        _hover={{ bg: "#FF506A20" }}
        transition="background-color 0.3s ease"
        onClick={onToggleFavorite}
      >
        <HeartIcon
          fill={isFavoriteState ? "#FF506A" : "none"}
          style={{ transition: "fill 0.3s ease" }}
        />
      </Flex>

      {!isEmpty(featured) && (
        <Flex align="center" gap={1}>
          <FeaturedIcon />
          <Text color="#FF692E" fontSize="xs">
            {featured?.text}
          </Text>
        </Flex>
      )}

      <Flex flex={1} align="center" gap={1}>
        <Text color="#344054" fontWeight="semibold" noOfLines={1} w={"full"}>
          {name}
        </Text>
        <Flex minW={"fit-content"} align="center" gap={1}>
          <StarIcon />
          <Text color="#344054">
            {rating} ({ratingCount})
          </Text>
        </Flex>
      </Flex>

      <Text color="#475467" noOfLines={1}>
        {desc}
      </Text>

      <Text color="#475467" noOfLines={1}>
        {city?.toUpperCase()} ·{" "}
        {textByStoreCategory[category as keyof typeof textByStoreCategory]} ·{" "}
        {priceRange}
        만원
      </Text>
    </Flex>
  );
};

export default memo(Card);

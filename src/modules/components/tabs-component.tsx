import { Box, Text } from "@chakra-ui/react";
import { memo, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { MappedCategory } from "../../ultils/constant";
import { CategoryContext } from "../restaurants";

const TabsComponent = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    return null;
  }

  const { category, setCategory } = context;

  return (
    <Box px={4} w="calc(100vw)">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
      >
        {MappedCategory.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "fit-content",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setCategory(item.englishName)}
          >
            <Text
              px={3}
              py={2}
              borderRadius={"md"}
              fontWeight={"semibold"}
              bg={category === item.englishName ? "#F9FAFB" : "white"}
              color={category === item.englishName ? "#344054" : "#667085"}
            >
              {item?.koreanName}
            </Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default memo(TabsComponent);

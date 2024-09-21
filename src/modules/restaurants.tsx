import { Box, Flex } from "@chakra-ui/react";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MappedCategory } from "../ultils/constant";
import { isEmpty } from "../ultils/helper";
import { trpc } from "../ultils/trpc";
import InputSearch from "./components/input-search";
import Loading from "./components/loading";
import NoData from "./components/no-data";
import List from "./list";
import { RestaurantCardProps } from "./list/interface";
import NavigationBar from "./navigation-bar";
import TabsComponent from "./components/tabs-component";

interface CategoryContextType {
  category: string | null;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextType | null>(null);

const Restaurants: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [restaurants, setRestaurants] = useState<RestaurantCardProps[]>([]);
  const [category, setCategory] = useState<string | null>(
    MappedCategory?.[0]?.englishName || null
  );

  const { data: restaurantsData, isLoading } = trpc.getRestaurants.useQuery();

  const contextValue = useMemo(
    () => ({ category, setCategory }),
    [category, setCategory]
  );

  useEffect(() => {
    const searchValue = searchParams.get("search")?.toLowerCase() || "";

    if (!isEmpty(restaurantsData)) {
      const filteredRestaurants = restaurantsData.filter(
        (restaurant: RestaurantCardProps) => {
          const matchesCategory =
            category === "ALL" ||
            (category === "OTHER"
              ? restaurant?.category !== "ALL"
              : restaurant?.category === category);

          const matchesSearch = restaurant?.name
            ?.toLowerCase()
            .includes(searchValue);

          return matchesCategory && matchesSearch;
        }
      );

      setRestaurants(filteredRestaurants);
    }
  }, [category, restaurantsData, searchParams]);

  return (
    <CategoryContext.Provider value={contextValue}>
      <Flex flex={1} flexDirection="column">
        <Box position="sticky" top={0} zIndex={100} bg="white" pb={4}>
          <InputSearch />
          <TabsComponent />
        </Box>

        <Box h={"calc(100vh - 214px)"} overflow={"auto"}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {restaurants.length === 0 ? (
                <NoData message="No restaurants available" />
              ) : (
                <List restaurants={restaurants} />
              )}
            </>
          )}
        </Box>
        <Box position="sticky" bottom={0} zIndex={100} bg="white">
          <NavigationBar />
        </Box>
      </Flex>
    </CategoryContext.Provider>
  );
};

export default Restaurants;
export { CategoryContext };

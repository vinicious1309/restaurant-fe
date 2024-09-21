import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CalendarIcon } from "../../assets/icon/CalendarIcon";
import { ChatIcon } from "../../assets/icon/ChatIcon";
import { HomeIcon } from "../../assets/icon/HomeIcon";
import { MenuIcon } from "../../assets/icon/MenuIcon";
import { SearchIcon } from "../../assets/icon/SearchIcon";

const NavigationBar: React.FC = () => {
  const navData = [
    {
      icon: <HomeIcon />,
      label: "홈",
      key: 1,
    },
    {
      icon: <SearchIcon stroke="#FF4405" />,
      color: "#FF4405",
      label: "검색",
      key: 2,
    },
    {
      icon: <ChatIcon />,
      label: "피드",
      key: 3,
    },
    {
      icon: <CalendarIcon />,
      label: "내 예약",
      key: 4,
    },
    {
      icon: <MenuIcon />,
      label: "메뉴",
      key: 5,
    },
  ];

  return (
    <Flex
      justifyContent="space-around"
      p={2}
      pb={4}
      borderTop={"1px solid #E6E8EC"}
      gap={2}
    >
      {navData?.map((item, index) => (
        <Flex flexDirection="column" alignItems="center" gap={1} key={index}>
          {item.icon}
          <Text key={index} color={item?.color || "#667085"}>
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default NavigationBar;

import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "../../assets/icon/SearchIcon";
import useDebounce from "../../ultils/useDebounce";

interface InputSearchProps {
  placeholder?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder = "맛집 이름을 검색해보세요",
}) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("search"));

  const onChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  useEffect(() => {
    if (debouncedSearchValue) {
      setSearchParams({ search: debouncedSearchValue });
    } else {
      setSearchParams();
    }
  }, [debouncedSearchValue, setSearchParams]);

  return (
    <Box p={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={placeholder}
          fontSize="md"
          height={10}
          boxShadow="0px 4px 4px 0px #00000040"
          border="none"
          value={searchValue}
          onChange={onChangeValue}
        />
      </InputGroup>
    </Box>
  );
};

export default memo(InputSearch);

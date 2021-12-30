/* eslint-disable react/no-children-prop */
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export const SearchBar: VFC = memo(() => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const callSearch = () => {
    router.push({
      pathname: '/search',
      query: { searchValue },
    });
  };

  return (
    <InputGroup w={{ base: '80', md: '96' }}>
      <InputLeftElement color="gray.500" cursor="pointer" children={<FiSearch />} onClick={callSearch} />
      <Input placeholder="投稿を検索する" value={searchValue} onChange={handleSearchInputChanges} />
    </InputGroup>
  );
});

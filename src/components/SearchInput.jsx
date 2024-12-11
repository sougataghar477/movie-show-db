import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select";
function SearchInput() {
  const categories = createListCollection({
    items: [
      { label: "All", value: "multi" },
      { label: "Movies", value: "movie" },
      { label: "TV Shows", value: "tv" },

    ],
  })
  let [query, setQuery] = useState('');
  let [category, setCategory] = useState('multi');
  let navigate = useNavigate();
  const handleSubmit = (e) => { e.preventDefault(); navigate('/search?query=' + query.toLowerCase()+'&category='+category) }
  return <Flex justifyContent={'center'} alignItems={'center'} gap={4} maxW={960} p={4} mx={'auto'} wrap={'wrap'}>
    <Box maxW={['100%', '100%', 400]} flexGrow={1}>
      <form onSubmit={handleSubmit}>
        <Flex   >
          <Input onInput={e => { setQuery(e.target.value) }} borderRightRadius={0} size={'lg'} type="text" placeholder="Search" />
          <Button borderLeftRadius={0} type="submit" size={'lg'}>Search</Button>


        </Flex>
      </form>
    </Box>
    <SelectRoot
      collection={categories}
      value={category}
      onValueChange={(e) => { setCategory(e.value); console.log(e) }}
      size={'lg'}
      maxW={['100%', '100%', 200]}
      flexGrow={1}
    >

      <SelectTrigger>
        <SelectValueText placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.items.map((category) => (
          <SelectItem item={category} key={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  </Flex>


}
export default SearchInput;
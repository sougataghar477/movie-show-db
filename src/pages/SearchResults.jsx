import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Flex, Container, Heading, Box, Card, HStack, Image } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";
function SearchResults() {
  let [searchedResults, setResults] = useState([]);
  let [totalitemsCount, setitemsCount] = useState(0);
  const [page, setPage] = useState(1)
  let [searchParams] = useSearchParams();
  let query = searchParams.get("query");
  let category = searchParams.get("category");
  console.log(category)
  useEffect(() => {
    if (!query || !category) {
      return
    }
    fetch(`https://api.themoviedb.org/3/search/${category}?api_key=206103523ddf98867f702db43e0aac3c&query=${query}}`)
      .then(response => response.json())
      .then(data => { setResults(data.results); setitemsCount(data.total_results); console.log(data) })
  }

    , [query, category])

  let pageChange = (e) => {
    setPage(e.page);
    fetch(`https://api.themoviedb.org/3/search/${category}?api_key=206103523ddf98867f702db43e0aac3c&query=${query}&page=${e.page}`)
    .then(response => response.json())
    .then(data => { setResults(data.results); setitemsCount(data.total_results); console.log(data) })

  }
  return <Container maxW={990} p={4}>
    <Heading>Searched Results</Heading>
    <Flex w='100%' wrap={'wrap'} gap={4}>
      {searchedResults?.length > 0 ?
        searchedResults?.map((result, index) => result.overview ?
          <Card.Root maxW={300} key={index} overflow="hidden">
            {result.backdrop_path ? <Image src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} /> : <Image src={`./500x280.png`} />}
            <Card.Body gap="2">
              <Card.Title>{result.title || result.name}</Card.Title>
              <Card.Description>
                {result.overview}
              </Card.Description>

            </Card.Body>

          </Card.Root> : null)
        : <Heading>No Results Found</Heading>}

    </Flex>


    <PaginationRoot mt={4} count={totalitemsCount} pageSize={20} page={page} onPageChange={pageChange}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  </Container>
}
export default SearchResults;
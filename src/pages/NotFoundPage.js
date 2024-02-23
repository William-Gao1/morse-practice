import { Button, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="90%"
    >
      <Text fontSize={80} color={useColorModeValue("gray.500", "grey.10")}>
        404
      </Text>
      <Text fontSize={30} color={useColorModeValue("black", "white")}>
        The page you were looking for could not be found
      </Text>
      <Button marginTop={3} bg="blue.200">
        <Link as={RouterLink} href="/" _hover={{ textDecoration: "none" }}>
          Go Home
        </Link>
      </Button>
    </Flex>
  );
}

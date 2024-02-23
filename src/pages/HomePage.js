import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import HomeLink from "../components/HomeLink";
import { Fade, Slide } from "react-awesome-reveal";

export default function HomePage() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Slide direction="down">
        <Fade>
          <Text fontSize={80} align="center">
            Morse Practice
          </Text>
        </Fade>
      </Slide>

      <Slide direction="up">
        <Fade>
          <SimpleGrid columns={[1, 2, 3, 3]} gap={6} margin={10}>
            <HomeLink label="Practice Tapping" href="/tap">
              Practice transmitting Morse Code
            </HomeLink>
            <HomeLink label="Practice Watching" href="/watch">
              Practice translating a sequence of short and long flashes
            </HomeLink>
            <HomeLink label="Practice Reading" href="/reading">
              Practice reading a string of dots and dashes
            </HomeLink>
            <HomeLink
              label="Learn Morse"
              href="https://morse.withgoogle.com/learn/"
              external
            >
              Don't know Morse Code? Learn here!
            </HomeLink>
          </SimpleGrid>
        </Fade>
      </Slide>
    </Flex>
  );
}

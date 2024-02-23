import MorseCodeFlasher from "../components/MorseCodeFlasher";
import { Center, Flex, Input, Text } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useWordGenerator } from "../hooks/useWordGenerator";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function WatchPage() {
  const { getMorseWords } = useWordGenerator();
  const words = useRef(getMorseWords(1, "   "));
  const [userGuess, setUserGuess] = useState("");

  const checkGuess = () => {
    if (userGuess === words.current.decoded) {
      toast.success("Correct!", { toastId: "decodeMessage" });
      setUserGuess("");
      words.current = getMorseWords(1);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      checkGuess();
    }
  };

  return (
    <Flex h="100%" flexDir="column" justifyContent="center" paddingBottom="20%">
      <Text textAlign="center" fontSize={40} marginBottom="1em">
        Decode Flashes
      </Text>
      <MorseCodeFlasher
        morseCode={words.current.encoded
          .replaceAll(".", ". ")
          .replaceAll("-", "- ")}
      />
      <Center>
        <Form onSubmit={checkGuess}>
          <Input
            marginTop="2em"
            maxW={300}
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            onKeyDown={onKeyDown}
            onBlur={(e) => e.target.focus()}
            autoFocus
          />
        </Form>
      </Center>
    </Flex>
  );
}

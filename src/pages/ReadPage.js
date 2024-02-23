import { useWordGenerator } from "../hooks/useWordGenerator";
import { Box, Center, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Form } from "react-router-dom";

export default function WatchPage() {
  const { getMorseWords } = useWordGenerator();
  const words = useRef(
    getMorseWords(2, "\u00A0\u00A0", "\u00A0\u00A0\u00A0", 0, 10),
  );
  const [userGuess, setUserGuess] = useState("");

  const checkGuess = () => {
    if (userGuess === words.current.decoded) {
      toast.success("Correct!", { toastId: "decodeMessage" });
      setUserGuess("");
      words.current = getMorseWords(2, "\u00A0\u00A0", "\u00A0\u00A0\u00A0");
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      checkGuess();
    }
  };

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      paddingBottom="20%"
    >
      <Text textAlign="center" fontSize={40}>
        Decode this string
      </Text>
      <Text textAlign="center" fontSize={40} whiteSpace="nowrap">
        {words.current.encoded}
      </Text>
      <Center>
        <Form onSubmit={checkGuess}>
          <Input
            maxW={300}
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            onKeyDown={onKeyDown}
            autoFocus
          />
        </Form>
      </Center>
    </Box>
  );
}

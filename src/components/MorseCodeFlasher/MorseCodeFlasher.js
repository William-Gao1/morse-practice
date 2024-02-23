import { Button, Circle, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const MorseCodeFlasher = ({ morseCode }) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [started, setStarted] = useState(false);
  const timeoutsRef = useRef(new Set([]));

  const dotInterval = 500;
  const clearTimeouts = () => {
    for (const timerId of timeoutsRef.current) {
      clearTimeout(timerId);
    }
  };

  const flash = (index) => {
    if (index >= morseCode.length) {
      setIsFlashing(false);
      setStarted(false);
      return;
    }

    let waitingTime = dotInterval;
    setIsFlashing(true);
    if (morseCode[index] === ".") {
      setIsFlashing(true);
      waitingTime = dotInterval / 2;
    } else if (morseCode[index] === "-") {
      setIsFlashing(true);
      waitingTime = dotInterval * 2;
    } else if (morseCode[index] === " ") {
      setIsFlashing(false);
    }

    const timeoutId = setTimeout(() => flash(index + 1), waitingTime);
    timeoutsRef.current.add(timeoutId);
  };

  const startFlashing = () => {
    clearTimeouts();
    setIsFlashing(false);
    timeoutsRef.current.add(setTimeout(() => flash(0), dotInterval));
  };

  useEffect(() => {
    clearTimeouts();
    setIsFlashing(false);
    setStarted(false);
  }, [morseCode]);

  return (
    <Flex flexDir="column" alignItems="center">
      {
        <Circle
          size="40px"
          bg="tomato"
          color="white"
          visibility={!isFlashing && "hidden"}
        />
      }
      <Button
        onClick={() => {
          setStarted(true);
          startFlashing();
        }}
      >
        {started ? "Restart" : "Start"}
      </Button>
    </Flex>
  );
};

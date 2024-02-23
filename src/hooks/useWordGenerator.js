import { generate } from "random-words";
import morse from "morse-decoder";

export const useWordGenerator = () => {
  const getWords = (count, minLength = 0, maxLength = 7) => {
    return generate({ exactly: count, minLength, maxLength, join: " " });
  };

  const getMorseWords = (
    count,
    betweenChars = " ",
    betweenWords = "  ",
    minLength = 0,
    maxLength = 10,
  ) => {
    const plainText = getWords(count, minLength, maxLength);
    const encoded = morse
      .encode(plainText)
      .replaceAll(" ", betweenChars)
      .replaceAll("/", betweenWords);

    return {
      decoded: plainText,
      encoded: encoded,
    };
  };

  return {
    getMorseWords,
  };
};

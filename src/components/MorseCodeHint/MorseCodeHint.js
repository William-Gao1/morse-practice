export const MorseCodeHint = () => {
  const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };

  const characters = [
    "A",
    "J",
    "S",
    "B",
    "K",
    "T",
    "C",
    "L",
    "U",
    "D",
    "M",
    "V",
    "E",
    "N",
    "W",
    "F",
    "O",
    "X",
    "G",
    "P",
    "Y",
    "H",
    "Q",
    "Z",
    "I",
    "R",
  ];

  return (
    <div>
      <table>
        <tbody>
          {characters.map((char, index) =>
            index % 3 === 0 ? (
              <tr key={char}>
                <td>{char}</td>
                <td>{morseCodeMap[char]}</td>
                {characters[index + 1] && (
                  <>
                    <td>{characters[index + 1]}</td>
                    <td>{morseCodeMap[characters[index + 1]]}</td>
                  </>
                )}
                {characters[index + 2] && (
                  <>
                    <td>{characters[index + 2]}</td>
                    <td>{morseCodeMap[characters[index + 2]]}</td>
                  </>
                )}
              </tr>
            ) : null,
          )}
        </tbody>
      </table>
    </div>
  );
};

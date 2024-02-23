import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const HomeLink = ({ href, label, children, external }) => {
  return (
    <LinkBox
      borderWidth="1px"
      rounded="md"
      as="article"
      maxW="sm"
      p="5"
      _hover={{ bg: "blue.100" }}
    >
      <Heading>
        <LinkOverlay as={Link} to={href} target={external && "_blank"}>
          {label}{" "}
          {external && <ExternalLinkIcon mx={1} w={7} marginBottom={1} />}
        </LinkOverlay>
      </Heading>
      {children}
    </LinkBox>
  );
};

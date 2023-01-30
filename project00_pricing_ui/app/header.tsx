import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      bg={"#6B46C1"}
      pl="10px"
      color={"#F7FAFC"}
      textAlign={{ base: "left", md: "left", lg: "center" }}
    >
      <Heading pt={"88px"} fontWeight={"800"} fontSize={"48px"}>
        Simple pricing for your business
      </Heading>
      <Text pb={"198"} pt={"16px"} fontWeight={"500"} fontSize={"24px"}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}

import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Text,
} from "@chakra-ui/react";
import React from "react";
import checkicon from "./icons";

export default function Pricing() {
    return (
        <Box
            maxW={"994px"}
            margin="auto"
            mt={"-120px"}
            mx={{base:"20px", md:"20px", lg:"auto"}}
            borderRadius={"20px"}
            overflow="hidden"
            boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}
        >
            <Flex direction={{base:"column", md:"column", lg:"row"}}>
                {/* left Box*/}
                <Box bg={"#c0d5e0"} textAlign={"center"} p={"60px"}>
                    <Text fontSize={"24px"} fontWeight={"800"}>
                        Premium PRO
                    </Text>
                    <Heading as={"h3"} fontSize={"60px"} fontWeight={"800"}>
                        $329
                    </Heading>
                    <Text fontSize={"18px"} fontWeight={"500"}>
                        billed just once
                    </Text>
                    <Button
                        mt={"24px"}
                        w="282px"
                        height={"51px"}
                        bgColor={"#805AD5"}
                        color="white"
                        
                    >
                        Get Started
                    </Button>
                </Box>

                {/*Right Box */}
                <Box
                    bg={"white"}
                    pt="50px"
                    borderTopRightRadius={"20px"}
                    pl={"35px"}
                    pr={"15px"}
                    pb={"40px"}
                    textAlign={"left"}
                    fontWeight="400"
                    fontSize={"18px"}
                >
                    <Text>
                        Access these features when you get this pricing package for your
                        business.
                    </Text>
                    <HStack pt={"16px"}>
                        <Icon as={checkicon} />
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack pt={"16px"}>
                        <Icon as={checkicon} />
                        <Text>Additional phone numbers</Text>
                    </HStack>
                    <HStack pt={"16px"}>
                        <Icon as={checkicon} />
                        <Text>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack pt={"16px"}>
                        <Icon as={checkicon} />
                        <Text>24/7 support and consulting</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
}

import React from "react";
import { Box, Text, HStack, Icon, Stack } from "@chakra-ui/react";
import { moneybackicon, Nofeesicon, subscriptionicon } from "./icons";

export default function () {
    return (
        <Box
            fontSize={"18px"}
            fontWeight={"700"}
            pb="32px"
            pt={{base: '0',md:'0', lg:'57'}}
            maxW={"994px"}
            m="auto"
        >
            <Stack direction={{base: 'column',md:'column', lg:'row'}} px={"48px"} spacing="20px">
                <HStack spacing={"24px"}>
                    <Icon as={moneybackicon} boxSize="48px" />
                    <Text textAlign={"left"} fontSize={"18px"} fontWeight={"700"}>
                        30 days money back Guarantee
                    </Text>
                </HStack>
                <HStack spacing={"24px"}>
                    <Icon as={Nofeesicon} boxSize="48px" />
                    <Text textAlign={"left"} fontSize={"18px"} fontWeight={"700"}>
                        No setup fees 100% hassle-free
                    </Text>
                </HStack>
                <HStack spacing={"24px"}>
                    <Icon as={subscriptionicon} boxSize="48px" />
                    <Text textAlign={"left"} fontSize={"18px"} fontWeight={"700"}>
                        No monthly subscription Pay once and for all
                    </Text>
                </HStack>
            </Stack>
        </Box>
    );
}

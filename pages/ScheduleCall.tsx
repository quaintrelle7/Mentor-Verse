import { Box, Image, Center, Stack, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai"
import Navbar from '../Component/Navbar/Navbar';

type ScheduleCallProps = {

};

const ScheduleCall: React.FC<ScheduleCallProps> = () => {

    return (
        <>

        <Navbar/>

            <Box p={10} bg="brand.100" width={"100%"} height={"100%"}>

                <Flex mb={10} justifyContent={"center"}>
                    <Heading color={"brand.300"}>SuperFluid</Heading>
                </Flex>
                <Text mb={4} color={"white"} width={"100%"}>The Superfluid framework & Super Token standard can be used to add dynamic balances to tokens on chain, describing cash flows and executing them automatically over time.</Text>
                <Stack gap={2} width={"100%"} bg="whiteAlpha.100" p={10} mb={10}borderRadius={10}>
                    <Heading color="brand.300">Steps</Heading>
                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text ml={3} fontWeight={600}>Connect Wallet to Superfluid.finance</Text>
                       
                    </Flex>
                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text ml={3} fontWeight={600}>Wrap your Matics to SuperToken</Text>

                    </Flex>

                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text ml={3} fontWeight={600}>Enter flow rate and recipient address </Text>

                    </Flex>
                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text ml={3} fontWeight={600}>Cancel when done or automate</Text>

                    </Flex>
                </Stack>
                <Flex width={"100%"} justifyContent={"space-around"}>
                    <Image width="560" height="315" src="/Stream.png" alt="SuperFluid " />

                    <Center>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bUGyVIautuE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </Center>

                </Flex>
            </Box>



        </>
    )
}
export default ScheduleCall;
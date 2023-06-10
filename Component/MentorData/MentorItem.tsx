import { Center, Box, Stack, Heading, Image, Flex, Button, Text, } from '@chakra-ui/react';
import React from 'react';
import ApplyForMentor from '../../Component/Modal/ApplyForMentor';
import Link from 'next/link';
type MentorItemProps = {
    name: String,
    title: String,
    address: String,
    description: String,

};

const MentorItem: React.FC<MentorItemProps> = ({
    name, title, address, description
}) => {

    const expertList = ["Ethereum", "Polygon"];
    const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";

    return (

        <>
            <Center>
                <Box width={"400px"} height={"500px"} bg="white" p="10" borderRadius={10}>


                    <Stack alignItems={"center"}>
                        <Image width={"100px"} height={"100px"} borderRadius={"full"} src={image as string} alt="Mentor Picture"></Image>
                        <Heading fontSize={15}>{address} </Heading>
                        <Text fontWeight={700} color={"brand.400"}>{title}</Text>
                        <Box height={"140"}>
                            <Text>{description}</Text>
                        </Box>


                        <Flex >
                            {
                                expertList.map((item) => (
                                    <Box m={2} p={2} borderRadius={20} bg="brand.300" key={item as string}>{item}</Box>
                                ))
                            }
                        </Flex>

                        {/* <Button>Schedule a call</Button> */}

                        < ApplyForMentor />
                        <Link href={`/Profile/${address}`} >Go to Profile </Link>


                    </Stack>

                </Box>
            </Center>
        </>
    )
}
export default MentorItem;
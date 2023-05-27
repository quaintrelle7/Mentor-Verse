import { Center, Box, Stack, Heading, Image, Flex, Button, Text } from '@chakra-ui/react';
import React from 'react';
import ApplyForMentor from '../../Component/Modal/ApplyForMentor';

type MentorItemProps = {
    name: String,
    title: String,
    image: String,
    address: String,
    desc: String,
    expertList: String[],
};

const MentorItem: React.FC<MentorItemProps> = ({
    name, title, image, address, desc, expertList
}) => {

    return (

        <>
            <Center>
                <Box width={"400px"} height={"450px"} bg="white" p="10" borderRadius={10}>


                    <Stack alignItems={"center"}>
                        <Image width={"100px"} height={"100px"} borderRadius={"full"} src={image as string} alt="Mentor Picture"></Image>
                        <Heading fontSize={15}>{address} </Heading>
                        <Text fontWeight={700} color={"brand.200"}>{title}</Text>
                        <Text>{desc}</Text>

                        <Flex >
                            {
                                expertList.map((item) => (
                                    <Box m={2} p={2} borderRadius={20} bg="brand.300" key={item as string}>{item}</Box>
                                ))
                            }
                        </Flex>

                        {/* <Button>Schedule a call</Button> */}
                        < ApplyForMentor />

                    </Stack>

                </Box>
            </Center>
        </>
    )
}
export default MentorItem;
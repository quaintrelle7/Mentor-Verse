import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFillGiftFill } from "react-icons/bs"

type MyProfileProps = {
    
};

const MyProfile:React.FC<MyProfileProps> = () => {
    
    return (
        <>
        <Box bg="white" height={"800px"}>
            <Flex justifyContent={"space-around"}>
                <Box>Profile Info</Box>
                <Box>Profile Description</Box>
            </Flex>

            <Stack p={2}>
                <Text>Mentors</Text>
                <Flex  >
                    <BsFillGiftFill color='black'/> 
                        <Text marginLeft={2}>0x12345678900987654321</Text>
                </Flex>
                    <Flex  >
                        <BsFillGiftFill color='black' />
                        <Text marginLeft={2}>0x12345678900987654321</Text>
                    </Flex>

                    <Button width={"100px"}>Gift NFT</Button>
            </Stack>
        </Box>
        
        </>
    )

}
export default MyProfile;
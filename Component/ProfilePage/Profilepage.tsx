import { Box, Flex, Center, Stack, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

type ProfilePageProps = {
    name: string;
    description: string;
    title: string;
    mentorAddress: string;
    image: string;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ name, description, title, mentorAddress, image }) => {

    return (

        <>

            <Box color={"white"} bg={"whiteAlpha.100"}>
                Sharayu
                <Flex>
                    <Flex width={"30%"}>
                        <Stack>
                            <Image width={"50px"} src={image} alt="Profile Picture" borderRadius={"full"} />
                            <Text>{mentorAddress}</Text>
                            <Text>{title}</Text>
                        </Stack>
                    </Flex>
                    <Stack width={"70%"}>
                        <Text>Hi! You can call me {name}</Text>
                        <Text> {description}</Text>
                        <Flex>
                            <Box>Mentored 20+</Box>
                            <Box>Rating Star Star</Box>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex>
                    <Box>
                        Review
                    </Box>
                    <Box>

                        <Grid>

                        </Grid>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}
export default ProfilePage;
import React from 'react';
import { Box, Center, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react';

type HomepageProps = {

};

const Homepage: React.FC<HomepageProps> = () => {

    const companies = ["Polygon", "Filecoin", "Spheron", "Google", "AWS", "Hasura", "DigitalOcean", "Replit"
    ]
    return (

        <>

            <Box bg="brand.200" width={"100%"} color={"white"} height={{ base: "100%", md: "100%", lg: "500px" }} py={{ base: "15vw", lg: "5vw" }} px={"5vw"}>

                <Stack alignItems={"center"}>

                    <Flex justifyContent={"space-between"} mb={20}>

                        <Heading color={"brand.300"}>High performers use mentors</Heading>
                    </Flex>
                    <Flex mt={20} justifyContent={"space-between"} >
                        <Box width={"30%"} bg="blackAlpha.500" borderRadius={5} p={5}>
                            <Heading fontWeight={600} fontSize={25}>
                                Find your Mentors at one place.
                                Book 1:1 Sessions with all the elite mentors and boost your  Project
                            </Heading>
                        </Box>

                        <Box width={"30%"} bg="blackAlpha.500" borderRadius={5} p={5}>
                            <Heading fontWeight={600} fontSize={25}>
                                Stay anonymous and make a difference. You do not need to reveal identity to mentor or get mentored.
                            </Heading>
                        </Box>

                        <Box width={"30%"} bg="blackAlpha.500" borderRadius={5} p={5}>
                            <Heading fontWeight={600} fontSize={25}>
                                A targeted conversation with an expert can create better insights and save you time and money.
                            </Heading>
                        </Box>

                    </Flex>


                </Stack>



            </Box>

            <Box bg="brand.100" p={6}>
                <Stack alignItems={"center"}>

                    <Heading color={"brand.300"}>Our Mentors Work At</Heading>
                </Stack>
                <Flex justifyContent={"space-between"} className='buildSlide'>
                    {
                        companies.map((item) => (
                            <Box bg="whiteAlpha.500" borderRadius={4} p="4" my={5} key={item}>
                                <Heading fontSize={20}>{item}</Heading>
                            </Box>
                        ))

                    }
                </Flex>


            </Box>
            <Center bg="brand.200" p="10">
                <Box width={"400px"} height={"300px"} bg="white" p="10" borderRadius={10}>


                    <Stack alignItems={"center"}>
                        <Image width={"100px"} height={"100px"} borderRadius={"full"} src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="Mentor Picture"></Image>
                        <Heading fontSize={15}>0X8987534253FG873/ ENS </Heading>
                        <Text fontWeight={700} color={"brand.200"}>Blockchain Advocate</Text>
                        <Text>Hi! I have worked at Polygon and knows about Layer 2 functionalities. I have 3 years of experience. </Text>


                    </Stack>

                </Box>
            </Center>

        </>
    )
}
export default Homepage;
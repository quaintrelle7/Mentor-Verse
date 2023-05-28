import { Box, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';

type FilterMentorProps = {

};

const FilterMentor: React.FC<FilterMentorProps> = () => {

    return (
        <Box borderRadius={5} color={"white"} bg="brand.100" p={7}>

            <Flex width={"70%"} height={"60px"} justifyContent={"space-between"}>
                <Heading fontSize={20} width={"100px"}>Filter Your Mentors</Heading>
                <Box>
                    <label>Role</label>
                    <Input></Input>
                </Box>
                <Box>
                    <label>Services</label>
                    <Input></Input>
                </Box>
            </Flex>
        </Box>
    )
}
export default FilterMentor;
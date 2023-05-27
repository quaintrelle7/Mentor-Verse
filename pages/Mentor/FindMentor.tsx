import React from 'react';
import MentorItem from '../../Component/MentorData/MentorItem';
import Mentors from '../../Component/MentorData/MentorData';
import { Box, Grid } from '@chakra-ui/react';
import FilterMentor from '../../Component/MentorData/FilterMentor';



type FindMentorProps = {

};

const FindMentor: React.FC<FindMentorProps> = () => {

    return (
        <div>


            <Box width={"100%"} height={"800px"} bg="brand.100" p={10}>
                <FilterMentor />

                <Grid templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }} gap={{ sm: 6, md: 8, lg: 8 }} alignContent={"center"} py={6} >
                    {
                        Mentors.map((item) =>
                            <MentorItem key={item.address} name={item.name}
                                title={item.title}
                                desc={item.desc}
                                address={item.address}
                                image={item.image}
                                expertList={item.expertList} />)



                    }
                </Grid>

            </Box>



        </div>
    )
}
export default FindMentor;
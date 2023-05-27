import React, { useEffect, useState } from 'react';
import MentorItem from '../../Component/MentorData/MentorItem';
import Mentors from '../../Component/MentorData/MentorData';
import { Box, Grid } from '@chakra-ui/react';
import FilterMentor from '../../Component/MentorData/FilterMentor';
import Navbar from '../../Component/Navbar/Navbar';
import { MentorContract } from "../../Blockend/interact"
import web3 from '../../Blockend/web3';
import { TupleType } from 'typescript';


type FindMentorProps = {

};

interface Mentor {
    name: string;
    description: string;
    title: string;
    mentorAddress: string;
}


const FindMentor: React.FC<FindMentorProps> = () => {
    const [account, setAccount] = useState("");
    const [mentorList, setMentorList] = useState<Mentor[]>([]);


    useEffect(() => {
        async function fetchData() {
            const accounts = await web3.eth.requestAccounts();
            const result = await MentorContract.methods.getMentorList().call();
            setMentorList(result);
            console.log("data", mentorList);
        }
        fetchData();
    }, [MentorContract]);

    return (
        <div>
            <Navbar />

            <Box>
                

                {/* {mentorList.map((mentor, index) => (
                    <li key={index}>
                        <strong>Name: </strong>{mentor.name}<br />
                        <strong>Description: </strong>{mentor.description}<br />
                        <strong>Title: </strong>{mentor.title}<br />
                        <strong>Address: </strong>{mentor.mentorAddress}<br />
                    </li>
                ))} */}
            </Box>
            <Box width={"100%"} height={"800px"} bg="brand.100" p={10}>
                <FilterMentor />

                <Grid templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }} gap={{ sm: 6, md: 8, lg: 8 }} alignContent={"center"} py={6} >
                    {
                        mentorList.map((item, index) =>
                            <MentorItem key={index} name={item.name}
                                title={item.title}
                                description={item.description}
                                address={item.mentorAddress}
                                />)



                    }
                </Grid>

            </Box>



        </div>
    )
}
export default FindMentor;
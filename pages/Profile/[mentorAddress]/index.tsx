import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


import { Box } from '@chakra-ui/react';

import Navbar from '../../../Component/Navbar/Navbar';
import { MentorContract } from "../../../Blockend/interact"
import web3 from '../../../Blockend/web3'
import ProfilePage from '../../../Component/ProfilePage/Profilepage';


type MentorProfilePageProps = {

};

interface Mentor {
    name: string;
    description: string;
    title: string;
    mentorAddress: string;
}


const MentorProfilePage: React.FC<MentorProfilePageProps> = () => {
    const [account, setAccount] = useState("");
    const [mentorList, setMentorList] = useState<Mentor[]>([]);

    const router = useRouter();
    const { mentorAddress } = router.query;
    console.log("add", mentorAddress);
    useEffect(() => {
        async function fetchData() {
            const accounts = await web3.eth.requestAccounts();
            const result = await MentorContract.methods.getMentorList().call();
            setAccount(accounts[0])
            setMentorList(result);
            console.log("data", mentorList);
        }
        fetchData();
    }, []);

    const filterMentorsByAddress = (mentors, address) => {
        const filteredMentors = mentors.filter(mentor => mentor.mentorAddress === address);
        return filteredMentors;
    };
    const filteredMentors = filterMentorsByAddress(mentorList, mentorAddress);


    return (
        <>
            <Navbar />


            <Box width={"100%"} height={"700px"} bg="brand.100" p={10}>



                {
                    filteredMentors.map((item, index) =>
                        <ProfilePage key={index} name={item.name}
                            title={item.title}
                            description={item.description}
                            mentorAddress={item.mentorAddress}
                            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"

                        />)



                }


            </Box>



        </>
    )
}
export default MentorProfilePage;
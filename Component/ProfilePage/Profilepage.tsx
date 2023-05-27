import { Box, Flex, Center, Stack, Grid, Image, Text, Divider, Heading, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { NFTContract } from "../../Blockend/interact"
import web3 from '../../Blockend/web3';

type ProfilePageProps = {
    name: string;
    description: string;
    title: string;
    mentorAddress: string;
    image: string;

};

const ProfilePage: React.FC<ProfilePageProps> = ({ name, description, title, mentorAddress, image }) => {

    const [tokenId, setTokenId] = useState(0);
    const [account, setAccount] = useState("");


    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);

        };
        getAccount();
    }, []);

    const handleGift = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            await NFTContract.methods.transferNFT(account, mentorAddress, tokenId).send({ from: account });

            console.log('Gift Sent successfully!');


            // Additional logic after successful mentor registration
            console.log(name);
        } catch (error) {

            console.error(error);
        }
    }

    return (

        <>

            <Box color={"white"} bg={"whiteAlpha.100"} width={"100%"} px={10} py={15} borderRadius={10} height={"600px"}>

                <Flex>
                    <Box width={"40%"}>
                        <Stack alignItems={"center"}  >
                            <Image border="3px solid white" width={"70px"} src={image} alt="Profile Picture" borderRadius={"full"} />
                            <Text color="brand.300">{mentorAddress}</Text>
                            <Text color="brand.300" fontWeight={700}>{title}</Text>

                            <form onSubmit={handleGift}>
                                <label>Enter TokenId of NFT</label>
                                <input type='number' value={tokenId}
                                    onChange={(e) => {
                                        setTokenId(Number(e.target.value));
                                    }}
                                    name="tokenId"></input>
                                <Button type="submit">Gift NFT</Button>
                            </form>

                        </Stack>
                    </Box>
                    <Stack width={"60%"}>
                        <Heading fontWeight={700} fontSize={25} color={"brand.300"} pb={5}>About</Heading>
                        <Text fontSize="15" >Hello! <br />
                            You can call me {name}.</Text>

                        <Text> {description}</Text>
                        <Flex py="5">
                            <Box fontWeight={700} fontSize={20} color={"green.300"} width={"50%"}>Mentored 20+ Mentees</Box>
                            <Flex fontWeight={700} fontSize={20} color={"gold"}>Rating
                                <Flex mt={1} mx={1}>
                                    <AiFillStar />
                                    <AiFillStar /><AiFillStar /><AiFillStar />
                                    <AiOutlineStar />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>
                <Divider />
                <Flex p="10">

                    <Box width={"40%"}>
                        <Heading fontWeight={700} fontSize={25} color={"brand.300"} pb={5}>Feedback and Review</Heading>
                    </Box>
                    <Box>
                        <Heading fontWeight={700} fontSize={25} color={"brand.300"} pb={5}>Received NFTs </Heading>

                        <Grid>
                            <Box className='shadow'>
                                <Image width={200} src='https://bafkreiaantyi7bvoawfcdzvpz7ztjlovrwgayvjcoseerh6smoxk7taxum.ipfs.nftstorage.link/' alt='NFT' />
                            </Box>

                        </Grid>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}

export default ProfilePage;
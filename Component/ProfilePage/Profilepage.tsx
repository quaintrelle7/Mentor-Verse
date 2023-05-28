import { Box, Button, Divider, Flex, Grid, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { NFTContract } from "../../Blockend/interact";
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
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


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
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setTokenId(0);

            // Additional logic after successful mentor registration
            console.log(name);
        } catch (error) {

            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            console.error(error);
        }
    }

    return (

        <>

            <Box color={"white"} bg={"whiteAlpha.100"} width={"100%"} px={10} py={15} borderRadius={10} height={"600px"}>

                <Flex>
                    <Box width={"40%"}>
                        <Stack   >
                            <Flex >
                                <Image border="3px solid white" width={"50px"} src={image} alt="Profile Picture" borderRadius={"full"} />
                                <Text mt={6} mx={6} color="brand.300" fontWeight={700}>{title}</Text>
                            </Flex>
                            <Text color="brand.300">{mentorAddress}</Text>



                            <form onSubmit={handleGift}>
                                <label>Enter TokenId of NFT</label>

                                <Input mx={1} width={"20"} type="number" value={tokenId} onChange={(e) => setTokenId(Number(e.target.value))} />

                                <Button m={2} type="submit">Gift NFT</Button>
                            </form>

                            <Box>
                                {showSuccessMessage && <Text color={"brand.200"} fontWeight={600}>Gifted NFT Successfully!</Text>}
                                {showFailureMessage && <Text color={"red"} fontWeight={400}>Could not gift the NFT, please check all the fields and try again!</Text>}
                            </Box>



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

                        <Stack  gap={2} width={"90%"} bg="whiteAlpha.100" p={10} borderRadius={10}>

                            <Flex bg="brand.200" fontSize={12} p={3} borderRadius={10} justifyContent={"space-between"}>

                                <Text> 0xft709A463F71c9F08907642e7ec16B1375a83B2C  Thanks you</Text>
                                
                            </Flex>
                            <Flex bg="brand.200" fontSize={12} p={3} borderRadius={10} justifyContent={"space-between"}>
                                <Text> 0xft709A463F71c9F08907642e7ec16B1375a83B2C  Gifted you NFT</Text>
                            </Flex>
                           
                        </Stack>

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
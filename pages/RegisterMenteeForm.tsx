import {
    Button,
    Flex,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';

import { AiFillCheckCircle } from "react-icons/ai";

import { useEffect, useState } from 'react';
import { MentorContract, NFTContract } from "../Blockend/interact";
import web3 from '../Blockend/web3';
import Navbar from '../Component/Navbar/Navbar';

type RegisterMenteeFormProps = {

};

const RegisterMenteeForm: React.FC<RegisterMenteeFormProps> = () => {

    const [name, setName] = useState('');

    const [account, setAccount] = useState("");


    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);

        };
        getAccount();
    }, []);


    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState("Register");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [toAddress, setToAddress] = useState("");
    const [tokenURI, setTokenURI] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {


            const accounts = await web3.eth.getAccounts();
            // Call the mintNFT function
            await NFTContract.methods.mintNFT(toAddress, tokenURI).send({ from: accounts[0] });

            console.log("NFT minted successfully");
        } catch (error) {
            console.error("Error minting NFT:", error);
        }
    };

    const handleMentorRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (MentorContract && name) {
            setButtonText("Registering");

            try {
                const accounts = await web3.eth.getAccounts();
                await MentorContract.methods.registerAsMentee(name).send({ from: accounts[0] });
                console.log('Mentee registered successfully!');
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setName("");

                setButtonText("Register");
                // Additional logic after successful mentor registration
                console.log(name);
            } catch (error) {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                console.error(error);
            }
        }
    };

    return (

        <>
            <Navbar />

            <Stack py={6} gap={6} alignItems={"center"} bg="brand.100" color={"white"} width={"100%"} height={"780px"} overflow={"initial"}>

                <Flex width="90%" mx={20} justifyContent={"space-between"}>

                    <Stack alignItems={"center"} bg="whiteAlpha.100" p={10} borderRadius={10}>
                        <Heading fontSize={30} color="brand.300">Register as a Mentee</Heading>
                        <br></br>
                        <br></br>

                        <form onSubmit={handleMentorRegistration}>
                            <Stack>

                                <Stack flexGrow={1}>



                                    <FormLabel htmlFor='name'> Name</FormLabel>
                                    <Input type='text' value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        name="name" />

                                </Stack>









                                <Button bg="teal" type='submit' >{buttonText}</Button>



                                {showSuccessMessage && <Text align={"center"} color={"green.400"} fontWeight={600}>Mentee Registered Successfully!</Text>}
                                {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not register you, please connect to MUMBAI and check balance and try again!</Text>}
                            </Stack>

                            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        </form>
                    </Stack>

                    <Stack alignItems={"center"} bg="whiteAlpha.100" p={10} borderRadius={10}>
                        <Heading fontSize={25} color="white">Be First</Heading>
                        <br></br>

                        <Heading fontSize={30} color="white">Get Smarter</Heading>
                        <br></br>
                        <Heading fontSize={35} color="white">Set Your Goals</Heading>

                        <Link mt={4}href="/ScheduleCall">
                        <Button>Schedule Call</Button>
                        </Link>





                    </Stack>

                    <Stack alignItems={"center"} bg="whiteAlpha.100" p={10} borderRadius={10}>
                        <Heading fontSize={30} color="brand.300">Mint NFT</Heading>
                        <form onSubmit={handleSubmit}>

                            <label>
                                To Address:
                                <Input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                            </label>
                            <br />
                            <label>
                                Token URI:
                                <Input type="text" value={tokenURI} onChange={(e) => setTokenURI(e.target.value)} />
                            </label>
                            <br />
                            <br />
                            <Button width={"100%"} bg="teal" type="submit">Mint NFT</Button>
                        </form>
                    </Stack>

                </Flex>

                <Stack gap={2} width={"90%"} bg="whiteAlpha.100" p={10} borderRadius={10}>
                    <Heading fontSize={30} color="brand.300">Mentorships Received</Heading>
                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10} justifyContent={"space-between"}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text>Mentored by 0xft709A463F71c9F08907642e7ec16B1375a83B2C </Text>
                        <Text>For Polygon Development </Text>
                    </Flex>
                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10} justifyContent={"space-between"}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text>Mentored by 0xft709A463F71c9F08907642e7ec16B1375a83B2C </Text>
                        <Text>For Hasura API </Text>
                    </Flex>
                    <Flex bg="brand.200" fontSize={18} p={3} borderRadius={10} justifyContent={"space-between"}>
                        <AiFillCheckCircle fontSize={20} color='green.400' />
                        <Text>Mentored by 0xft709A463F71c9F08907642e7ec16B1375a83B2C </Text>
                        <Text>For Ethereum Development </Text>
                    </Flex>
                </Stack>

            </Stack>




        </>

    )
}
export default RegisterMenteeForm;
import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box, Input, Flex, Stack, Button, Center, Textarea, Text, Heading
} from '@chakra-ui/react'

import { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { MentorContract, NFTContract } from "../Blockend/interact"
import web3 from '../Blockend/web3';

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

            <Center bg="brand.100" color={"white"} width={"100%"} height={"780px"} overflow={"initial"}>
                <Stack alignItems={"center"} bg="whiteAlpha.100" p={10} borderRadius={10}>
                    <Heading color="brand.300">Register as a Mentee</Heading>
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
            </Center>

            <form onSubmit={handleSubmit}>

                <label>
                    To Address:
                    <input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                </label>
                <br />
                <label>
                    Token URI:
                    <input type="text" value={tokenURI} onChange={(e) => setTokenURI(e.target.value)} />
                </label>
                <br />
                <Button type="submit">Mint NFT</Button>
            </form>
        </>

    )
}
export default RegisterMenteeForm;
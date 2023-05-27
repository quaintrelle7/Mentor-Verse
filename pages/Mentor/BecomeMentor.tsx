import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box, Input, Flex, Stack, Button, Center, Textarea, Text, Heading
} from '@chakra-ui/react'

import { useState, useEffect } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { MentorContract } from "../../Blockend/interact"
import web3 from '../../Blockend/web3';

type BecomeMentorProps = {

};

const BecomeMentor: React.FC<BecomeMentorProps> = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mentorAddress, setMentorAddress] = useState('');
    const [account, setAccount] = useState("");


    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            setMentorAddress(account);
        };
        getAccount();
    }, []);


    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState("Register");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


    const handleMentorRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (MentorContract && name && description && title) {
            setButtonText("Registering");

            try {
                const accounts = await web3.eth.getAccounts();
                await MentorContract.methods.registerAsMentor(name, description, title).send({ from: accounts[0] });
                console.log('Mentor registered successfully!');
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setName("");
                setDescription("");
                setTitle("");
                setButtonText("Register");
                // Additional logic after successful mentor registration
                console.log(name, title, mentorAddress, description);
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
                    <Heading color="brand.300">Become a Mentor</Heading>
                    <br></br>
                    <br></br>

                    <form onSubmit={handleMentorRegistration}>
                        <Stack>

                            <Flex>  <Stack flexGrow={1}>



                                <FormLabel htmlFor='name'> Name</FormLabel>
                                <Input type='text' value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    name="name" />

                            </Stack>

                                <Stack marginLeft={5} flexGrow={1}>
                                    <FormLabel htmlFor='title'>Title</FormLabel>
                                    <Input type="text"
                                        name="title"
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }} />
                                </Stack></Flex>



                            {/* <FormLabel htmlFor='subject'>Provide Image URL</FormLabel> */}
                            {/* <Input type="text"
                                name="subject"
                                value={image}
                                onChange={(e) => {
                                    setImage(e.target.value);
                                }} /> */}
                            <FormLabel htmlFor='address'>Wallet Address</FormLabel>
                            <Text>{account}</Text>

                            <FormLabel htmlFor='message'>Tell about yourself</FormLabel>
                            <Textarea name="message"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }} maxHeight={"250px"} />



                            <Button bg="teal" type='submit' >{buttonText}</Button>



                            {showSuccessMessage && <Text align={"center"} color={"green.400"} fontWeight={600}>Mentor Registered Successfully!</Text>}
                            {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not register you, please connect to matic and check balance and try again!</Text>}
                        </Stack>

                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    </form>
                </Stack>
            </Center>
        </>
    )
}
export default BecomeMentor;
import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box, Input, Flex, Stack, Button, Center, Textarea, Text, Heading
} from '@chakra-ui/react'

import { useState } from 'react';

type BecomeMentorProps = {

};

const BecomeMentor: React.FC<BecomeMentorProps> = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');

    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


    const handleSubmitTwo = async (e: React.FormEvent) => {
        e.preventDefault();

        // let isValidForm = handleValidation();
        setButtonText("Sending");










        setShowSuccessMessage(true);
        setShowFailureMessage(false);

        setButtonText("Send");




    };

    return (
        <Center bg="brand.100" color={"white"} width={"100%"} height={"780px"} overflow={"initial"}>
            <Stack alignItems={"center"}>
                <Heading>Become a Mentor</Heading>
                <br></br>
                <br></br>
                <form onSubmit={handleSubmitTwo}>
                    <Stack>

                        <Flex>  <Stack flexGrow={1}>



                            <FormLabel htmlFor='fullname'> Name</FormLabel>
                            <Input type='text' value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                name="fullname" />

                        </Stack>

                            <Stack marginLeft={5} flexGrow={1}>
                                <FormLabel htmlFor='email'>Title</FormLabel>
                                <Input type="email"
                                    name="email"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }} />
                            </Stack></Flex>



                        <FormLabel htmlFor='subject'>Provide Image URL</FormLabel>
                        <Input type="text"
                            name="subject"
                            value={image}
                            onChange={(e) => {
                                setImage(e.target.value);
                            }} />
                        <FormLabel htmlFor='subject'>Wallet Address</FormLabel>
                        <Text>account address get from index.tsx</Text>
                        <FormLabel htmlFor='message'>Tell about yourself</FormLabel>
                        <Textarea name="message"
                            value={desc}
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }} maxHeight={"250px"} />



                        <Button bg="teal" type='submit' >Submit</Button>



                        {showSuccessMessage && <Text align={"center"} color={"brand.200"} fontWeight={600}>Message Sent Successfully!</Text>}
                        {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not deliver the message, please check all the fields and try again!</Text>}
                    </Stack>

                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                </form>
            </Stack>
        </Center>
    )
}
export default BecomeMentor;
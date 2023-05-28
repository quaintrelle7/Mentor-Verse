import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

type ApplyForMentorProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;
};

const ApplyForMentor: React.FC<ApplyForMentorProps> = () => {

    const [background, setBackground] = useState("");
    const [expectations, setExpectations] = useState("");
    const [message, setMessage] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    //TO-DO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // const { error } = "hi";

        let error = true;

        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);

            return;
        }

        setShowSuccessMessage(true);
        setShowFailureMessage(false);


    }
    return (
        <>
            <Button onClick={onOpen}>Request for Mentorship</Button>
            {/* <Button ml={4} ref={finalRef}>
                I wil receive focus on close
            </Button> */}

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex bg="brand.100" color={"white"} justifyContent={"center"} p={5}>
                        <Heading fontSize={25}>Mentorship Request</Heading>
                    </Flex>

                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6}>

                        <Box p={1} mt={5}>

                            <form onSubmit={handleSubmit}>
                                <FormLabel fontWeight={800}>My Background</FormLabel>
                                <Textarea
                                    mb={7}
                                    name='background'
                                    value={background}
                                    onChange={(e) => {
                                        setBackground(e.target.value);
                                    }}
                                    ref={initialRef} placeholder='Let the mentor know about your background' />



                                <FormLabel fontWeight={800}>My Expectations</FormLabel>
                                <Textarea
                                    mb={7}
                                    name='message'
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    ref={initialRef} placeholder='Let the mentor know about your expectations and goals' />

                                <FormLabel fontWeight={800}>Message to Mentor</FormLabel>
                                <Textarea
                                    name='expectations'
                                    value={expectations}
                                    onChange={(e) => {
                                        setExpectations(e.target.value);
                                    }}
                                    ref={initialRef} placeholder='Write a message' />
                            </form>
                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Stack>
                            <Flex justifyContent={"flex-end"}>
                                <Button type="submit" colorScheme='blue' mr={3}>
                                    Send Request
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </Flex>


                            <Box>
                                {showSuccessMessage && <Text align={"center"} color={"brand.200"} fontWeight={600}>Request Sent Successfully!</Text>}
                                {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not submit the request, please check all the fields and try again!</Text>}
                            </Box>
                        </Stack>



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ApplyForMentor;
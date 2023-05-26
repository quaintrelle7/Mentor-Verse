import { Button, Divider, Box, Flex, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr"
import { FaWindowClose } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import web3 from "../../Blockend/web3"



const Navbar: React.FC = () => {

    web3.eth.getAccounts().then(console.log);

    const [account, setAccount] = useState("");
    const [showProfile, setShowProfile] = useState(false);

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };
        getAccount();
    }, []);

    const [showInPhone, setShowInPhone] = useState<Boolean>(false);

    const handleClick = () => {
        setShowInPhone(!showInPhone);
    }


    return <div style={{ position: "sticky", top: "0", zIndex: 1 }}>


        <Flex bg={"black"}
            height="60px"
            color="white"

            align={"center"}
            justifyContent={{ md: "space-between" }}>

            <Flex width={"30%"}
                marginLeft={{ base: "5", md: "20", lg: "20" }}
                fontWeight="700"
                letterSpacing={1}
                fontSize={"22px"}
                color={"#47d2af"}>
                Web3Mentor
            </Flex>

            <Flex width={"50%"}
                justifyContent={{ md: "space-between" }}
                display={{ base: "none", md: "flex" }}
                align={"flex-start"}
                mx={2}
                marginRight={20}
            >
                <Link href="/Mentor/FindMentor" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}>Find a Mentor
                </Link>
                <Link href="/Mentor/BecomeMentor" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }} >Become a Mentor
                </Link>
                {/* <Link href="#Projects" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}>Projects
                </Link> */}

                <Link href="/Profile/MyProfile" className='navbarLink'
                    style={{ textDecoration: "none", paddingTop: "5px" }}>My Profile
                </Link>

                {account ? (
                    <Box >
                        <CgProfile fontSize={30} onClick={() => setShowProfile(!showProfile)}>

                        </CgProfile>

                        {showProfile && (
                            <Box marginLeft={-40} bg={"white"} mt={10} position={"absolute"} width={"200px"} height={"200px"} >

                                <Text color={"black"}>{account}</Text>
                            </Box>
                        )}
                    </Box>




                ) : (<Button >
                    Connect Wallet
                </Button>)
                }

            </Flex>


            <Flex width="00px" display={{ md: "none" }} marginLeft="20" justifyContent={"center"}>
                {showInPhone ? (<IoMdClose style={{ color: "white", marginLeft: "50", fontSize: "30px", fontWeight: "800" }} onClick={handleClick}></IoMdClose>) : (<GiHamburgerMenu style={{ color: "white", marginLeft: "50", fontSize: "25px" }} onClick={handleClick}></GiHamburgerMenu>)}


            </Flex>
        </Flex>

        < Flex zIndex={1} display={{ md: "none" }}
            width={"100%"} position={"absolute"}
        >

            {showInPhone ? (

                <Flex direction={"column"} align={"center"} width={"100%"} bg="#c2f0e4" padding={"6px"} position={"relative"} fontWeight="700"
                >

                    <Flex padding={"6px"} >
                        <Link href="#About" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} position={"relative"} zIndex={1}>
                        <Link href="#AboutDetails" className='navbarLink2'
                            style={{ textDecoration: "none" }} >About
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link href="#Projects" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Projects
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link className='navbarLink2'
                            style={{ textDecoration: "none" }} >Blog
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link className='navbarLink2'
                            style={{ textDecoration: "none" }} >Resume
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link href="#Contact" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Contact
                        </Link>

                    </Flex>


                </Flex>) :
                (
                    <></>
                )}



        </Flex>


    </div>
}
export default Navbar;
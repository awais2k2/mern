import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import {
  Box,
  Text,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
export default function Contact() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const toast = useToast();
  const userContact = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUser({
        ...user,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: "",
      });
      if (res.status !== 200) {
        navigate("/login");
      }
    } catch (error) {
      toast({
        title: "InValid Credentails",
        description: "Login require",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
      navigate("/login");
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = user;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = res.json();

    if (!data) {
      return toast({
        title: "Message not send",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
    } else {
      setUser({ ...user, message: "" });
      return toast({
        title: "Message send",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
    }
  };

  return (
    <Box w="70%" mx="auto" mt="150px">
      <Flex gap="60px">
        <Flex direction="column" color="white">
          <Flex
            w="450px"
            alignItems="center"
            bg="rgba(113, 128, 150, 1)"
            py="35px"
            gap="20px"
            boxShadow="lg"
            rounded="10px">
            <Box ml="15px">
              <MdPhone size="25px" />
            </Box>
            <Flex direction="column">
              <Text>Phone</Text>
              <Text>+92 3264788231</Text>
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            w="450px"
            alignItems="center"
            bg="rgba(113, 128, 150, 1)"
            py="35px"
            gap="20px"
            rounded="10px">
            <Box ml="15px">
              <MdEmail size="25px" />
            </Box>
            <Flex direction="column">
              <Text>Email</Text>
              <Text>mawais2k2@gmail.com</Text>
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            w="450px"
            alignItems="center"
            bg="rgba(113, 128, 150, 1)"
            py="35px"
            gap="20px"
            rounded="10px">
            <Box ml="15px">
              <FaAddressCard size="25px" />
            </Box>
            <Flex direction="column">
              <Text>Addresss</Text>
              <Text>Qanchi Amer Sadhu,Lahore</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w="700px"
          boxShadow="xl"
          p="30px"
          rounded="10px"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ boxShadow: "0px 0px 5px  rgba(113, 128, 150, 1)" }}>
          <Heading>Get in touch</Heading>
          <form method="POST" display="flex" gap="30px" mt="30px">
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Enter your name"
                value={user.name}
              />
            </FormControl>

            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                onChange={inputChangeHandler}
                type="email"
                placeholder="Enter your email"
                value={user.email}
              />
            </FormControl>

            <FormControl id="phone" mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phone"
                onChange={inputChangeHandler}
                type="tel"
                placeholder="Enter your phone number"
                value={user.phone}
              />
            </FormControl>
          </form>

          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Enter your message"
              h="120px"
              onChange={inputChangeHandler}
              value={user.message}
            />
          </FormControl>

          <Button colorScheme="blue" type="submit" onClick={contactForm}>
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

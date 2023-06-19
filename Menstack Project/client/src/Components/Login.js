import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import account from "../assets/createaccount.jpeg";
import { NavLink } from "react-router-dom";

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.status === 422) {
      return toast({
        title: "InValid Credentails",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
    } else {
      navigate("/home");
      return toast({
        title: "Signin Successfully",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
    }
  };
  return (
    <Box
      w="50%"
      mx="auto"
      mt="220px"
      p="40px"
      boxShadow="lg"
      rounded="20px"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ boxShadow: "0px 0px 10px  rgba(113, 128, 150, 1)" }}>
      <Flex alignItems="center" gap="40px">
        <Box
          w="350px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="15px">
          <Image w="100%" objectFit="contain" src={account} />
          <Box color="blue.500" _hover={{ color: "blue.700" }}>
            <NavLink to="/signup">Create an account</NavLink>
          </Box>
        </Box>
        <form method="POST">
          <Stack spacing={4} w="300px">
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                onChange={inputChangeHandler}
                value={user.email}
                type="email"
                placeholder="Your Email"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                onChange={inputChangeHandler}
                value={user.password}
                type="password"
                placeholder="Your Password"
              />
            </FormControl>

            <Button
              w="100px"
              mt="15px"
              bg="gray.600"
              _hover={{ bg: "gray.700" }}
              color="white"
              type="submit"
              onClick={PostData}>
              Log In
            </Button>
          </Stack>
        </form>
      </Flex>
    </Box>
  );
}

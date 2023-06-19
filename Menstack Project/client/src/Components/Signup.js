import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  Input,
  Box,
  Heading,
  InputGroup,
  InputLeftElement,
  Button,
  useToast,
} from "@chakra-ui/react";

import {
  MdSupervisorAccount,
  MdPhone,
  MdEmail,
  MdBusinessCenter,
  MdLock,
  MdLockOutline,
} from "react-icons/md";

export default function Signup() {
  const navigate = useNavigate();
  const toast = useToast();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const Data = await res.json();

    if (res.status === 422) {
      return toast({
        title: "InValid Credentails",
        description: Data.error,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
    } else {
      toast({
        title: "Account created.",
        description: Data.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
      navigate("/login");
    }
  };
  return (
    <Box
      boxShadow="xl"
      w={{ sm: "450px", md: "550px", lg: "650px" }}
      mx="auto"
      p="70px"
      mt="80px"
      rounded="30px"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ boxShadow: "0px 0px 10px  rgba(113, 128, 150, 1)" }}>
      <Box>
        <Heading
          fontSize={{ sm: "28px", md: "30x", lg: "32px" }}
          fontWeight="700"
          mb="20px"
          color="blue.600"
          fontFamily="serif">
          Sign up
        </Heading>
        <form
          method="POST"
          style={{ display: "flex", gap: "25px", flexDirection: "column" }}>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdSupervisorAccount />
              </InputLeftElement>
              <Input
                name="name"
                value={user.name}
                onChange={inputChangeHandler}
                type="text"
                placeholder="Your Name"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdPhone />
              </InputLeftElement>
              <Input
                name="phone"
                value={user.phone}
                onChange={inputChangeHandler}
                type="number"
                placeholder="Phone number"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdEmail />
              </InputLeftElement>
              <Input
                name="email"
                value={user.email}
                onChange={inputChangeHandler}
                type="email"
                placeholder="Email"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdBusinessCenter />
              </InputLeftElement>
              <Input
                name="work"
                value={user.work}
                onChange={inputChangeHandler}
                type="text"
                placeholder="Your Professtion"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdLock />
              </InputLeftElement>
              <Input
                name="password"
                value={user.password}
                onChange={inputChangeHandler}
                type="tel"
                placeholder="Password"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdLockOutline />
              </InputLeftElement>
              <Input
                name="cpassword"
                value={user.cpassword}
                onChange={inputChangeHandler}
                type="tel"
                placeholder="Confirm your password"
              />
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            mt="20px"
            w="140px"
            color="white"
            bg="blue.600"
            variant="solid"
            size="lg"
            _hover={{ bg: "blue.500" }}
            onClick={PostData}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

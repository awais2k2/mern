import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsWechat,
} from "react-icons/bs";
import img from "../assets/IMG_3691.JPG";

export default function About() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const toast = useToast();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUser(data);

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
    callAboutPage();
  }, []);

  return (
    <Box
      w="50%"
      mx="auto"
      shadow="xl"
      p="40px"
      mt="80px"
      position="relative"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ boxShadow: "0px 0px 10px  rgba(113, 128, 150, 1)" }}
      rounded="10px">
      <form method="GET">
        <Flex gap="40px" justifyContent="space-between">
          <Box display="flex" gap="40px">
            <Image boxSize="250px" objectFit="cover" src={img} alt="logo" />
            <Box>
              <Text fontFamily="cursive" fontWeight="600" fontSize="20px">
                {user.name}
              </Text>
              <Text color="blue.500" fontWeight="medium">
                {user.work}
              </Text>
              <Text mt="10px">Ranking 10/10</Text>
            </Box>
          </Box>
          <Box>
            <Button color="rgba(113, 128, 150, 1)" rounded="full">
              Edit Profile
            </Button>
          </Box>
        </Flex>
        <Box mt="25px" display="flex" flexDirection="column" gap="10px">
          <Text mb="10px" fontWeight="700">
            WORK LINK
          </Text>
          <Text display="flex" gap="4px" alignItems="center">
            <Icon as={BsFacebook}></Icon>
            Facebook
          </Text>
          <Text display="flex" gap="4px" alignItems="center">
            <Icon as={BsInstagram}></Icon>
            Instagram
          </Text>
          <Text display="flex" gap="4px" alignItems="center">
            <Icon as={BsTwitter}></Icon>
            Twitter
          </Text>
          <Text display="flex" gap="4px" alignItems="center">
            <Icon as={BsWechat}></Icon>
            WeChat
          </Text>
          <Text display="flex" gap="4px" alignItems="center">
            <Icon as={BsYoutube}></Icon>
            YouTube
          </Text>
          <Text display="flex" gap="4px" alignItems="center">
            <Icon as={BsFacebook}></Icon>
            Facebook
          </Text>
        </Box>
        <Box position="absolute" top="40%" left="35%">
          <Tabs>
            <TabList>
              <Tab _selected={{ fontWeight: "700" }}>About</Tab>
              <Tab _selected={{ fontWeight: "700" }}>Timeline</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex mt="40px" gap="100px">
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="24px"
                    fontWeight="700">
                    <Text>User Id</Text>
                    <Text>Name</Text>
                    <Text>Email</Text>
                    <Text>Phone</Text>
                    <Text>Profession</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="24px"
                    fontWeight="600"
                    color="rgba(113, 128, 150, 1)">
                    <Text>{user._id}</Text>
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                    <Text>{user.phone}</Text>
                    <Text>{user.work}</Text>
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex mt="40px" gap="100px">
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="24px"
                    fontWeight="700">
                    <Text>Experience</Text>
                    <Text>Hourly rate</Text>
                    <Text>Total Projects</Text>
                    <Text>English level</Text>
                    <Text>Availiblity</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="24px"
                    fontWeight="600"
                    color="rgba(113, 128, 150, 1)">
                    <Text>Expert</Text>
                    <Text>10$/hr</Text>
                    <Text>230</Text>
                    <Text>Expert</Text>
                    <Text>6 months</Text>
                  </Box>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </form>
    </Box>
  );
}

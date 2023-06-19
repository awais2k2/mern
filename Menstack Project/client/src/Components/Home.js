import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  const [user, setUser] = useState({
    name: "WELCOME",
    des: "We Are The MERN Developer",
  });
  const getData = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        setUser({
          name: data.name,
          des: "Happy to see you back",
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      display="flex"
      height="93vh"
      bgGradient="linear(to-r, gray.200 50%, #ffffff 50%)"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      justifyItems="center">
      <Box transform="translate(0%,-50%)" lineHeight="50px">
        <Text color="blue.600" fontWeight="bold" letterSpacing="4px">
          {user.name}
        </Text>
        <Text fontWeight="700" fontFamily="heading" fontSize="36px">
          {user.des}
        </Text>
      </Box>
    </Box>
  );
}

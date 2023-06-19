import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
export default function Error() {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      height="93vh"
      bg="gray.200"
      textAlign="center"
      alignItems="center"
      justifyContent="center">
      <Box transform="translate(0%,-50%)">
        <Text
          fontFamily="sans-serif"
          fontWeight="extrabold"
          fontSize="32px"
          mb="10px">
          WE ARE SORRY, PAGE NOT FOUND
        </Text>
        <Text fontSize="12px" fontWeight="400">
          THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HADS ITS NAME
          CHANGED OR IS TEMPRARAY <br /> UNAVAILABLE
        </Text>
      </Box>
      <Box
        position="absolute"
        fontSize="200px"
        top="40%"
        left="50%"
        transform="translate(-50%,-50%)"
        fontWeight="extrabold"
        opacity="0.05">
        404
      </Box>
      <Button
        transform="translate(0,-50%)"
        rounded="full"
        bg="gray.600"
        color="white"
        _hover={{ bg: "gray.700" }}>
        <NavLink to="/">Back to HomePage</NavLink>
      </Button>
    </Box>
  );
}

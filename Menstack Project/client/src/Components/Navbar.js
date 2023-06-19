import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAppRegistration } from "react-icons/md";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Show,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        justifyItems="center"
        textAlign="center"
        paddingX="25px"
        py="20px"
        bg="gray.600"
        color="white">
        <Heading
          fontSize="24px"
          fontWeight="600"
          transition="transform 0.5s"
          _hover={{ transform: "scale(1.1)" }}>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <MdOutlineAppRegistration />
          </NavLink>
        </Heading>
        <Show mt="6px" above="lg">
          <Breadcrumb separator=" " spacing="15px">
            <BreadcrumbItem
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.2)" }}>
              <NavLink style={{ textDecoration: "none" }} to="/home">
                Home
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.2)" }}>
              <NavLink style={{ textDecoration: "none" }} to="/about">
                About
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.2)" }}>
              <NavLink style={{ textDecoration: "none" }} to="/contact">
                Contact
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.2)" }}>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                Login
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.2)" }}>
              <NavLink style={{ textDecoration: "none" }} to="/signup">
                Register
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.2)" }}>
              <NavLink style={{ textDecoration: "none" }} to="/logout">
                Logout
              </NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Show>
        <Show below="lg">
          <Menu>
            <MenuButton>
              <GiHamburgerMenu size="25px" />
            </MenuButton>
            <MenuList color="black" mt="2px" w="120px">
              <MenuItem as={NavLink} to="/home">
                Home
              </MenuItem>
              <MenuDivider />
              <MenuItem as={NavLink} to="/about">
                About
              </MenuItem>
              <MenuDivider />
              <MenuItem as={NavLink} to="/contact">
                Contact
              </MenuItem>
              <MenuDivider />
              <MenuItem as={NavLink} to="/login">
                Login
              </MenuItem>
              <MenuDivider />
              <MenuItem as={NavLink} to="/signup">
                Register
              </MenuItem>
              <MenuDivider />
              <MenuItem as={NavLink} to="/signup">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Show>
      </Box>
    </Box>
  );
}

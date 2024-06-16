"use client";

import React, { useState } from "react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  TextInput,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import Love from "./Love";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <Navbar fluid className="bg-myColors-100">
      <NavbarBrand href="/">
        <h1 className="self-center whitespace-nowrap text-xl font-semibold text-myColors-400 flex">
          Techintutive
          <Love />
        </h1>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="flex gap-5">
          <form>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              className="hidden lg:inline"
              color={"failure"}
            />
          </form>
          {!currentUser ? (
            <Button className="bg-red-400">Sign In</Button>
          ) : (
            <Dropdown
              className="bg-myColors-200"
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <DropdownHeader className="bg-myColors-200 hover:bg-myColors-300">
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </DropdownHeader>
              <DropdownItem clas>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
          )}

          <NavbarToggle className="text-myColors-400 bg-myColors-200 hover:bg-myColors-100" />
        </div>
      </div>
      <NavbarCollapse className="text-myColors-400">
        <NavbarLink
          href="/"
          className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="/blog"
          className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
        >
          Blog
        </NavbarLink>
        <NavbarLink
          href="/about"
          className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
        >
          About
        </NavbarLink>
        <NavbarLink
          href="/resources"
          className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
        >
          Resources
        </NavbarLink>
        <NavbarLink
          href="contact"
          className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;

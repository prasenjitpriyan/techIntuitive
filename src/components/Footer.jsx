import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Love from "./Love";

const FooterComponent = () => {
  return (
    <Footer container className="bg-myColors-100">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand href="/">
            <h1 className="self-center whitespace-nowrap text-xl font-semibold text-myColors-400 flex">
              Techintutive
              <Love />
            </h1>
          </FooterBrand>
          <FooterLinkGroup>
            <FooterLink
              href="/blog"
              className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
            >
              Blog
            </FooterLink>
            <FooterLink
              href="/about"
              className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
            >
              About
            </FooterLink>
            <FooterLink
              href="/resources"
              className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
            >
              Resources
            </FooterLink>
            <FooterLink
              href="contact"
              className="text-myColors-400 border-myColors-400 hover:text-myColors-500"
            >
              Contact
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="border-myColors-400" />
        <FooterCopyright
          className="text-myColors-400"
          href="/copyright"
          by="Techintutive. All rights reserved."
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
};

export default FooterComponent;

"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import Pricing from "./pricing";

export default function page() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing/>
      <Footer/>
    </ChakraProvider>
  );
}

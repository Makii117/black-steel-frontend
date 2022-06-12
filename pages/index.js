import Head from "next/head";

import { Divider, Button, Box } from "@chakra-ui/react";

// components
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import InfoSection from "../components/InfoSection";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Black Steel | Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Slider />
      <Box align={"center"} paddingBottom={"4rem"}>
        <Button
          rounded={"full"}
          bg={"#FB574C"}
          color={"white"}
          _hover={{
            bg: "#FB574C",
          }}
          width={"185px"}
        >
          <a href="/shop">
            <b>Shop now</b>
          </a>
        </Button>
      </Box>
      <Divider />
      <Brands />
      <InfoSection />
      <Divider />

      <Newsletter />
    </div>
  );
}

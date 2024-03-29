import React from "react";

import Container from "@/components/containers";
import Advertisements from "./components/advertisements";
import Banner from "./components/banner";
import Bonus from "./components/bonus";
import Contact from "./components/contact";
import Count from "./components/count";
import Discount from "./components/discount";
import GrigPizza from "./components/grid";

import { Wrapper } from "./style";

import ProductsGrid from "./components/products/index";
import { counter, feedback } from "./data";

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <Container>
        <Bonus />
        <GrigPizza />
      </Container>
      <Advertisements />
      <Container>
        <Discount />
      </Container>
      <Count data={counter} />
      <ProductsGrid />
      <Contact data={feedback} />
    </Wrapper>
  );
};

export default Home;

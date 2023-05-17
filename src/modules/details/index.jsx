import Pizza from "@/api/pizza";
import carousel from "@/assets/images/carousel2.png";
import PizzaCarousel from "@/components/carousel";

import Container from "@/components/containers";
import { RedButton } from "@/components/ui";
import Spinner from "@/components/ui/loaders/spinner";
import React, { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";
import { TbWeight } from "react-icons/tb";
import { useParams } from "react-router-dom";
import {
  Description,
  Information,
  Ingredient,
  Item,
  List,
  Table,
  Text,
  Title,
  Wrapper,
} from "./style";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({ data: {}, loading: true });
  useEffect(() => {
    const get = async () => {
      const api = new Pizza();
      const pizza = await api.getSinglePizza(id);
      setDetails({ data: pizza[0], loading: false });
    };
    get();
  }, [id]);
  return (
    <Container>
      <Wrapper>
        {details.loading ? (
          <Spinner />
        ) : (
          <>
            <PizzaCarousel
              pizzaImg={details.data?.image}
              carouselImg={carousel}
            />
            <Information>
              <Title>{details.data?.name}</Title>
              <Description>{details.data?.description}</Description>
              <Description>Ingredients: </Description>
              <List>
                {details.data?.ingredients?.map((item, id) => (
                  <Ingredient key={id}>{item}</Ingredient>
                ))}
              </List>
              <Table>
                <Item>
                  <Text className='head'>
                    <span>Size </span>
                    <IoIosResize />
                  </Text>
                  <Text>{details.data.sizeSmall}</Text>
                  <Text>{details.data.sizeLarge}</Text>
                </Item>
                <Item>
                  <Text className='head'>
                    <span>Weight </span>
                    <TbWeight />
                  </Text>
                  <Text>{details.data.massSmall}</Text>
                  <Text>{details.data.massLarge}</Text>
                </Item>
                <Item>
                  <Text className='head'>
                    <span>Price </span>
                    <AiOutlineDollarCircle />
                  </Text>
                  <Text>{details.data.priceSmall}$</Text>
                  <Text>{details.data.priceLarge}$</Text>
                </Item>
              </Table>
              <RedButton className='order-list'>Add to order list</RedButton>
            </Information>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Details;

"use client";
import Container from "@/components/Container/Container";
import PetsSection from "@/containers/home/PetsSection";
import BannerSection from "@/containers/home/BannerSection";
import { blogData, petsData, productData } from "@/helpers/DummyJSON";
import MainCard from "@/components/Card/MainCard";
import ArticleCard from "@/components/Card/ArticleCard";
import CustomTextArea from "@/components/TextArea/CustomTextArea";
import { FaPaw } from "react-icons/fa";
import { useScreenDimensions } from "@/contexts/ScreenDimensionProvider";
import { MAX_WIDTH_PHONE } from "@/constants";

export default function Home() {
  const { width, height } = useScreenDimensions();

  const whatsNewcardElements: Array<React.ReactNode> = petsData.map((pet) => (
    <MainCard
      key={pet.id}
      imageSrc={pet.imageSrc}
      title={`${pet.id} - ${pet.title}`}
      gender={`Gene: ${pet.gender}`}
      age={`Age: ${pet.age}`}
      price={pet.price}
    />
  ));

  const productCardElements: Array<React.ReactNode> = productData.map(
    (product) => (
      <MainCard
        key={product.id}
        imageSrc={product.imageSrc}
        title={`${product.title}`}
        gender={`Product: ${product.gender}`}
        age={`Size: ${product.age}`}
        price={product.price}
        promo={product.promo}
      />
    )
  );

  const blogCardElements: Array<React.ReactNode> = blogData.map((blog) => (
    <ArticleCard
      key={blog.id}
      imageSrc={blog.imageSrc}
      category={blog.keyword}
      title={blog.title}
      summary={blog.content}
    />
  ));

  const sponsorCardElement = Array.from({ length: 7 }).map((_, index) => {
    return (
      <img
        key={index}
        src={`/images/sponsors/sponsor_${index + 1}.png`}
        alt={`sponsor_${index + 1}`}
        style={{ mixBlendMode: "multiply", justifyItems: "center" }}
      />
    );
  });

  return (
    <Container id="home" extended>
      <PetsSection
        mainText="What's New"
        subMainText="Take A Look At Some Of Our Pets"
        content={whatsNewcardElements}
        columns={width <= MAX_WIDTH_PHONE ? 2 : 4}        
      />
      <BannerSection
        imageSrc={{
          url: "horizontal-adult-jumper-kiss",
          styles: {},
        }}
        style={{
          backgroundColor: `var(--primary-color)`,
        }}
        textContent={
          <CustomTextArea
            title="One More Friend"
            subTitle="Thousands More Fun!"
            subtitle={{
              text: "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!",
              styles: {
                fontSize: "12px",
                paddingLeft: "35%",
              },
            }}
            status="right"
          />
        }
      />
      <PetsSection
        mainText="Hard to choose right product for your pets?"
        subMainText="Our Products"
        content={productCardElements}
        columns={width <= MAX_WIDTH_PHONE ? 2 : 4}   
        hideIfMobile={true}
      />
      <PetsSection
        subMainText="Proud to be part of Pet Sellers"
        buttonText="View all our sellers"
        content={sponsorCardElement}
        style={{ alignItems: "center" }}
        hideIfMobile={width <= MAX_WIDTH_PHONE ? true : false}
      />
      <BannerSection
        imageSrc={{
          url: "paw-hand-human",
          styles: {},
        }}
        reverse
        style={{
          backgroundColor: `var(--background-secondary-color)`,
        }}
        textContent={
          <CustomTextArea
            title="Adoption"
            titleIcon={<FaPaw />}
            subTitle="We need help. so do they."
            subtitle={{
              text: "Adopt a pet and give it a home,it will be love you back unconditionally.",
              styles: {
                fontSize: "12px",
              },
            }}
            reverse={true}
            status="left"
          />
        }
        rightStyle={{
          beforeLeft: "0",
          beforeRight: "10%",
          scaleX: "-1",
        }}
        leftStyle={{
          top: "50%",
          width: "auto",
          bgImage: "rect_2",
          translateX: "-50%",
          scaleX: "2",
          scaleY: "2",
        }}
        hideIfMobile={true}
      />
      <PetsSection
        mainText="You already Know"
        subMainText="Useful Pet Knowledge"
        content={blogCardElements}
        columns={width <= MAX_WIDTH_PHONE ? 1 : 3}   
      />
    </Container>
  );
}

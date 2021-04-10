import Menu from "../../components/Menu";
import CardBarber from "../../components/CardBarber";
import Footer from "../../components/Footer";

import { Container, Cover, SectionCard } from "./styles";

import { menuLinkPerfil } from "../../services/menuData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Barbershop = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 992, min: 625 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 625, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container>
      <Menu menuLink={menuLinkPerfil} />
      <Cover />
      <h1>melhores barbeiras para você</h1>
      <SectionCard>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          responsive={responsive}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          arrows
        >
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
          <CardBarber></CardBarber>
        </Carousel>
      </SectionCard>
      <Footer />
    </Container>
  );
};

export default Barbershop;
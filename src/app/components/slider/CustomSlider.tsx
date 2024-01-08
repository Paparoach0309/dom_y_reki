import React, { createRef } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { Icon } from "@/app/components/Icon";
import SliderProductItem from "@/app/components/slider/SliderProductItem";
import { reviewsBox } from "@/app/constants/dataConst";

const PrevArrow = ({
  currentSlide,
  slideCount,
  className,
  ...props
}: CustomArrowProps) => {
  const customPrevArrowElement = document.getElementById(
    "customPrevArrow"
  ) as HTMLElement;
  return createPortal(
    <div {...props}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          width: "104px",
          height: "104px",
          backgroundColor: className?.includes("slick-disabled")
            ? "rgba(235, 20, 10, 0.6)"
            : "#EB140A",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <Icon icon={"left"} size={24} />
      </Grid>
    </div>,
    customPrevArrowElement
  );
};

const NextArrow = ({
  currentSlide,
  slideCount,
  className,
  ...props
}: CustomArrowProps) => {
  const customNextArrowElement = document.getElementById(
    "customNextArrow"
  ) as HTMLElement;
  return createPortal(
    <div {...props}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          width: "104px",
          height: "104px",
          backgroundColor: className?.includes("slick-disabled")
            ? "rgba(235, 20, 10, 0.6)"
            : "#EB140A",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <Icon icon={"right"} size={24} />
      </Grid>
    </div>,
    customNextArrowElement
  );
};

const CustomSlider = () => {
  const customSlider = createRef<any>();

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    vertical: false,
    autoplay: false,
    slidesToScroll: 4,
    focusOnSelect: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} ref={customSlider}>
      {reviewsBox.map((i) => {
        return (
          <SliderProductItem
            key={i.id}
            icon={i.icon}
            person={i.person!}
            position={i.position!}
            title={i.title}
          />
        );
      })}
    </Slider>
  );
};

export default dynamic(() => Promise.resolve(CustomSlider), {
  ssr: false,
});

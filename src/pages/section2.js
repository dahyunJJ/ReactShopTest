// swiper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Section2(props) {
  let datalist = props.data;
  console.log("상품리스트 영역", props.data[1].img);
  console.log("상품리스트 영역", datalist[1].id);
  return (
    <div className="sec2 mw">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {datalist.map((item, i) => {
          return (
            <>
              <SwiperSlide className="list" key={i}>
                <Card item={item} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <div className="productCon">
        <img src={`/img/${props.item.img}`} alt={props.item.title} />
      </div>
      <div className="dec">
        <p>{props.item.id + 1}</p>
        <p>{props.item.title}</p>
        <Link to={`/detail/${props.item.id}`}>자세히보기</Link>
      </div>
    </>
  );
}

export default Section2;

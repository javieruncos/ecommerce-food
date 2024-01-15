import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import "../style/Style.css";


const imgSlider = [
    {
        imagen: "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imagen: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imagen: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imagen: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imagen: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imagen: "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imagen: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]




const SliderGalery = () => {
    return (
        <div className='mt-4 containerSlide '>
            <Swiper slidesPerView={3} spaceBetween={30} modules={[Pagination]} loop={true}
                autoplay={{
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {
                    imgSlider.map((item, index) => 
                        <SwiperSlide >
                            <div className='itemSlide' key={index}>
                                <img src={item.imagen} alt="imagen de la galeria" />
                            </div>
                        </SwiperSlide>
                  )
                }
            </Swiper>
        </div >
    );
};

export default SliderGalery;
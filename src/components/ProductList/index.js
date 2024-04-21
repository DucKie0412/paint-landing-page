import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// import styles from './ProductList.module.scss';
// import classNames from 'classnames/bind';

import { get } from '~/services/getDataService';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation, Autoplay, Grid } from 'swiper/modules';

// const cx = classNames.bind(styles)

export default function App() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data, data1, data2] = await Promise.all([
                    get({ page: page, limit: itemsPerPage }),
                    get({ type: 'sonbong', page: page, limit: itemsPerPage }),
                    get({ type: 'sonchongtham', page: page, limit: itemsPerPage }),
                ]);
                setData(data);
                setData1(data1);
                setData2(data2);
            } catch (error) {
                console.error('Error fetching data !', error);
            }
        };
        fetchData();
    }, [page]);

    const nextEl = useRef(null);
    const prevEl = useRef(null);
    const nextEl1 = useRef(null);
    const prevEl1 = useRef(null);
    const nextEl2 = useRef(null);
    const prevEl2 = useRef(null);

    return (
        <div className='wrapper'>
            <div className='highlight-product'>
                <h1>Sản phẩm nổi bật</h1>
                <div className='underline'></div>
                <div className='button'>
                    <div ref={nextEl} className="swiper-button-prev"> &rarr; </div>
                    <div ref={prevEl} className="swiper-button-next"> &larr; </div>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation={
                        {
                            nextEl: nextEl.current,
                            prevEl: prevEl.current,
                        }
                    }
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {data.map((item, index) => (
                        <div className='slide-content'>
                            <SwiperSlide>
                                <Link to={`/productDetail/${item.id}`} className='link'>
                                    <img src={item.image} alt="" className='slide-image' />
                                    <div className="slide-text">{item.name}</div>
                                </Link>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>

            <div className='content-grid'>
                <div className='product-right'>
                    <h2>Sơn bóng</h2>
                    <div className='button'>
                        <div ref={nextEl1} className="swiper-button-prev"> &rarr; </div>
                        <div ref={prevEl1} className="swiper-button-next"> &larr; </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={20}
                        navigation={
                            {
                                nextEl: nextEl1.current,
                                prevEl: prevEl1.current,
                            }
                        }
                        modules={[Grid, Navigation]}
                        className="mySwiperGrid"
                    >
                        {data1.map((item, index) => (
                            <div>
                                <SwiperSlide className='swiper-slide-grid'>
                                    <Link to={`/productDetail/${item.id}`} className='link'>
                                        <img src={item.image} alt="" className='slide-image' />
                                        <div className="slide-text">{item.name}</div>
                                    </Link>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>

                <div className='product-left'>
                    <h2>Sơn chống thấm</h2>
                    <div className='button'>
                        <div ref={nextEl2} className="swiper-button-prev"> &rarr; </div>
                        <div ref={prevEl2} className="swiper-button-next"> &larr; </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={20}
                        navigation={
                            {
                                nextEl: nextEl2.current,
                                prevEl: prevEl2.current,
                            }
                        }
                        modules={[Grid, Navigation]}
                        className="mySwiperGrid"
                    >
                        {data2.map((item, index) => (
                            <div>
                                <SwiperSlide className='swiper-slide-grid'>
                                    <Link to={`/productDetail/${item.id}`} className='link'>
                                        <Link><img src={item.image} alt="" className='slide-image' /></Link>
                                        <div className="slide-text">{item.name}</div>
                                    </Link>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
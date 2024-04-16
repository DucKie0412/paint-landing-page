import { useEffect, useState, useRef } from 'react';
import styles from './ShowProduct.module.scss'
import classNames from 'classnames/bind';
import { get } from '~/services/getDataService';
import { getWithID } from '~/services/getDataWithID';
import Button from '../Button';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const cx = classNames.bind(styles)

function ShowProduct({ productID }) {

    const [data, setData] = useState({})
    const [data1, setData1] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWithID({ id: productID });
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [productID]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data1 = await get();
                setData1(data1);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    });



    const nextEl = useRef(null);
    const prevEl = useRef(null);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-name')}>
                <h1>{data.name}</h1>
            </div>
            <div className={cx('product')}>
                <div className={cx('product-image')}>
                    <div className={cx('image')}>
                        <img src={data.image} alt={data.name} />
                    </div>
                </div>

                <div className={cx('product-info')}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque nam esse accusamus aliquid officia rerum maxime consectetur, voluptatibus, totam sed saepe praesentium iure omnis veniam dolore porro? Consequatur, ea.</p>
                    <div className={cx('button-group')}>
                        <Button
                            content='Tìm cửa hàng'
                            icon={faSearch}
                        />
                        <Button
                            content='Tư vấn ngay'
                            icon={faPhone}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('product-info-physic')}>
                <div>
                    <p class={cx('physic-title')}>Thuộc tính vật lý</p>
                    <div class={cx('row')}>
                        <div class={cx('item')}>
                            <div class={cx('item-image')}>
                                <img src="https://kansaipaint.com.vn/wp-content/themes/k6/assets/images/product_icon_1.png" alt="product_icon_1" />
                            </div>
                            <div class={cx('item-title')}>
                                <p>Thi công</p>
                            </div>
                            <div class={cx('item-info')}>Bằng chối sơn, con lăn hoặc máy phun sơn</div>
                        </div>

                        <div class={cx('item')}>
                            <div class={cx('item-image')}>
                                <img src="https://kansaipaint.com.vn/wp-content/themes/k6/assets/images/product_icon_2.png" alt="product_icon_1" />
                            </div>
                            <div class={cx('item-title')}>
                                <p>Thời gian</p>
                            </div>
                            <div class={cx('item-info')}>Lớp sau cách lớp trước 1-2 giờ</div>
                        </div>

                        <div class={cx('item')}>
                            <div class={cx('item-image')}>
                                <img src="https://kansaipaint.com.vn/wp-content/themes/k6/assets/images/product_icon_3.png" alt="product_icon_1" />
                            </div>
                            <div class={cx('item-title')}>
                                <p>
                                    Độ che phủ			            </p>
                            </div>
                            <div class={cx('item-info')}>10-12m²/lít</div>
                        </div>

                        <div class={cx('item')}>
                            <div class={cx('item-image')}>
                                <img src="https://kansaipaint.com.vn/wp-content/themes/k6/assets/images/product_icon_4.png" alt="product_icon_1" />
                            </div>
                            <div class={cx('item-title')}>
                                <p>
                                    Số lớp sơn			            </p>
                            </div>
                            <div class={cx('item-info')}>≥ 2</div>
                        </div>

                        <div class={cx('item')}>
                            <div class={cx('item-image')}>
                                <img src="https://kansaipaint.com.vn/wp-content/themes/k6/assets/images/product_icon_5.png" alt="product_icon_1" />
                            </div>
                            <div class={cx('item-title')}>
                                <p>
                                    Pha loãng			            </p>
                            </div>
                            <div class={cx('item-info')}>Có thể sử dụng ngay, nếu cần có thể pha thêm 5% nước sạch</div>
                        </div>

                        <div class={cx('item')}>
                            <div class={cx('item-image')}>
                                <img src="https://kansaipaint.com.vn/wp-content/themes/k6/assets/images/product_icon_6.png" alt="product_icon_1" />
                            </div>
                            <div class={cx('item-title')}>
                                <p>
                                    Lau rửa			            </p>
                            </div>
                            <div class={cx('item-info')}>Rửa ngay với nước sạch</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('more-details')}>
                <p className={cx('more-details-title')}>Thông tin chi tiết</p>
                <div>
                    <div>
                        <div>
                            <div className={cx('more-details-item')}>
                                <div class={cx('title')}>
                                    <p>Chứng chỉ</p>
                                </div>
                                <div class={cx('info')}><ul>
                                    <li>Nhãn Xanh Green label Singapore</li>
                                    <li>Quy chuẩn kỹ thuật quốc gia : QCVN 16</li>
                                </ul>
                                </div>
                            </div>
                            <div className={cx('more-details-item')}>
                                <div class={cx('title')}>
                                    <p>Thành phần</p>
                                </div>
                                <div class={cx('info')}><p>Nhựa chuyên dụng cùng với bột màu và bột khoáng (72 – 83%), phụ gia ( 9-11%), nước (19-22%)</p>
                                </div>
                            </div>
                            <div className={cx('more-details-item')}>
                                <div class={cx('title')}>
                                    <p>Mục đích sử dụng</p>
                                </div>
                                <div class={cx('info')}><p>{data.name} 12&nbsp; sử dụng cho các bề mặt ngoại thất mới sơn hoặc đã sơn như tường gạch, thạch cao, trát xi măng hoặc tấm a-mi-ăng.</p>
                                </div>
                            </div>
                            <div className={cx('more-details-item')}>
                                <div class={cx('title')}>
                                    <p>Hướng dẫn thi công</p>
                                </div>
                                <div class={cx('info')}><p><strong>Đối với các bề mặt còn mới, chưa sơn:</strong></p>
                                    <p>Đảm bảo bề mặt khô và ổn định kết cấu trong vòng ít nhất 28 ngày. Những vết nứt lớn cần được trám bằng xi măng và chà mịn. Xử lý những vết lồi lõm nhỏ bằng loại bột trám ngoại thất phù hợp. Loại bỏ tạp chất bám dinh trên bề mặt bằng chổi.</p>
                                    <p><strong>Đối với các bề mặt sơn lại:</strong></p>
                                    <p>Kiểm tra rêu và nấm mốc trên bề mặt. Nếu có, cần loại bỏ bằng cách chà sạch với dung dịch tẩy (pha 1 phần thuốc tẩy với 3 phần nước). Để dung dịch thẩm thấu hoàn toàn lên bề mặt bị nấm mốc. Khi đã khô, dùng dụng cụ phun nước công suất lớn để xả sạch nấm mốc, rêu, bụi phấn và các tạp chất còn sót trên bề mặt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="comment-product">
                            <div class="comment">
                                <div id="comments" class="comments-area">
                                    <div class="comment-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='recommend-product'>
                <h2>Các sản phẩm liên quan</h2>
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
                    {data1.map((item, index) => (
                        <div className={cx('slide-content')}>
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

        </div>

    );
}

export default ShowProduct;
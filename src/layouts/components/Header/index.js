import { useState, useEffect, React } from 'react';
import Marquee from 'react-fast-marquee';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPalette, faPhone, faShieldCat, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)


function Header() {

    const [isSticky, setIsSticky] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 367) {
                setIsSticky('navbar2');
            }
            else {
                setIsSticky('navbar');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return (
        <div className={cx('wrapper')}>
            <Marquee speed={70} pauseOnHover className={cx('ticker')}>
                Công ty cổ phần sơn Trường Thọ : Số 75, đường Núi Vàng, phường Trung Sơn, thành phố Tam Điệp, tỉnh Ninh Bình                </Marquee>
            <div className={cx("header-image")}></div>

            <div className={cx(isSticky)}>
                <div className={cx("navbar-item")}>
                    <div className={cx('navbar-site')}>
                        <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faHome} />Trang chủ</div>
                        <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faProductHunt} />Sản phẩm</div>
                        <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faPalette} />Bảng màu</div>
                        <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faShieldCat} />Chính sách</div>
                        <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faPhone} />Tư vấn</div>
                    </div>
                </div>

                <div className={cx("navbar-search")}>
                    <div className={cx('search')}>
                        <input
                            placeholder='Bạn muốn tìm gì?'
                            spellCheck={false}
                        />

                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
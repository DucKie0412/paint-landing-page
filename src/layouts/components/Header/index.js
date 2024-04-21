import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPalette, faPhone, faShieldCat, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)


function Header() {

    const [isSticky, setIsSticky] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 367) {
                setIsSticky('navbar2');
            }
            else {
                setIsSticky('navbar');
            }
        }

        handleScroll();

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
                        <Link to='/' className={cx('link')}>
                            <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faHome} />Trang chủ</div>
                        </Link>
                        <Link to="/products" className={cx('link')}>
                            <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faProductHunt} />Sản phẩm</div>
                        </Link>
                        <Link to="#" className={cx('link')}>
                            <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faPalette} />Bảng màu</div>
                        </Link>
                        <Link to="#" className={cx('link')}>
                            <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faShieldCat} />Chính sách</div>
                        </Link>
                        <Link to="/contact" className={cx('link')}>
                            <div className={cx("site")}><FontAwesomeIcon className={cx('icon')} icon={faPhone} />Tư vấn</div>
                        </Link>
                    </div>
                </div>

                <div className={cx("navbar-search")}>
                    <div className={cx('search')}>
                        <input
                            placeholder='Bạn muốn tìm gì?'
                            spellCheck={false}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && inputValue) {
                                    window.location.href = `/search/${inputValue}`;
                            }
                        }}
                        />

                        <Link to={inputValue ? `/search/${inputValue}` : '#'}>
                            <button className={cx('search-button')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
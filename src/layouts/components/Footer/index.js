import styles from './footer.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images';


const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('footer-logo')}>
                    <img src={images.logo} alt="" className={cx('logo')} />
                    <div className={cx('footer-social')}>
                        <p>Kết nối với chúng tôi</p>
                        <a href="/"><img src={images.icon.facebook} alt="" className={cx('icon')} /></a>
                        <a href="/"><img src={images.icon.youtube} alt="" className={cx('icon')} /></a>
                        <a href="/"><img src={images.icon.zalo} alt="" className={cx('icon')} /></a>
                    </div>
                </div>
                <div className={cx('footer-nav')}>
                    <h2>Danh mục</h2>
                    <ul className={cx('nav-list')}>
                        <li><a href="/">Sản phẩm</a></li>
                        <li><a href="/">Bảng màu</a></li>
                        <li><a href="/">Chính sách</a></li>
                        <li><a href="/">Tư vấn</a></li>
                    </ul>
                </div>
                <div className={cx('footer-detail')}>
                    <h2>Thông tin liên hệ</h2>
                    <ul className={cx('detail-list')}>
                        <li>Địa chỉ: Số 75, đường Núi Vàng, phường Trung Sơn, thành phố Tam Điệp, tỉnh Ninh Bình</li>
                        <li>Số điện thoại: 0123 456 789</li>
                        <li>Email: sontruongtho@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
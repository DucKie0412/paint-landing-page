import classNames from "classnames/bind";
import styles from './About.module.scss'
import images from "~/assets/images";

const cx = classNames.bind(styles)

function About() {
    return (
        <div className={cx('about')}>
            <h1>Về chúng tôi</h1>
            <div className={cx('child-paragraph')}>
                <p>Tại Công ty Cổ Phần Sơn Trường Thọ, chúng tôi tự hào là một trong những nhà sản xuất và cung cấp hàng đầu về các sản phẩm sơn chất lượng cao. Với hơn 20 năm kinh nghiệm trong ngành công nghiệp sơn, chúng tôi cam kết cung cấp những giải pháp sơn đa dạng và chất lượng nhất để đáp ứng mọi nhu cầu của khách hàng.Sản phẩm của chúng tôi bao gồm một loạt các loại sơn chất lượng cao, từ sơn lót, sơn phủ, đến sơn trang trí và sơn chống rỉ.</p>
                <div className={cx('image')}><img src={images.mainCarousel.slide1} alt="" srcset="" /></div>
                <div className={cx('image')}><img src={images.mainCarousel.slide1} alt="" srcset="" /></div>
            </div>

            <div className={cx('child-paragraph')}>
                <p>Chúng tôi luôn chú trọng vào việc nghiên cứu và phát triển sản phẩm để đảm bảo chúng luôn đáp ứng được những yêu cầu khắt khe nhất về hiệu suất và tính thẩm mỹ.Với sứ mệnh "Mang lại sự đẹp và bền vững cho mọi công trình", chúng tôi không ngừng nỗ lực để cung cấp các sản phẩm sơn chất lượng cao nhất, giúp tạo ra những bề mặt hoàn hảo và bền bỉ trong thời gian dài.Hãy đồng hành cùng Công ty Cổ Phần Sơn Trường Thọ để biến ý tưởng của bạn thành hiện thực và tạo nên những công trình tuyệt vời!</p>
            </div>

        </div>
    );
}

export default About;
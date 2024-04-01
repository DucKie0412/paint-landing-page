import classNames from "classnames/bind";
import styles from './MainBanner.module.scss'
import ImageCarousel from "../ImageCarousel";
import images from "~/assets/images";

const cx = classNames.bind(styles)

function MainBanner() {

    return (
        <div className={cx('wrapper')}>
            <ImageCarousel images={Object.values(images.mainCarousel)}/>
        </div>
    );
}

export default MainBanner;
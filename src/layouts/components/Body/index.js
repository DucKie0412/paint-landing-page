import MainBanner from "~/components/MainBanner";
import styles from './Body.module.scss'
import classNames from "classnames/bind";
import About from "~/components/About";
import Statistic from "~/components/Statistic";
import Building from "~/components/Building";
import images from "~/assets/images";
import Feedback from "~/components/Feedback";
import News from "~/components/News";

const cx = classNames.bind(styles);
function Body() {
    return (
        <div className={cx('wrapper')}>
            <MainBanner />
            <About />
            <Statistic />
            <Feedback />
            <Building images={Object.values(images.building)}/>
            <News />
        </div>
    );
}

export default Body;
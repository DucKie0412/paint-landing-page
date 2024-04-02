import classNames from "classnames/bind";
import styles from "./Statistic.module.scss";
import ChildStatistic from "../ChildStatistic";

const cx = classNames.bind(styles)

function Statistic() {
    return (
        <div className={cx('wrapper')}>
            <ChildStatistic
                total={5}
                time={100}
                content="năm kinh nghiệm trong nghề"
            />
            <ChildStatistic
                total={1107}
                time={100}
                content="thùng sơn đã được bán ra thị trường"
            />
            <ChildStatistic
                total={285}
                time={100}
                content="số lượng công trình đã nhiệm thu"
            />
            <ChildStatistic
                type='4.7'
                time={100}
                content="đánh giá của khách hàng"
            />
        </div>
    );
}

export default Statistic;
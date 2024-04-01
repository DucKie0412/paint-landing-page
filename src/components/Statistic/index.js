import classNames from "classnames/bind";
import styles from "./Statistic.module.scss";
import ChildStatistic from "../ChildStatistic";

const cx = classNames.bind(styles)

function Statistic() {
    return (
        <div className={cx('wrapper')}>
            <ChildStatistic
                total={20}
                time={100}
                content="nam kinh nghiem trong nghe"
            />
            <ChildStatistic
                total={1107}
                time={100}
                content="san pham da duoc ban ra thi truong"
            />
            <ChildStatistic
                total={285}
                time={100}
                content="so luowng cong trinh da nhiem thu"
            />
            <ChildStatistic
                type='4.7'
                time={100}
                content="danh gia cua khach hang"
            />
        </div>
    );
}

export default Statistic;
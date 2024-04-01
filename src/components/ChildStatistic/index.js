import { useState, useEffect } from "react";

import classNames from "classnames/bind";
import styles from "./ChildStatistic.module.scss";

const cx = classNames.bind(styles);

function ChildStatistic({total, type, time, content}) {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const target = total;
        const duration = time;
        const increment = target / duration;

        const interval = setInterval(() => {
            setNumber(prev => {
                const newNumber = prev + increment;
                return newNumber >= target ? target : newNumber;
            })
        }, 10)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('number')}>{type ? `${type}/5.0` : Math.round(number)}</h2>
            <p className={cx('content')}>{content}</p>
        </div>
    );
}

export default ChildStatistic;
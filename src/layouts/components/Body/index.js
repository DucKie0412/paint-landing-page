import React from "react";
import LazyLoad from 'react-lazyload';
import { useState, useEffect, useRef } from "react";

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

    const [shouldRenderStatistic, setShouldRenderStatistic] = useState(false);
    const statisticRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setShouldRenderStatistic(true);
            }
        }, {
            rootMargin: '0px 0px -260px 0px'
        });

        if (statisticRef.current) {
            observer.observe(statisticRef.current);
        }

        return () => {
            if (statisticRef.current) {
                observer.unobserve(statisticRef.current);
            }
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <MainBanner />
            <About />
            <div ref={statisticRef}>
                {shouldRenderStatistic && (
                        <Statistic />
                )}
            </div>
            <Feedback />
            <Building images={Object.values(images.building)}/>
            <News />
        </div>
    );
}

export default Body;
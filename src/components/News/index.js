import Card from '../Card';
import styles from './News.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function News() {
    return (
        <div className={cx('news')}>
            <h1>Tin tức</h1>
            <div className={cx('news-list')}>
                <Card
                    image={''}
                    name='Bài báo 1'
                    body='noi dung cua bai bao nay dai vcl. noi dung cua bai bao nay dai vcl.noi dung cua bai bao nay dai vcl.noi dung cua bai bao nay dai vcl. het 4 dong luon ma, thé ma chua het content'
                    button
                />
                <Card
                    image={''}
                    name='Bài báo 2'
                    body='ipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.'
                    button
                />
                <Card
                    image={''}
                    name='Bài báo 3'
                    body='ipiscvulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.'
                    button
                />
                <Card
                    image={''}
                    name='Bài báo 4'
                    body='ipiscing elit. Nulla queu pharetra nec, mattis ac neque. Duis vulputate commodo.'
                    button
                />
            </div>
        </div>
    );
}

export default News;
import Card from '../Card';
import styles from './Feedback.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Feedback() {
    return (
        <div className={cx('feedback')}>
            <Card
                image={''}
                name='Khách hàng: Nguyen Van A'
                body='ipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.'
            />
            <Card
                image={''}
                name='Khách hàng: Nguyen Van B'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.'

            />
            <Card
                image={''}
                name='Khách hàng: Nguyen Van C'
                body='tur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.'
            />
            <Card
                image={''}
                name='Khách hàng: Nguyen Van D'
                body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.'
            />
        </div>
    );
}

export default Feedback;
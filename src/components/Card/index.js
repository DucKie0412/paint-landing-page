import classNames from 'classnames/bind'
import styles from './Card.module.scss'
import images from '~/assets/images';
const cx = classNames.bind(styles)

function Card({ image, name, body, button = false, link }) {
    return (
        <div className={cx('card')}>
            <div className={cx('card-image')}>
                <img src={images.test} alt="" />
            </div>
            <div className={cx('card-header')}>
                <h2 className={cx('card-title')}>{name}</h2>
            </div>
            <div className={cx('card-body')}>
                <p className={cx('card-text')}>{body}</p>
            </div>
            {button && (
                <div className={cx('card-button')}>
                    <a href="/">Chi tiết</a>
                </div>
            )}
        </div>
    );
}

export default Card;
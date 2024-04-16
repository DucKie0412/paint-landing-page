import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)
function Button({ content, icon }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{content}</div>
            <FontAwesomeIcon className={cx('icon')} icon={icon} />
        </div>
    );
}

export default Button;
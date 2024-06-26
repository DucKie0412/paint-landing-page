import { useState, React } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './Building.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)

function Building({ images }) {

    // Tùy chỉnh các style cho modal
    const customStyles = {
        content: {
            maxWidth: '100%', // Chiều rộng tối đa của modal
            maxHeight: '100%', // Chiều cao tối đa của modal
            width: '1200px', // Kích thước cố định của modal
            height: 'auto',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden', // Ẩn phần thừa nếu ảnh vượt qua kích thước của modal
        }
    };

    const [modalIsOpen, setModalIsOpen] = useState({});

    const openModal = (index) => {
        setModalIsOpen(prevState => ({
            ...prevState,
            [index]: true
        }))
    }

    const closeModal = (index) => {
        setModalIsOpen(prevState => ({
            ...prevState,
            [index]: false
        }))
    }


    return (
        <div className={cx('wrapper')}>
            <h2>Một số hình ảnh công trình thực tế</h2>
            <div className={cx('building-list')}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className={cx('image')}
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {images.map((image, index) => (
                <ReactModal
                    key={index}
                    isOpen={modalIsOpen[index]}
                    onRequestClose={() => closeModal(index)}
                    style={customStyles}>

                    <div style={{ textAlign: 'right' }}>
                        <button onClick={() => closeModal(index)}><FontAwesomeIcon icon={faXmark} style={{width: 30}}/></button>
                    </div>
                    <img
                        src={image}
                        alt=""
                        className={cx('modal-image')}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </ReactModal>
            ))}
        </div>
    );
}

export default Building;
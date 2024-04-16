import { useState } from 'react';
import { redirect } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formDataToJson } from '~/services/formDataToJson';
import { sendData } from '~/services/sendDataService';

import styles from './ContactForm.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ContactForm() {

    const [value, setValue] = useState({});
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const validateForm = (data) => {
        let errors = {};

        if (!data.name) errors.name = "Bạn chưa điền tên";
        if (!data.email) errors.email = "Bạn chưa điền email";
        else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email không hợp lệ";
        if (!data.address) errors.address = "Bạn chưa điền địa chỉ";
        if (!data.phone) errors.phone = "Bạn chưa điền số điện thoại";
        else if (!/^0\d{9}$/.test(data.phone)) errors.phone = "Số điện thoại không hợp lệ";

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'address':
                setAddress(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;

            default:
                break;
        }

        // Update form data
        setValue(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Validate the field
        const fieldErrors = validateForm({ [name]: value });

        // Update error state
        setErrors(prevState => ({
            ...prevState,
            [name]: fieldErrors[name]
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = formDataToJson(formData);
        const errors = validateForm(data);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        setValue(data);

        // Call API to send the data to the server
        try {
            // Call API to send the data to the server
            const response = await sendData(data);
            console.log('Data sent successfully', response);

            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 400));

            // Show success toast notification
            toast.success('Thông tin của bạn đã được gửi đi !', {
                position: 'top-right',
                autoClose: 2500,
                className: cx('toast-success'),
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setName('');
            setEmail('');
            setAddress('');
            setPhone('');
            setMessage('');
            redirect("/");

        } catch (error) {
            console.error('Failed to send data', error);

            // Show error toast notification
            toast.error('Có lỗi xảy ra, vui lòng thử lại sau !', {
                position: 'top-right',
                autoClose: 2500,
                className: cx('toast-error'),
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
            });
        }
    }

    return (
        <div className={cx('wrapper')}>
            <img src="https://image2.tin247.news/pictures/2023/05/12/qjx1683848751.jpg" alt="" />
            <form action="" method="post" onSubmit={handleSubmit}>
                <h2>Để lại thông tin và chúng tôi sẽ liên hệ tới bạn sớm nhất có thể</h2>
                <div className={cx('title')}>
                    <label htmlFor="name">Họ và tên</label>
                    <span className={cx(errors.name ? 'error' : 'hidden')}>{errors.name || ' '}</span>
                </div>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} />

                <div className={cx('title')}><label htmlFor="email">Email </label>
                    <span className={cx(errors.email ? 'error' : 'hidden')}>{errors.email || ' '}</span>
                </div>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} />

                <div className={cx('title')}><label htmlFor="address">Địa chỉ </label>
                    <span className={cx(errors.address ? 'error' : 'hidden')}>{errors.address || ' '}</span>
                </div>
                <input type="text" id="address" name="address" value={address} onChange={handleChange} />

                <div className={cx('title')}><label htmlFor="phone">Số điện thoại </label>
                    <span className={cx(errors.phone ? 'error' : 'hidden')}>{errors.phone || ' '}</span>
                </div>
                <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} />

                <div className={cx('title')}><label htmlFor="message">Lời nhắn (nếu có) </label>
                    <span className={cx(errors.message ? 'error' : 'hidden')}>{errors.message || ' '}</span>
                </div>
                <textarea id="message" name="message" value={message} onChange={handleChange} />

                <button type="submit">Gửi thông tin</button>
                <ToastContainer />
            </form>
        </div>
    );
}

export default ContactForm;
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './ProductList.module.scss'
import images from '~/assets/images'
import { get } from '~/services/getDataService'


const cx = classNames.bind(styles)

function ProductList() {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get();
                setData(data);
                const totalItem = data.length;
                const pages = Math.ceil(totalItem / itemPerPage);
                setTotalPages(pages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    // Lấy dữ liệu của trang hiện tại
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // logic chuyển trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Logic cho 2 nut tien lui
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className={cx('wrapper')}>
            <h1>San pham ban chay</h1>
            <div className={cx('product-list')}>
                <div className={cx('products')}>
                    {/* Render danh sách hình ảnh */}
                    {currentItems.map((item, index) => {
                        return (
                            <div key={index} className={cx('product-item')}>
                                <img src={images.test} alt={item.name} />
                                <div className={cx('product-info')}>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={cx('page')}>
                    {/* Phân trang */}
                    <ul className={cx('pagination')}>
                        <li className={cx(`page-item ${isFirstPage ? 'disabled' : ''}`)}>
                            <button className={cx('page-link')} onClick={() => paginate(currentPage - 1)} disabled={isFirstPage}>
                                Trang trước
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i} className={cx(`page-item ${i + 1 === currentPage ? 'active' : ''}`)}>
                                <button className={cx('page-link')} onClick={() => paginate(i + 1)}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
                            <button className={cx('page-link')} onClick={() => paginate(currentPage + 1)} disabled={isLastPage}>
                                Tiếp
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
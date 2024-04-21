import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { search } from '~/services/searchDataService';
import styles from './SearchPage.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchPage({ searchKey }) {
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const itemsCountPerPage = 9;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await search({ searchKey: searchKey });
                setData(data);
            } catch (error) {
                console.log('error', error);
            }
        }
        fetchData();
    }, [searchKey]);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    }

    let active = 1;
    let items = [];
    let totalNumberOfPages = Math.ceil(data.length / itemsCountPerPage);
    for (let number = 1; number <= totalNumberOfPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Container className={cx('wrapper')}>
            <h1>Bạn đang tìm kiếm với từ khóa: {searchKey}</h1>
            <Row>
                {data.slice((activePage - 1) * itemsCountPerPage, activePage * itemsCountPerPage).map((item, index) => (
                    <Col key={index} md={4}>
                        <Card className={cx('card')}>
                            <Link to={`/productDetail/${item.id}`} className={cx('link')}>
                                <Card.Body className={cx('card-body')}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Title className={cx('card-title')}>{item.name}</Card.Title>
                                    <Card.Text className={cx('card-text')}>Loại sơn: {item.type}</Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className={cx('pagination')}>
                <Pagination size='lg'>
                    <Pagination.First onClick={() => handlePageChange(1)} />
                    <Pagination.Prev onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : 1)} />
                    {items}
                    <Pagination.Next onClick={() => handlePageChange(activePage < items.length ? activePage + 1 : items.length)} />
                    <Pagination.Last onClick={() => handlePageChange(items.length)} />
                </Pagination>
            </div>
        </Container>
    );
}

export default SearchPage;
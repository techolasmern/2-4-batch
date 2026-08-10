import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// useNavigate()

export const StorePage = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(-1);

    const navigate = useNavigate();

    const handleProductsFetch = async () => {
        try {
            const LIMIT = 20;
            const SKIP = (currentPage - 1) * LIMIT;
            const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${SKIP}`);
            const res = await response.json();
            if (totalPages == -1) {
                setTotalPages(Math.ceil(res.total / LIMIT));
            }
            return setProducts(res.products);
        } catch (err) {
            return console.log(err);
        }
    }

    useEffect(() => {
        handleProductsFetch();
    }, [currentPage]);

    return <Fragment>
        <div className="d-flex gap-2 flex-wrap justify-content-center">
            {
                products.map(product => {
                    return <div key={product.id} className="shadow p-3">
                        <div>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div>
                            <h3>{product.title}</h3>
                            <div className="d-flex w-100 gap-3">
                                <button className="btn btn-info w-100" onClick={() => navigate(`/view/${product.id}`)}>View</button>
                                <button className="btn btn-success w-100">Add Cart</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <div>
            {
                totalPages > 0 && new Array(totalPages).fill(0).map((_, index) => index + 1).map(number => {
                    return <button key={number} onClick={() => setCurrentPage(number)}>{number}</button>
                })
            }
        </div>
    </Fragment>
};
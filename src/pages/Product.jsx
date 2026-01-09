import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(addCart(product));

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);

      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width="70%" />
          <Skeleton height={90} count={3} />
          <Skeleton height={40} width={100} />
          <Skeleton height={50} width={150} />
          <Skeleton height={120} count={2} />
          <Skeleton height={50} width={200} style={{ marginTop: 20 }} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-5">
      <div className="row justify-content-center align-items-start">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h4 className="text-uppercase fw-bold" style={{ color: '#1B5E7F' }}>
            {product.category}
          </h4>
          <h1 className="display-5 fw-bold my-3" style={{ color: '#1B5E7F' }}>
            {product.title}
          </h1>

          <p className="lead fw-bold text-secondary">
            Rating: {product.rating?.rate}{" "}
            <i className="fa fa-star text-warning"></i>{" "}
            <span className="text-muted">({product.rating?.count} reviews)</span>
          </p>

          <h3 className="display-6 fw-bold my-4" style={{ color: '#1B5E7F' }}>
            ${product.price}
          </h3>

          <p className="lead text-muted" style={{ lineHeight: '1.8' }}>
            {product.description}
          </p>

          <div className="mt-4">
            <button
              className="btn px-4 py-2 me-3"
              style={{
                border: '2px solid #1B5E7F',
                color: '#1B5E7F',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1B5E7F';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1B5E7F';
              }}
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>

            <Link
              to="/cart"
              className="btn px-4 py-2 text-white"
              style={{ backgroundColor: '#1B5E7F' }}
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="d-flex justify-content-center gap-4 overflow-hidden">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} height={400} width={280} className="mx-2" />
      ))}
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="d-flex gap-4">
      {similarProducts.map((item) => (
        <div
          key={item.id}
          className="card shadow-sm text-center"
          style={{ minWidth: "280px", maxWidth: "280px" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="card-img-top p-3"
            style={{ height: "280px", objectFit: "contain" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold" style={{ color: '#1B5E7F' }}>
              {item.title.substring(0, 40)}...
            </h5>
            <p className="lead fw-bold mb-3" style={{ color: '#1B5E7F' }}>
              ${item.price}
            </p>
          </div>
          <div className="card-footer bg-transparent border-0 pb-4">
            <Link
              to={`/product/${item.id}`}
              className="btn btn-outline me-2"
              style={{ borderColor: '#1B5E7F', color: '#1B5E7F' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1B5E7F';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1B5E7F';
              }}
            >
              View Details
            </Link>
            <button
              className="btn text-white"
              style={{ backgroundColor: '#1B5E7F' }}
              onClick={() => addProduct(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />

      <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <div className="container">
          {loading ? <Loading /> : <ShowProduct />}

          <div className="my-5 py-5">
            <div className="text-center d-none d-md-block">
              <h2 className="fw-bold mb-5" style={{ color: '#1B5E7F' }}>
                You May Also Like
              </h2>
              <Marquee pauseOnHover={true} speed={60} gradient={false}>
                {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
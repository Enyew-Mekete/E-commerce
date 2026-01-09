import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart!");
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={50} width={600} />
      </div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={600} />
        </div>
      ))}
    </>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button
          className="btn m-2 px-4 py-2"
          style={{
            border: "2px solid #1B5E7F",
            color: "#1B5E7F",
            background: "transparent",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1B5E7F";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#1B5E7F";
          }}
          onClick={() => setFilter(data)}
        >
          All
        </button>
        {["men's clothing", "women's clothing", "jewelery", "electronics"].map((cat) => (
          <button
            key={cat}
            className="btn m-2 px-4 py-2"
            style={{
              border: "2px solid #1B5E7F",
              color: "#1B5E7F",
              background: "transparent",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#1B5E7F";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#1B5E7F";
            }}
            onClick={() => filterProduct(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {filter.map((product) => (
        <div
          key={product.id}
          className="col-md-4 col-sm-6 col-12 mb-5"
        >
          <div className="card h-100 shadow-sm border-0 text-center">
            <div className="p-3">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "320px", objectFit: "contain" }}
              />
            </div>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold" style={{ color: "#1B5E7F" }}>
                {product.title.substring(0, 30)}...
              </h5>
              <p className="card-text text-muted small flex-grow-1">
                {product.description.substring(0, 80)}...
              </p>
              <p className="lead fw-bold mt-3" style={{ color: "#1B5E7F" }}>
                $ {product.price}
              </p>
            </div>

            <div className="card-footer bg-transparent border-0 mt-auto pb-4">
              <Link
                to={`/product/${product.id}`}
                className="btn px-4 py-2 me-2 text-white"
                style={{ backgroundColor: "#1B5E7F" }}
              >
                Buy Now
              </Link>
              <button
                className="btn px-4 py-2"
                style={{
                  border: "2px solid #1B5E7F",
                  color: "#1B5E7F",
                  background: "transparent"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1B5E7F";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#1B5E7F";
                }}
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: "#1B5E7F" }}>
              Latest Products
            </h2>
            <hr style={{ borderColor: "#1B5E7F", width: "100px", margin: "auto" }} />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import axios from "axios";
import Stars from "./components/Stars";
import AddToCart from "./components/AddToCart";

const PRODUCTS = "http://localhost:3001/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        const filteredProduct = response.data.find((data) => data._id === id);
        setProducts(filteredProduct);
      } catch (e) {
        console.log("Couldn't fetch products");
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    getSingleProduct(`${PRODUCTS}?id=${id}`);
  }, []);

  if (!isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  const {
    name,
    price,
    des,
    category,
    stock,
    stars,
    image,
  } = singleProduct;

  return (
    <Wrapper>
      <PageNavigation title={products.name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <img src={products.img} height={600} width={500}/>
          </div>
          <div className="product-data">
            <h2>{products.name}</h2>
            <Stars stars={products.stars} />
            <p className="product-data-price">
              MRP: 
              <del>
                <FormatPrice price={products.price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={products.price} />
            </p>
            <p>{products.des}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Classic Delivery</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {products.stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
            </div>
            <AddToCart products={products}/>

          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 7rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
}`;

export default SingleProduct;

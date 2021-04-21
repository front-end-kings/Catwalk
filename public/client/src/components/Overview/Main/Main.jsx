/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Description from '../Description/Description';
import Carousel from '../Carousel/Carousel';
import ProductInfo from '../../../store/product';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products';
const auth = {
  headers: {
    Authorization: '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',
  },
};

const Overview = () => {
  const ctx = useContext(ProductInfo);
  const { id } = ctx;

  const [products, setProducts] = useState({
    currentProduct: null,
    styles: [],
    currentStyle: [],
  });
  // const styleChoice = (style) => {
  //   // pass this down to style selection module
  //   console.log(style);
  // };

  useEffect(() => {
    console.log(id);
    if (!id) return;
    (async () => {
      const productDetail = await axios.get(`${url}/${id}`, auth);
      const productStyles = await axios.get(`${url}/${id}/styles`, auth);
      setProducts({
        currentProduct: productDetail.data,
        styles: productStyles.data.results,
        currentStyle: productStyles.data.results[0],
      });
    })();
  }, [id]);

  if (products.styles.length) {
    return (
      <div id="overview">
        <Carousel currentStyle={products.currentStyle} />
        <Description currentProduct={products.currentProduct} />
      </div>
    );
  }
  return <div />;
};

export default Overview;

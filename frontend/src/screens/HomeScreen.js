import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Box } from '@mui/material';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import axios from 'axios';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    async function getProducts() {
      const {data} = await axios.get('api/products/')
      setProducts(data.products)
    }
    getProducts()
  },[])


  console.log("products",products)

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, []);

  return (
    <Grid container spacing={2}>
      { 
        products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default HomeScreen;
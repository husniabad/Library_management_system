import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Product({ product }) {
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   const itemInCart = cartItems.find((item) => item.product === Number(product._id));

  return (
    <Card sx={{ minWidth: 200, marginBottom: 2 }}>
      <Link to={`/product/${product._id}`}>
        <CardMedia component="img" height="200" image={product.image} alt={product.name} />
        
      </Link>

      <CardContent>
        <Link to={`/product/${product._id}`}>
          <Typography variant="subtitle1" gutterBottom component="div">
            <strong>{product.name}</strong>
          </Typography>
        </Link>

        {/* <Typography variant="body2" gutterBottom component="div">
          <div className="my-3">Rating goes here</div>
        </Typography> */}

        <Typography variant="h6" component="h3" gutterBottom>
          ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: 0 }}>
          available: {product.countInStock}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: 0 }}>
          category: {product.category}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Product;

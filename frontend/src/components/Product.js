import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
      <Card className="my-3 p-3 rounded">
        {/* Product Image Link */}
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} alt={product.name} />
        </Link>
  
        <Card.Body>
          {/* Product Name Link */}
          <a href={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
  
          {/* Product Rating and Reviews */}
          <Card.Text as="div">
            <div className="my-3">
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
            </div>
          </Card.Text>
          <Card.Text as="h3">
            ${[product.price]}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default Product

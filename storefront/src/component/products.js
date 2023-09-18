import React, { useState } from "react";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { addToCart, removeFromCart } from "../store/cart";
import { connect } from "react-redux";
import "./Products.css";
import ProductDetails from "./ProductDetails";

function Products(props) {
  const style = { width: "200px", height: "200px" };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="products-container">
      <section className="section-cart">
        <Button color="inherit" className="cart-button">
          🛒 Cart ({props.cart.totalCartItems})
        </Button>
        {props.cart.cartItems.map((cartItem) => (
          <div key={cartItem.name}>
            <strong>{cartItem.name}:</strong> {cartItem.inCart} pc(s)
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                props.removeFromCart(cartItem);
              }}
            >
              Remove
            </Button>
          </div>
        ))}
      </section>

      <div className="category-header">
        <h1>{props.categories.activeCategory.toUpperCase()}</h1>
      </div>

      <section className="section1">
        <div className="product-list">
          {props.products.map((product) =>
            product.category === props.categories.activeCategory ? (
              <Card key={product.name} className="product-card">
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      {product.category[0].toUpperCase()}
                    </Avatar>
                  }
                  title={product.name}
                  subheader={product.category}
                />

                <img
                  className="product-image"
                  src={product.image}
                  style={style}
                  alt="images"
                />

                <CardHeader
                  title={"Price  " + product.price + "JD"}
                  subheader={
                    <span className="stock-info">
                      In Stock {product.inStock} Pcs
                    </span>
                  }
                  className="product-price"
                />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#1e2a38",
                    color: "#fff",
                    marginBottom: "8px", 
                  }}
                  className="add-to-cart-button"
                  onClick={() => {
                    props.addToCart(product);
                  }}
                >
                  ADD TO CART
                </Button>

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#ff5722", 
                    color: "#fff",
                  }}
                  className="view-details-button"
                  onClick={() => {
                    handleViewDetails(product);
                  }}
                >
                  Product Details
                </Button>
              </Card>
            ) : null
          )}
        </div>
      </section>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart,
  };
};

const mapDispatchToProps = { addToCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

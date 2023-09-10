import React from "react";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { addToCart } from "../store/cart.js";
import { connect } from "react-redux";
import "./Products.css";

function Products(props) {
  const style = { width: "200px", height: "200px" };

  return (
    <div className="products-container">
      <section className="section-cart">
        <Button color="inherit" className="cart-button">
          🛒 Cart ({props.cart.totalCartItems})
        </Button>
        {props.cart.cartItems.map((cartItem) => (
          <p key={cartItem.name}>
            <strong>{cartItem.name}:</strong> {cartItem.inCart} pc(s)
          </p>
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
                  className="product-price"
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1e2a38", color: "#fff" }} 
                  className="add-to-cart-button"
                  onClick={() => {
                    props.addToCart(product);
                  }}
                >
                  ADD TO CART
                </Button>
              </Card>
            ) : null
          )}
        </div>
      </section>
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

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

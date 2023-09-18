// ProductDetails.js
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { addToCart } from "../store/cart";

function ProductDetails(props) {
  const { product, onClose, addToCart } = props;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <Dialog open={Boolean(product)} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "#ff5722", color: "#fff" }}>
        Perfume Details
      </DialogTitle>
      <DialogContent sx={{ padding: 2 }}>
        <div>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price} JD</p>
          <p>In Stock: {product.inStock} Pcs</p>
          <p>
            a fragrance for a strong, passionate man, who want to be more
            attractive. Perfume the sublime masculine through a luminous aura
            with an intense, vibrant, and glowing combination of fresh mint
            leaves, Italian lemon zest, and green apple.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#1e2a38",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1a2632",
              },
              marginRight: "4px",
            }}
          >
            ADD TO CART
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "#ff5722",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#e64a19",
              },
            }}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductDetails);

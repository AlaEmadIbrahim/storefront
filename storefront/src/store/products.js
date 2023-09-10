const initialState = [
  {
    id: 1,
    name: "ARMANI",
    category: "MenPerfume",
    price: 70.0,
    inStock: 20,
    inCart: 1,
    image:
      "https://www.armani.com/variants/images/38063312420501042/F/w400.jpg",
  },
  {
    id: 2,
    name: "CREED",
    category: "MenPerfume",
    price: 225.0,
    inStock: 30,
    inCart: 1,
    image:
      "https://labelleperfumes.com/cdn/shop/files/AVENTUS-CREED.webp?v=1689798047",
  },
  {
    id: 3,
    name: "MEGAMARE",
    category: "MenPerfume",
    price: 130.0,
    inStock: 40,
    inCart: 1,
    image:
      "https://www.magmaprofumi.com/27379-home_default/orto-parisi-megamare-parfum.jpg",
  },
  {
    id: 4,
    name: "BOSS",
    category: "MenPerfume",
    price: 50.0,
    inStock: 50,
    inCart: 1,
    image:
      "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/700501-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjU2NTh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzNOaTlvWWpJdk9URXhNemN4TWpZMU5qUXhOQzVxY0djfDExMDE2ZDQxNGE4OTJlOTA5NDM0ODgyNmMzNzcyZDlhNGUzZGFjODdlOGFjYzJhM2VmMWM3Y2EyMGQ4OGJjMTU",
  },
  {
    id: 5,
    name: "VERSACE",
    category: "MenPerfume",
    price: 80.0,
    inStock: 60,
    inCart: 1,
    image:
      "https://www.fragranceoutlet.com/cdn/shop/products/ErosEaudeParfumSprayforMenbyVersace.jpg?v=1652898982",
  },
  {
    id: 6,
    name: "DHERMES",
    category: "MenPerfume",
    price: 85.0,
    inStock: 70,
    inCart: 1,
    image:
      "https://m.media-amazon.com/images/I/51YNiPLMkBL._AC_UF1000,1000_QL80_.jpg",
  },

  {
    id: 8,
    name: "COCO",
    category: "WomenPerfume",
    price: 70.0,
    inStock: 80,
    inCart: 1,
    image:
      "https://luliz.com/pub/media/catalog/product/cache/0d45ef24ed14d577724df2d1d0740ec5/_/c/_c_h_chanel_coco_mademoiselle_1_8.jpg",
  },
  {
    id: 9,
    name: "SI",
    category: "WomenPerfume",
    price: 75.0,
    inStock: 90,
    inCart: 1,
    image:
      "https://www.armani.com/variants/images/38063312420501669/D/w400.jpg",
  },
  {
    id: 5,
    name: "SCANDAL",
    category: "WomenPerfume",
    price: 110.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://cdn.salla.sa/nGgdb/YaIHLQDLM4OqEbJkeiqHb7tYdNKlCNHTdzUWeetO.png",
  },
  {
    id: 1,
    name: "BLOOM",
    category: "WomenPerfume",
    price: 80.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/jjd6aa80/perfume/p/z/j/100-bloom-for-women-eau-de-parfum-gucci-perfume-women-original-imaf6y6p8yhrddkr.jpeg?q=90",
  },
  {
    id: 2,
    name: "212SEXY",
    category: "WomenPerfume",
    price: 55.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://www.perfumedirect.com/cdn/shop/products/carolina-herrera-women-s-perfume-carolina-herrera-212-sexy-eau-de-parfum-women-s-perfume-spray-30ml-60ml-100ml-10868935000157.png?v=1631675897",
  },
];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "addToCart":
      return state.map((product) => {
        if (product.name === payload.name) {
          return { ...product, inStock: product.inStock - 1 };
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};

export default reducer;

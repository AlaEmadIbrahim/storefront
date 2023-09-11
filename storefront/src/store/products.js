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
  {
    id: 12,
    name: "Exciting",
    category: "UnisexPerfume",
    price: 40.0,
    inStock: 70,
    inCart: 1,
    image:
      "https://luliz.com/pub/media/catalog/product/cache/0d45ef24ed14d577724df2d1d0740ec5/5/2/5281018709535_-_2022-09-02t182559.108.png",
  },
  {
    id: 13,
    name: "Buveur",
    category: "UnisexPerfume",
    price: 85.0,
    inStock: 70,
    inCart: 1,
    image:
      "data:image/jpeg;base64,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",
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

// Array to store product details
const products = [
  {
    name: "Glasses",
    price: 100,
    image: "./img/shop/product1.jpg",
    description:
      "This is a stylish pair of glasses that complements any outfit.",
    link: "./productDetails.html",
  },
  {
    name: "Hat",
    price: 150,
    image: "./img/shop/product2.jpg",
    description: "A versatile hat that adds a fashionable touch to your look.",
    link: "./productDetails.html",
  },
  {
    name: "Sandals with Heels",
    price: 250,
    image: "./img/shop/product3.jpg",
    description:
      "A pair of trendy sandals with heels, perfect for any occasion.",
    link: "./productDetails.html",
  },
  {
    name: "Shorts",
    price: 80,
    image: "./img/shop/product4.jpg",
    description:
      "Casual and comfortable shorts for a relaxed, stylish appearance.",
    link: "./productDetails.html",
  },
  {
    name: "Heels Shoes",
    price: 180,
    image: "./img/shop/product5.jpg",
    description: "Elegant heels that bring sophistication and style.",
    link: "./productDetails.html",
  },
  {
    name: "Another Sandals",
    price: 120,
    image: "./img/shop/product6.jpg",
    description: "Comfortable sandals perfect for everyday use.",
    link: "./productDetails.html",
  },
  {
    name: "Bag",
    price: 220,
    image: "./img/shop/product7.jpg",
    description: "A practical bag with ample space and a chic design.",
    link: "./productDetails.html",
  },
  {
    name: "Shirt",
    price: 60,
    image: "./img/shop/product8.jpg",
    description:
      "A classic shirt that can be dressed up or down for various occasions.",
    link: "./productDetails.html",
  },
  {
    name: "Skirt",
    price: 90,
    image: "./img/shop/product9.jpg",
    description:
      "A fashionable skirt that is suitable for both casual and formal settings.",
    link: "./productDetails.html",
  },
];
let sizePrice;
// Get product container
const productContainer = document.getElementById("product-container");
console.log();

// Display all products
displayAllProducts();

// Event listener for price range input
document.getElementById("priceRange").addEventListener("input", function () {
  const priceValue = document.getElementById("priceValue");
  const priceText = `${this.value} EGP`; // Set the text content correctly
  priceValue.textContent = priceText;

  // Extract the numeric value from priceText (remove non-digits)
  sizePrice = parseInt(priceText.replace(/[^\d]/g, ""));

  // Filter the products based on the selected price
  const filteredProducts = products.filter(
    (product) => product.price <= sizePrice
  );

  // Clear the product container and display the filtered products
  productContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    displayProduct(product);
  });
});

// Function to display a single product
function displayProduct(product) {
  const productHTML = `
    <div class="product">
      <div class="inner">
        <div class="img_div">
          <img src="${product.image}" alt="${product.name}" />
          <div class="prod_text prod_text_overlay overlay_img flex justify-center align-center">
            <a href="${product.link}">view details</a>
          </div>
        </div>
        <div class="prod_text">
          <h6>${product.name}</h6>
          <div class="justify-between flex">
            <span> £${product.price} </span>
            <span> Add to cart </span>
          </div>
        </div>
      </div>
    </div>
  `;
  productContainer.innerHTML += productHTML; // Append the product HTML to the container
}

// Function to display all products
function displayAllProducts() {
  productContainer.innerHTML = ""; // Clear existing products
  products.forEach((product) => {
    displayProduct(product); // Pass the product data to displayProduct
  });
}

// get product categories from API
//
async function getHeadersFromFakestoreAPI() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    if (!response.ok) {
      throw new Error(`HTTP error!: ${response.status}`);
    }
    const categories = await response.json();

    return categories;
  } catch (error) {
    console.log(`Error while loading headers ${error.message}`);
    return [];
  }
}

// Populate Header Menu
async function populateHeaderMenu() {
  const categories = await getHeadersFromFakestoreAPI();
  const menu = document.getElementById("navbar");

  if (categories.length > 0) {
    categories.forEach((category) => {
      const link = document.createElement("a");
      // link.href = `${category}`;
      link.textContent = category;
      link.onclick = (event) => {
        event.preventDefault();
        handleCategoryClick(category);
      };

      menu.appendChild(link);
    });
  }
}

populateHeaderMenu();

// navbar onClick Handler
let activeCategory = null;
function handleCategoryClick(category) {
  if (activeCategory === category) {
    // console.log("Active already.");
    return;
  }
  activeCategory = category;

  const productContainer = document.getElementById("product-grid");
  productContainer.innerHTML = "";
  categoryProducts(category);
}

//
async function categoryProducts(categoryName) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error!: ${response.status}`);
    }
    const productsInCategory = await response.json();

    let productGrid = document.getElementById("product-grid");

    productsInCategory.forEach((product) => {
      const divForProductList = document.createElement("div");
      divForProductList.classList.add("item");
      divForProductList.innerHTML = `
              ${product.title}
          `;
      productGrid.appendChild(divForProductList);
    });
  } catch (error) {
    console.log(`Error while loading headers ${error.message}`);
    return [];
  }
}

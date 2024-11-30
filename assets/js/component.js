// Header Component
function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
        <div class="logo">
            <h1>E-Shop</h1>
        </div>
        <nav class="navbar">
            <a href="#" onclick="fetchProducts('electronics')">Electronics</a>
            <a href="#" onclick="fetchProducts('jewelery')">Jewelry</a>
            <a href="#" onclick="fetchProducts('men\'s clothing')">Men's Clothing</a>
            <a href="#" onclick="fetchProducts('women\'s clothing')">Women's Clothing</a>
        </nav>
    `;

  return header;
}

// Footer Component
function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
        <p>Contact us: <a href="mailto:support@eshop.com">support@eshop.com</a></p>
    `;

  return footer;
}

// Render Components
document.body.insertBefore(createHeader(), document.body.firstChild);
document.body.appendChild(createFooter());

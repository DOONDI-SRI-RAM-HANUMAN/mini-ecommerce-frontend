// Display products
if (document.getElementById("productList")) {
    const list = document.getElementById("productList");

    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
}

// Add to cart
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}


if (document.getElementById("cartItems")) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");
    let total = 0;

    cart.forEach(item => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        `;
        container.appendChild(div);
    });

    document.getElementById("total").innerText = "Total Amount: ₹" + total;
}

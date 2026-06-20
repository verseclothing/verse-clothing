localStorage.clear();
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Agar product pehle se hai to quantity badhao
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("✅ Product Added to Cart");
}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = document.getElementById("cart-count");

    if (count) {

        let totalQty = 0;

        cart.forEach(item => {
            totalQty += item.qty;
        });

        count.innerText = totalQty;
    }

}

function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("cart-total");

    if (!cartItems || !total) return;

    cartItems.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerText = "Total: ₹0";

        return;
    }

    cart.forEach((item, index) => {

        grandTotal += item.price * item.qty;

        cartItems.innerHTML += `
        <div class="card" style="margin-bottom:20px;padding:20px;">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <p>Quantity: ${item.qty}</p>

            <button class="buy-btn" onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;

    });

    total.innerText = "Total: ₹" + grandTotal;
}

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    loadCart();
}

window.onload = function () {

    updateCartCount();

    loadCart();

};

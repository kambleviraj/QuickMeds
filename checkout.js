function placeOrder(e) {
    e.preventDefault();

    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    window.location.href = "index.html";
}
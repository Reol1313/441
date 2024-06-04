const addButton624 = document.querySelectorAll('.add');
const cartTable624 = document.getElementById('cart-table');
const cartTotal624 = document.getElementById('cart-total');
let totalPrice624 = 0;

addButton624.forEach(button => {
  button.addEventListener('click', function() {
    const course = this.parentNode.querySelector('h2').textContent;
    const price = parseInt(this.parentNode.querySelector('p').textContent);
    const quantity = parseInt(this.parentNode.querySelector('.quantity-input').value);
    const total = price * quantity;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${course}</td>
      <td>${quantity}</td>
      <td>$${total.toFixed(2)}</td>
    `;
    cartTable624.appendChild(row);

    totalPrice624 += total;
    cartTotal624.textContent = totalPrice624.toFixed(2);
  });
});

function checkout624() {
  alert(`Total amount to pay: $${totalPrice624.toFixed(2)}`);
  // Additional checkout logic can be added here
}

function clearCart624() {
  cartTable624.innerHTML = '';
  totalPrice624 = 0;
  cartTotal624.textContent = totalPrice624.toFixed(2);
}
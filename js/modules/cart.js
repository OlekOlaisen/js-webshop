export default function Cart() {
	let label = document.getElementById('label');
	let shoppingList = document.getElementById('cart-list');

	// Gets items from localstorage
	let cart = JSON.parse(localStorage.getItem("data")) || [];

	let calculateNumbers = () => {
		let cartIcon = document.getElementById('cartQuantity')
		cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0)
	}

	calculateNumbers();

	/**
	 * Generate items in the cart.
	 * @param {Object[]} id - The id of the object. 
	 * @param {Object} item - The object
	 * @returns {string} Either returns the object in HTML or displays empty cart if the cart is empty. 
	 */
	let generateCartItems = () => {
		if (cart.length !== 0) {
			return (shoppingList.innerHTML = cart.map((x) => {
				// console.log(x);
				let { id, item } = x;
				let search = filterObjects.find((item) => item.id == id) || [];

				return `			
				<div class="header__cart-list-item">
					<img src=${search.image} class="header__cart-list-item-image">
					<div class="header__cart-list-item-details">
						<div class="header__cart-list-item-name-x">
							<div class="header__cart-list-item-name">${search.name}</div>
							<i onclick="removeItem(${id})" id="header__cart-list-item-x" class="bi bi-x-lg"></i>
						</div>
								
						<div class="header__cart-list-item-price-buttons">	
							<div class="header__cart-list-item-amount">
								<i onclick="decrementItems(${id})" class="bi bi-dash"></i>
								<div id=${id} class="header__cart-list-item-quantity">${item}</div>
								<i onclick="incrementItems(${id})" class="bi bi-plus"></i>
								</div>
								<div class="header__cart-list-item-price">$${item * search.price}</div>		
						</div>
					</div>
				</div>
				`
			}).join(""));
		}
		else {
			shoppingList.innerHTML = ``
			label.innerHTML = `
			<div class="cart__empty">
			<i class="bi bi-cart-x" id="cart__empty-image"></i>
			<h2 class="cart__empty-text">Cart is empty.</h2>
			</div>
			`
		}
	};

	generateCartItems();

	/**
 * Finds the item and, multiplies it by the item price and displays it in HTML. 
 * @returns {string} Returns the total amount in HTML.
 * 
 */
	let totalAmount = () => {
		if (cart.length !== 0) {
			let amount = cart.map((x) => {
				let { item, id } = x;
				let search = filterObjects.find((item) => item.id == id) || [];
				return item * search.price;
			}).reduce((x, y) => x + y, 0);
			// console.log(amount);
			label.innerHTML = `
			
			<div class="header__cart-list-options">
					<div class="header__cart-list-options-x"></div>
					<div class="header__cart-list-total">Total bill: $${amount}</div>
			</div>
			`
		} else return;
	}

	totalAmount();




	let cartListVisible = false;

	const cartList = document.querySelector('.header__cart-accordion');
	const accordionButton = document.querySelector('.header__cart-icon');

	accordionButton.addEventListener('click', handleAccordionButtonClick);

	function handleAccordionButtonClick(event) {
		toggleAccordionList();
		renderAccordionList();
	}

	function toggleAccordionList() {
		cartListVisible = !cartListVisible;
	}


	function renderAccordionList() {
		if (cartListVisible === true) {
			cartList.classList.add('header__cart-accordion--visible');

		}
		else {
			cartList.classList.remove('header__cart-accordion--visible');

		}
	}


}



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



	// Generates items in cart
	let generateCartItems = () => {

		if (cart.length !== 0) {
			return (shoppingList.innerHTML = cart.map((x) => {

				console.log(x);

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

	// incrementItemss amount of items on each id. 
	let incrementItems = (id) => {
		let selectedItem = id;
		let search = cart.find((items) => items.id === selectedItem);

		if (search === undefined) {
			cart.push({
				id: selectedItem,
				item: 1,
			});
		}
		else {
			search.item += 1;
		}

		generateCartItems();
		updateItems(selectedItem);

		//  Adding cart to localStorage
		localStorage.setItem("data", JSON.stringify(cart));
	};

	// decrementItemss amount of items on each id, stops at 0. 
	let decrementItems = (id) => {
		let selectedItem = id;
		let search = cart.find((items) => items.id === selectedItem);

		if (search === undefined) return
		else if (search.item === 0) return;
		else {
			search.item -= 1;
		}
		updateItems(selectedItem);
		// Removes items with 0 quantity from cart 
		cart = cart.filter((x) => x.item !== 0);
		generateCartItems();
		//  Adding cart to localStorage
		localStorage.setItem("data", JSON.stringify(cart));
	};


	// updateItemss item__quantity and displays it on it in HTML. 
	let updateItems = (id) => {

		let search = cart.find((items) => items.id === id)
		// console.log(search.item);
		document.getElementById(id).innerHTML = search.item;
		calculateNumbers();
	}

	let removeItem = (id) => {
		let selectedItem = id;
		cart = cart.filter((x) => x.id !== selectedItem.id);
		localStorage.setItem("data", JSON.stringify(cart));
		removeItem();
	}

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


	// SHOW/HIDE Accordion

	let cartListVisible = false;

	// query selectors
	const cartList = document.querySelector('.header__cart-accordion');
	const accordionButton = document.querySelector('.header__cart-icon');


	// event listeners
	accordionButton.addEventListener('click', handleAccordionButtonClick);


	// event handlers
	function handleAccordionButtonClick(event) {
		toggleAccordionList();
		renderAccordionList();
	}

	function toggleAccordionList() {
		cartListVisible = !cartListVisible;
	}

	// render
	function renderAccordionList() {
		if (cartListVisible === true) {
			cartList.classList.add('header__cart-accordion--visible');

		}
		else {
			cartList.classList.remove('header__cart-accordion--visible');

		}
	}


}



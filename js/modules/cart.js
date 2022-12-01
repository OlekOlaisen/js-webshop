export default function Cart() {


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
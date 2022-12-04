
/* Web shop tutorial =  https://www.youtube.com/watch?v=cT_ZYrS3tKc*/
let shop = document.getElementById('shop');



//  Getting items from localstoage or only empty array

let cart = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {

   return (shop.innerHTML = filterObjects
      .map((item) => {
         let { id, name, category, image, price, label } = item;

         // Searches and checks id one by one and stores it in the cart, if not, returns an empty array.
         let search = cart.find((item) => item.id == id) || [];

         return `
         <div id=item__id-${id} class="grid__filter-item">
            <div class="item__label">${label}</div>
            <img class="item__image" src="${image}">
            <div class="filter__info-container">
               <div class="item__name">${name}</div>
               <div class="item__category">${category}</div>
               <div class="item__price">$${price}</div>
               <div class="item__amount">
                  <i onclick="decrement(${id})" class="bi bi-dash"></i>
                  <div id=${id} class="item__quantity">${search.item === undefined ? 0 : search.item}</div>
                  <i onclick="increment(${id})" class="bi bi-plus"></i>
               </div>
            </div>
         </div>
      `
      }).join(""));
};

generateShop();


// Increments amount of items on each id. 
let increment = (id) => {
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

   update(selectedItem);

   //  Adding cart to localStorage
   localStorage.setItem("data", JSON.stringify(cart));
};

// Decrements amount of items on each id, stops at 0. 
let decrement = (id) => {
   let selectedItem = id;
   let search = cart.find((items) => items.id === selectedItem);

   if (search === undefined) return
   else if (search.item === 0) return;
   else {
      search.item -= 1;
   }

   update(selectedItem);

   // Removes items with 0 quantity from cart 
   cart = cart.filter((x) => x.item !== 0);

   //  Adding cart to localStorage
   localStorage.setItem("data", JSON.stringify(cart));
};


// Updates item__quantity and displays it on it in HTML. 
let update = (id) => {

   let search = cart.find((items) => items.id === id)
   // console.log(search.item);
   document.getElementById(id).innerHTML = search.item;
   calculation();
}

//  Calculates all the numbers and displays it on shopping cart icon, only runs when update function is triggered
let calculation = () => {
   let cartIcon = document.getElementById('cartQuantity')
   cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation();
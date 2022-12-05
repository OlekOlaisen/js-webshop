const filterObjects = [
   {
      id: '1',
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '60',
      label: ''
   },
   {
      id: '2',
      name: 'Jackson Vintage Widow Pinot Noir 2017',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5072301-1.jpg',
      price: '23',
      label: 'Top seller'
   },
   {
      id: '3',
      name: 'Gobelsburger Grüner Veltliner Renner 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5689601-1.jpg',
      price: '41',
      label: 'Staff pick'
   },
   {
      id: '4',
      name: 'Klein Constantia Vin de Constance 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5738402-1.jpg',
      price: '75',
      label: ''
   },
   {
      id: '5',
      name: "Bell's Original",
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/12001-1.jpg',
      price: '36',
      label: 'Staff pick'
   },
   {
      id: '6',
      name: 'London Hill Dry Gin',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/756501-1.jpg',
      price: '41',
      label: 'Top seller'
   },
   {
      id: '7',
      name: 'Einstök Icelandic Pale Ale',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/241302-1.jpg',
      price: '5',
      label: 'Top seller'
   },
   {
      id: '8',
      name: 'BFM 225 Saison',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/816601-1.jpg',
      price: '17',
      label: 'Staff pick'
   },
   {
      id: '9',
      name: 'Gassier 946 Rosé 2018',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/614501-1.jpg',
      price: '41',
      label: 'Staff pick'
   },
   {
      id: '10',
      name: 'Roblin Origine Sancerre Rosé 2021',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/1288601-1.jpg',
      price: '23',
      label: ''
   },
   {
      id: '11',
      name: 'La Ciboise Blanc 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5086601-1.jpg',
      price: '15',
      label: ''
   },
   {
      id: '12',
      name: 'Ch. Sainte Roseline Cru Classé 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5028101-1.jpg',
      price: '26',
      label: 'Top seller'
   },
   {
      id: '13',
      name: 'Chatellier Pouilly Fumé Argile 2021',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5657901-1.jpg',
      price: '27',
      label: ''
   },
   {
      id: '14',
      name: 'Yellow Tail Rosé 2019',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5841501-1.jpg',
      price: '14',
      label: 'Top seller'
   },
   {
      id: '15',
      name: 'Secret de Léoube Rosé',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/3882305-1.jpg',
      price: '70',
      label: ''
   },
   {
      id: '16',
      name: 'Saint Germain Rhub IPA',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/911002-1.jpg',
      price: '7',
      label: ''
   },
   {
      id: '17',
      name: 'Baladin Nazionale 3.3',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/956302-1.jpg',
      price: '5',
      label: ''
   },
   {
      id: '18',
      name: 'Page 24 Bière Brune',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5194302-1.jpg',
      price: '7',
      label: ''
   },
   {
      id: '19',
      name: 'Wettre India Pale Ale',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/3664802-1.jpg',
      price: '9',
      label: ''
   },
   {
      id: '20',
      name: 'Garnier Chablis 2019',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5771801-1.jpg',
      price: '25',
      label: ''
   },
   {
      id: '21',
      name: 'Allegrini La Poja 2016',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5506701-1.jpg',
      price: '98',
      label: 'Staff pick'
   },
   {
      id: '22',
      name: 'Massaya Gold Reserve 2011',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5768401-1.jpg',
      price: '72',
      label: ''
   },
   {
      id: '23',
      name: 'Félix Solis Viña Albali Tempranillo 2020',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5759701-1.jpg',
      price: '14',
      label: ''
   },
   {
      id: '24',
      name: 'Marchesi di Barolo Coste di Rose 2016',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5937601-1.jpg',
      price: '56',
      label: ''
   },
   {
      id: '25',
      name: 'Lhéraud Cuvée 20',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5911901-1.jpg',
      price: '105',
      label: ''
   },
   {
      id: '26',
      name: 'Talisker Storm Single Malt',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/383801-1.jpg',
      price: '56',
      label: ''
   },
   {
      id: '27',
      name: 'Glengoyne 12 YO',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/279601-1.jpg',
      price: '82',
      label: ''
   },
   {
      id: '28',
      name: 'Powers Gold Label Irish Whiskey',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/725401-1.jpg',
      price: '45',
      label: ''
   },
   {
      id: '29',
      name: 'Danzka Vodka Red',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/1472301-1.jpg',
      price: '35',
      label: ''
   },
   {
      id: '30',
      name: "Woodford Reserve Distiller's Select",
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/2843501-1.jpg',
      price: '65',
      label: ''
   }
];


// Gets items from localstorage
let cart = JSON.parse(localStorage.getItem("data")) || [];
let currentFilter = null;


const filterContent = document.querySelector('.product__filter-content');
const filterToggles = document.querySelectorAll('.filter__toggle');
/* 
I'm aware that onclick functions are not up to wc3 standards, but couldn't get increment and decrement to work with event listeners.
* 
let incrementButton = document.getElementById('item__increment');
let decrementButton = document.getElementById('item__decrement');

incrementButton.addEventListener('click', handleIncrementClick);
decrementButton.addEventListener('click', handleDecrementClick);

function handleIncrementClick() {
   increment();
}

function handleDecrementClick() {
   decrement();
} */




for (const toggle of filterToggles) {
   toggle.addEventListener('click', handleFilterToggleClick);
}

function handleFilterToggleClick(event) {
   toggleFilter(event.target.dataset.filter);
   renderHTML();

}

function toggleFilter(filter) {
   if (currentFilter === filter) {
      currentFilter = null;
   }
   else {
      currentFilter = filter;
   }
}

function returnFilteredItems() {
   if (currentFilter === null) {
      return filterObjects;
   }
   else {
      return filterObjects.filter(item => item.category === currentFilter);
   }
}

renderHTML();



function renderHTML() {
   filterContent.innerHTML = '';



   for (const toggle of filterToggles) {
      toggle.classList.remove('filter__toggle--active');

      if (toggle.dataset.filter === currentFilter) {
         toggle.classList.add('filter__toggle--active');
      }
   }

   for (const item of returnFilteredItems()) {
      const filterItem = document.createElement('div');

      let { id, name, category, image, price, label } = item;
      let search = cart.find((item) => item.id == id) || [];


      filterItem.dataset.category = item.category;
      filterItem.innerHTML = `
      
      <div id=item__id-${id} class="product__filter-item">
            <div class="item__label">${label}</div>
            <img class="item__image" src="${image}">
            <div class="filter__info-container">
               <div class="item__name">${name}</div>
               <div class="item__category">${category}</div>
               <div class="item__price">$${price}</div>
               <div class="item__amount">
                  <i onclick="decrement(${id})" id="item__decrement" class="bi bi-dash"></i>
                  <div id=${id} class="item__quantity">${search.item === undefined ? 0 : search.item}</div>
                  <i onclick="increment(${id})" id="item__increment" class="bi bi-plus"></i>
               </div>
            </div>
         </div>
         `
      filterContent.appendChild(filterItem);
   }
}

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




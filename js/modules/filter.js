const filterObjects = [
   {
      id: '1',
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60',
      label: ''
   },
   {
      id: '2',
      name: 'Jackson Vintage Widow Pinot Noir 2017',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5072301-1.jpg',
      price: '$23',
      label: 'Top seller'
   },
   {
      id: '3',
      name: 'Gobelsburger Grüner Veltliner Renner 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5689601-1.jpg',
      price: '$41',
      label: 'Staff pick'
   },
   {
      id: '4',
      name: 'Klein Constantia Vin de Constance 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5738402-1.jpg',
      price: '$75',
      label: ''
   },
   {
      id: '5',
      name: "Bell's Original",
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/12001-1.jpg',
      price: '$36',
      label: 'Staff pick'
   },
   {
      id: '6',
      name: 'London Hill Dry Gin',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/756501-1.jpg',
      price: '$41',
      label: 'Top seller'
   },
   {
      id: '7',
      name: 'Einstök Icelandic Pale Ale',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/241302-1.jpg',
      price: '$5',
      label: 'Top seller'
   },
   {
      id: '8',
      name: 'BFM 225 Saison',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/816601-1.jpg',
      price: '$17',
      label: 'Staff pick'
   },
   {
      id: '9',
      name: 'Gassier 946 Rosé 2018',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/614501-1.jpg',
      price: '$41',
      label: 'Staff pick'
   },
   {
      id: '10',
      name: 'Roblin Origine Sancerre Rosé 2021',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/1288601-1.jpg',
      price: '$23',
      label: ''
   },
   {
      id: '11',
      name: 'La Ciboise Blanc 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5086601-1.jpg',
      price: '$15',
      label: ''
   },
   {
      id: '12',
      name: 'Ch. Sainte Roseline Cru Classé 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5028101-1.jpg',
      price: '$26',
      label: 'Top seller'
   },
   {
      id: '13',
      name: 'Chatellier Pouilly Fumé Argile 2021',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5657901-1.jpg',
      price: '$27',
      label: ''
   },
   {
      id: '14',
      name: 'Yellow Tail Rosé 2019',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5841501-1.jpg',
      price: '$14',
      label: 'Top seller'
   },
   {
      id: '15',
      name: 'Secret de Léoube Rosé',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/3882305-1.jpg',
      price: '$70',
      label: ''
   },
   {
      id: '16',
      name: 'Saint Germain Rhub IPA',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/911002-1.jpg',
      price: '$7',
      label: ''
   },
   {
      id: '17',
      name: 'Baladin Nazionale 3.3',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/956302-1.jpg',
      price: '$5',
      label: ''
   },
   {
      id: '18',
      name: 'Page 24 Bière Brune',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5194302-1.jpg',
      price: '$7',
      label: ''
   },
   {
      id: '19',
      name: 'Wettre India Pale Ale',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/3664802-1.jpg',
      price: '$9',
      label: ''
   },
   {
      id: '20',
      name: 'Garnier Chablis 2019',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5771801-1.jpg',
      price: '$25',
      label: ''
   },
   {
      id: '21',
      name: 'Allegrini La Poja 2016',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5506701-1.jpg',
      price: '$98',
      label: 'Staff pick'
   },
   {
      id: '22',
      name: 'Massaya Gold Reserve 2011',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5768401-1.jpg',
      price: '$72',
      label: ''
   },
   {
      id: '23',
      name: 'Félix Solis Viña Albali Tempranillo 2020',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5759701-1.jpg',
      price: '$14',
      label: ''
   },
   {
      id: '24',
      name: 'Marchesi di Barolo Coste di Rose 2016',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5937601-1.jpg',
      price: '$56',
      label: ''
   },
   {
      id: '25',
      name: 'Lhéraud Cuvée 20',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5911901-1.jpg',
      price: '$105',
      label: ''
   },
   {
      id: '26',
      name: 'Talisker Storm Single Malt',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/383801-1.jpg',
      price: '$56',
      label: ''
   },
   {
      id: '27',
      name: 'Glengoyne 12 YO',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/279601-1.jpg',
      price: '$82',
      label: ''
   },
   {
      id: '28',
      name: 'Powers Gold Label Irish Whiskey',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/725401-1.jpg',
      price: '$45',
      label: ''
   },
   {
      id: '29',
      name: 'Danzka Vodka Red',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/1472301-1.jpg',
      price: '$35',
      label: 'Top seller'
   },
   {
      id: '30',
      name: "Woodford Reserve Distiller's Select",
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/2843501-1.jpg',
      price: '$65',
      label: ''
   }
];

export default function Filter() {

   let currentFilter = null;

   const filterContent = document.querySelector('.grid__filter-content');
   const filterToggles = document.querySelectorAll('.filter__toggle');


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


         filterItem.dataset.category = item.category;
         filterItem.className = 'filter__item';
         filterItem.id = `${item.id}`
         filterItem.innerHTML = `
      <div class="filter__container">
         <div class="filter__image-container">
            <div class="item__label">${item.label}</div>
            <img class="item__image" src="${item.image}">
         </div>
         <div class="filter__info-container">
            <div class="item__name">${item.name}</div>
            <div class="item__category">${item.category}</div>
            <div class="item__price">${item.price}</div>
           
            <div class="item__amount">
               <i id="decrement" class="bi bi-dash"></i>
               <div id=${item.id} class="item__quantity">0</div>
               <i onclick="increment(${item.id})" class="bi bi-plus"></i>
            </div>
         </div>
      </div>   
         `
         filterContent.appendChild(filterItem);
      }
   }

   let increment = () => {
      console.log('increment');
   }

}


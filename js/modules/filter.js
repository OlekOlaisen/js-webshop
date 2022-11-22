const filterObjects = [
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Jackson Vintage Widow Pinot Noir 2017',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5072301-1.jpg',
      price: '$23'
   },
   {
      name: 'Gobelsburger Grüner Veltliner Renner 2020',
      category: 'White wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5689601-1.jpg',
      price: '$41'
   },
   {
      name: 'Klein Constantia Vin de Constance 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5738402-1.jpg',
      price: '$75'
   },
   {
      name: "Bell's Original",
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/12001-1.jpg',
      price: '$36'
   },
   {
      name: 'London Hill Dry Gin',
      category: 'Liquor',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/756501-1.jpg',
      price: '$41'
   },
   {
      name: 'Einstök Icelandic Pale Ale',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/241302-1.jpg',
      price: '$5'
   },
   {
      name: 'BFM 225 Saison',
      category: 'Beer',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/816601-1.jpg',
      price: '$17'
   },
   {
      name: 'Gassier 946 Rosé 2018',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/614501-1.jpg',
      price: '$41'
   },
   {
      name: 'Roblin Origine Sancerre Rosé 2021',
      category: 'Rosé wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/1288601-1.jpg',
      price: '$23'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
   },
   {
      name: 'Viña Ardanza Reserva 2015',
      category: 'Red wine',
      image: 'https://bilder.vinmonopolet.no/cache/300x300-0/5701405-1.jpg',
      price: '$60'
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
         filterItem.innerHTML = `
         <div class="filter__image-container">
         <img class="item__image" src="${item.image}">
         </div>
         <div class="filter__info-container">
         <div class="item__name">${item.name}</div>
         <div class="item__category">${item.category}</div>
         <div class="item__price">${item.price}</div>
         </div>
         `

         filterContent.appendChild(filterItem);
      }
   }
}
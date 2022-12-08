export default function filterButton() {

   let filterListVisible = false;

   const filterList = document.querySelector('.filter__list');
   const filterButton = document.querySelector('.filter__button');

   filterButton.addEventListener('click', handleFilterButtonClick);

   function handleFilterButtonClick(event) {
      toggleFilterList();
      renderFilterList();
   }

   function toggleFilterList() {
      filterListVisible = !filterListVisible;
   }

   function renderFilterList() {
      if (filterListVisible === true) {
         filterList.classList.add('filter__list--visible');

      }
      else {
         filterList.classList.remove('filter__list--visible');

      }
   }


}
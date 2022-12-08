export default function menuButton() {

   let filterMenuVisible = false;

   const menuList = document.querySelector('.header__navigation-link');
   const menuButton = document.querySelector('#header__navigation-burger-menu');

   menuButton.addEventListener('click', handleMenuButtonClick);

   function handleMenuButtonClick(event) {
      toggleMenuList();
      renderMenuList();
   }

   function toggleMenuList() {
      filterMenuVisible = !filterMenuVisible;
   }

   function renderMenuList() {
      if (filterMenuVisible === true) {
         menuList.classList.add('header__navigation-link--visible');

      }
      else {
         menuList.classList.remove('header__navigation-link--visible');

      }
   }

}
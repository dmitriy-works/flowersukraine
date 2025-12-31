const swiper = new Swiper('.stock__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grid: {
    rows: 2,
    fill: 'row',
  },

  navigation: {
    nextEl: '.stock-button-next',
    prevEl: '.stock-button-prev',
  },
});

const swiperProduct = new Swiper('.products__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.stock-button-next',
    prevEl: '.stock-button-prev',
  },
});

const swiperCart = new Swiper('.cart__swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.stock-button-next',
    prevEl: '.stock-button-prev',
  },
});

const swiperPresents = new Swiper('.presents__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,

  navigation: {
    nextEl: '.presents-button-next',
    prevEl: '.presents-button-prev',
  },
});

const swiperSeasonal = new Swiper('.seasonal__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.seasonal-button-next',
    prevEl: '.seasonal-button-prev',
  },
});

document.querySelectorAll('.stock__item-heart').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.seasonal__item-heart').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.presents__item-heart').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.presents__item-heart').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.product__item-heart').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
  });
});
document.querySelectorAll('.cart__item-heart').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
  });
});

$('.stock__button-favorite').on('click', function () {
  $('.stock__button-favorite').toggleClass('stock__button-favorite--active');
});

$('.product-tabs__item').on('click', function (e) {
  e.preventDefault();
  $('.product-tabs__item').removeClass('product-tabs__item--active');
  $(this).addClass('product-tabs__item--active');

  $('.product-tabs__content-item').removeClass(
    'product-tabs__content-item--active'
  );
  $($(this).attr('href')).addClass('product-tabs__content-item--active');
});

const thumbs = new Swiper('.thumbs-slider', {
  direction: 'vertical',
  slidesPerView: 5,
  spaceBetween: 10,
  watchSlidesProgress: true,
});

const mainSlider = new Swiper('.product__slide-big', {
  spaceBetween: 10,
  thumbs: {
    swiper: thumbs,
  },
});

$('.product-item__num').styler();

$('.product__content-star').rateYo({
  starWidth: '15px',
  normalFill: '#bdbdbd',
  ratedFill: '#F8E582',
  fullStar: true,
  readOnly: true,
  starSvg:
    '<svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0z"/></svg>',
});

$('.stock__rating').rateYo({
  starWidth: '15px',
  normalFill: '#bdbdbd',
  ratedFill: '#F8E582',
  fullStar: true,
  readOnly: true,
  starSvg:
    '<svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0z"/></svg>',
});

$('.presents__rating').rateYo({
  starWidth: '15px',
  normalFill: '#bdbdbd',
  ratedFill: '#F8E582',
  fullStar: true,
  readOnly: true,
  starSvg:
    '<svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0z"/></svg>',
});

$('.seasonal__rating').rateYo({
  starWidth: '15px',
  normalFill: '#bdbdbd',
  ratedFill: '#F8E582',
  fullStar: true,
  readOnly: true,
  starSvg:
    '<svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0z"/></svg>',
});

document.addEventListener('DOMContentLoaded', () => {
  // Получаем ВСЕ элементы списка, которые будут служить заголовками (кнопками)
  const items = document.querySelectorAll('.catalog__assaid-item');

  // Перебираем каждый заголовок
  items.forEach((item) => {
    // 1. Находим ВЛОЖЕННЫЙ список .catalog__buket-list, относящийся ТОЛЬКО к текущему item.
    const list = item.querySelector('.catalog__buket-list');

    // 2. Добавляем обработчик клика к текущему заголовку (item)
    item.addEventListener('click', (event) => {
      // 💡 Важно: Предотвращает срабатывание при клике на дочерних элементах,
      // что может вызвать двойное срабатывание (toggle)
      event.stopPropagation();

      // 3. Открываем/закрываем сам заголовок (для поворота стрелки)
      item.classList.toggle('open');

      // 4. Открываем/закрываем вложенный список (для показа/скрытия контента)
      // Дополнительная проверка list на null предотвратит ошибку, если item не содержит списка.
      if (list) {
        list.classList.toggle('open');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const productMenu = document.querySelector('.header__menu-itemproduct');
  const toggleBtn = productMenu.querySelector('.linkproduct-btn');

  toggleBtn.addEventListener('click', () => {
    productMenu.classList.toggle('active');
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (!productMenu.contains(e.target)) {
      productMenu.classList.remove('active');
    }
  });
});

document.querySelectorAll('.itemproduct__dropdown-icons').forEach((icon) => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.itemproduct__dropdown-item');
    const subMenu = parentItem.querySelector('.sub-dropdown');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  });
});

document.querySelectorAll('.buket__dropdown-icons').forEach((icon) => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.buket__dropdown-item');
    const subMenuBuket = parentItem.querySelector('.buket__dropdown-list');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  });
});

document.querySelectorAll('.flowers__dropdown-icons').forEach((icon) => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.flowers__dropdown-item');
    const subMenuFlowers = parentItem.querySelector('.dropdown__flowers-list');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  });
});

$(function () {
  // Функция для пересчета суммы конкретного товара
  function updateItemTotal($input) {
    // 1. Находим общий контейнер товара (в вашем случае .product-cart__inner)
    const $parent = $input.closest('.product-cart__inner');

    // 2. Берем текст цены и очищаем его от всего, кроме цифр
    const priceText = $parent.find('.product-cart__prisenew').text();
    const price = parseInt(priceText.replace(/\D/g, ''));

    // 3. Берем количество из инпута
    const quantity = parseInt($input.val());

    // 4. Считаем итог, если данные корректны
    if (!isNaN(price) && !isNaN(quantity)) {
      const total = price * quantity;
      // Выводим результат с символом валюты
      $parent.find('.product-cart__total').text(total.toLocaleString() + ' ₴');
    }
  }

  // Слушаем изменение количества
  $('.product-cart__num').on('input change', function () {
    updateItemTotal($(this));
  });
});

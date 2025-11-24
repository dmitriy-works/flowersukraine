
document.addEventListener("DOMContentLoaded", () => {
  const productMenu = document.querySelector(".header__menu-itemproduct");
  const toggleBtn = productMenu.querySelector(".linkproduct-btn");

  toggleBtn.addEventListener("click", () => {
    productMenu.classList.toggle("active");
  });

  // Закрытие при клике вне меню
  document.addEventListener("click", (e) => {
    if (!productMenu.contains(e.target)) {
      productMenu.classList.remove("active");
    }
  });
});

document.querySelectorAll('.itemproduct__dropdown-icons').forEach(icon => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.itemproduct__dropdown-item');
    const subMenu = parentItem.querySelector('.sub-dropdown');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  })
})

document.querySelectorAll('.buket__dropdown-icons').forEach(icon => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.buket__dropdown-item');
    const subMenuBuket = parentItem.querySelector('.buket__dropdown-list');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  })
})


document.querySelectorAll('.flowers__dropdown-icons').forEach(icon => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.flowers__dropdown-item');
    const subMenuFlowers = parentItem.querySelector('.dropdown__flowers-list');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  })
})


$('.stock__rating'), $('.seasonal__rating'), $('.presents__rating').rateYo({

starWidth: "15px",
normalFill: "#bdbdbd",
ratedFill: "#F8E582",
fullStar: true,
readOnly: true,
starSvg: '<svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0z"/></svg>'    
});


const swiper = new Swiper('.stock__swiper',  {
  slidesPerView: 4,
  spaceBetween: 20,  
  loop: true,
  grid: {
    rows: 2,          
    fill: 'row',      
  },
  spaceBetween: 20, 
  
  navigation: {
    nextEl: '.stock-button-next',
    prevEl: '.stock-button-prev',
  }  
});

const swiperPresents = new Swiper('.presents__swiper',  {
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
  }  
});

const swiperSeasonal = new Swiper('.seasonal__swiper',  {
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
  }  
});

document.querySelectorAll('.stock__item-heart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); 
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.seasonal__item-heart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); 
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.presents__item-heart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); 
    btn.classList.toggle('active');
  });
});

$('.stock__button-favorite').on('click', function () {
  $('.stock__button-favorite').toggleClass('stock__button-favorite--active')
});




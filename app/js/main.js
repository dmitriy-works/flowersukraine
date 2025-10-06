
const linkProductBtn =document.querySelector('.linkproduct-btn');
linkProductBtn.addEventListener('click', function () {
  const parentItem = this.closest('.itemproduct');
  parentItem.classList.toggle('open');
})
document.querySelectorAll('.itemproduct__dropdown-icons').forEach(icon => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.itemproduct__dropdown-item');
    const subMenu = parentItem.querySelector('.sub-dropdown');

    this.classList.toggle('active');
    parentItem.classList.toggle('open');
  })
})
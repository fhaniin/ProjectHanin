// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelesctor('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

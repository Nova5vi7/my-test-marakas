function menuToggleListener(target, navigationMenu) {
  target.addEventListener('click', () => {
    navigationMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  });
}

export default menuToggleListener;

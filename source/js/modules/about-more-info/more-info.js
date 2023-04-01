function showMore() {
  let aboutCompany = document.querySelector('[data-about-company]');
  if (aboutCompany) {
    let buttonShowMore = aboutCompany.querySelector('[data-about-button]');

    buttonShowMore.addEventListener('click', (evt) => {
      evt.preventDefault();
      buttonShowMore.classList.toggle('is-active');

      const BONUS_ITEMS = aboutCompany.querySelectorAll('[data-about-bonus-info]');
      let isActive = buttonShowMore.classList.contains('is-active');

      if (isActive) {
        BONUS_ITEMS.forEach((item) => {
          item.style.display = 'inline-block';
        });
      } else {
        BONUS_ITEMS.forEach((item) => {
          if (!(item.classList.contains('about-company__text--long') && window.screen.width > 770)) {
            item.style.display = 'none';
          }
        });
      }
    });
  }
}

export {showMore};

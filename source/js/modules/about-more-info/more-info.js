function showMore() {
  let aboutCompany = document.querySelector('[data-about-company]');
  let buttonShowMore = aboutCompany.querySelector('[data-about-button]');

  buttonShowMore.addEventListener('click', (evt) => {
    evt.preventDefault();

    let hideItems = aboutCompany.querySelectorAll('[data-about-bonus-info]');
    let count = 0;

    hideItems.forEach((item) => {
      if (item.style.display === 'none') {
        count += 1;
      }
    });

    if (count > 0) {
      hideItems.forEach((item) => {
        item.style.display = 'inline-block';
      });
    } else {
      hideItems.forEach((item) => {
        item.style.display = 'none';
      });
    }
  });
}

export {showMore};

function initAccardion() {
  let accordion = document.querySelector('[data-accordion]');
  let accordionItems = accordion.querySelectorAll('[data-accordion-item]');

  accordionItems.forEach((element) => {
    element.addEventListener('click', () => {
      const parent = element.parentNode;

      if (parent.classList.contains('is-active')) {
        parent.classList.remove('is-active');
      } else {
        accordionItems.forEach((item) => {
          item.parentNode.classList.remove('is-active');
        });

        parent.classList.add('is-active');
      }
    });
  });
}

export {initAccardion};

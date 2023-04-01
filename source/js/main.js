import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccardion} from './modules/accordion/accordion';
import {showMore} from './modules/about-more-info/more-info';

// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  // Modules

  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    initModals();

    const form = new Form();
    form.init();
    window.form = form;

    const submitForm = (submitedForm) => {
      submitedForm.classList.remove('is-invalid');
      if (form.validateForm(submitedForm)) {
        form.reset(submitedForm);
      } else {
        submitedForm.classList.add('is-invalid');
      }
    };

    const PHONES_INPUT = document.querySelectorAll('[data-validate-type="phone"]');

    PHONES_INPUT.forEach((phone) => {
      form._initPhoneInput(phone);
    });


    document.querySelectorAll('form').forEach((element) => {
      element.querySelector('[data-form-submit]').addEventListener('click', submitForm(element));
    });

    if (initAccardion()) {
      initAccardion();
    }

    if (showMore()) {
      showMore();
    }
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

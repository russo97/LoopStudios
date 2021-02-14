(function () {

  function $ (element) {
    return document.querySelector.bind(document)(element);
  }

  const [ header, headerMenu ] = ['header.header', '#header__menu'].map($);

  document.addEventListener('DOMContentLoaded', _ => {
    headerMenu.addEventListener('click', e => {
      e.preventDefault();

      header.classList.toggle('open');
    }, false);
  }, false);

})();
(function () {

  function $ (element) {
    return document.querySelector.bind(document)(element);
  }

  function noScroll () {
    document.body.style.overflow = header.classList.contains('open')
      ? "hidden"
      : "unset";
  }

  const [ header, headerMenu ] = ['header.header', '#header__menu'].map($);

  document.addEventListener('DOMContentLoaded', _ => {
    headerMenu.addEventListener('click', e => {
      e.preventDefault();

      header.classList.toggle('open');

      window.scrollTo(0, 0);

      noScroll();
    }, false);

  }, false);

})();
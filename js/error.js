'use strict';

(function () {
  const popupError = document.querySelector(`.popup-error`);
  const errorText = popupError.querySelector(`.popup-error__text`);
  const errorButton = popupError.querySelector(`.popup-error__button`);

  const onErrorButtonClick = () => {
    popupError.classList.add(`popup-error__hidden`);
    errorButton.removeEventListener(`click`, onErrorButtonClick);
  };

  const onLoadError = (errorMessage) => {
    errorText.textContent = errorMessage;
    popupError.classList.remove(`popup-error__hidden`);

    errorButton.addEventListener(`click`, onErrorButtonClick);
  };

  window.error = {
    onErrorButtonClick,
    onLoadError
  };

})();

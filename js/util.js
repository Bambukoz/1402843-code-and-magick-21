'use strict';

(function () {
  const KeyButtons = {
    ENTER: `Enter`,
    ESCAPE: `Escape`
  };

  const onPopupEscPress = (evt) => {
    if (evt.key === KeyButtons.ESCAPE) {
      window.setup.popupClose();
    }
  };

  const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const removeElements = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  window.util = {
    onPopupEscPress,
    getRandomNumber,
    removeElements
  };
})();

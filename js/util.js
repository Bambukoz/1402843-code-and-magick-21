'use strict';

(function () {
  const KeyButtons = {
    ENTER: `Enter`,
    ESCAPE: `Escape`
  };

  const onPopupEscPress = (evt) => {
    if (evt.key === KeyButtons.ESCAPE) {
      window.setup.onCloseBtnClick();
    }
  };

  const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];

  window.util = {
    onPopupEscPress,
    getRandomNumber,
  };
})();

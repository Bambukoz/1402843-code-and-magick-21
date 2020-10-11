'use strict';

(function () {

  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupSimilar = setup.querySelector(`.setup-similar`);
  const userName = setup.querySelector(`.setup-user-name`);
  const setupPlayer = setup.querySelector(`.setup-player`);

  const onOpenBtnClick = () => {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, window.util.onPopupEscPress);
    setupPlayer.addEventListener(`click`, window.colorize.onElementClick);
    setupSimilar.classList.remove(`hidden`);
  };

  const onCloseBtnClick = () => {
    if (document.activeElement !== userName) {
      setup.classList.add(`hidden`);
      setup.style.top = ``;
      setup.style.left = ``;
      document.removeEventListener(`keydown`, window.util.onPopupEscPress);
      setupPlayer.removeEventListener(`click`, window.colorize.onElementClick);
    }
  };

  setupOpen.addEventListener(`click`, onOpenBtnClick);
  setupClose.addEventListener(`click`, onCloseBtnClick);

  window.setup = {
    onCloseBtnClick
  };
})();

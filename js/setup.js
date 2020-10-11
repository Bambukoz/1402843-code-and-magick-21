'use strict';

const setup = document.querySelector(`.setup`);

(function () {
  const WIZARDS_AMOUNT = 4;
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupSimilar = setup.querySelector(`.setup-similar`);
  const userName = setup.querySelector(`.setup-user-name`);
  const setupPlayer = setup.querySelector(`.setup-player`);

  const popupOpen = () => {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, window.util.onPopupEscPress);
    setupPlayer.addEventListener(`click`, window.colorize.onElementClick);
    window.wizardGenerator.createFragment(window.wizardGenerator.getRandomWizards(WIZARDS_AMOUNT));
    setupSimilar.classList.remove(`hidden`);
  };

  const popupClose = () => {
    if (document.activeElement !== userName) {
      setup.classList.add(`hidden`);
      setup.style.top = ``;
      setup.style.left = ``;
      window.util.removeElements(window.wizardGenerator.similarList);
      document.removeEventListener(`keydown`, window.util.onPopupEscPress);
      setupPlayer.removeEventListener(`click`, window.colorize.onElementClick);
    }
  };

  setupOpen.addEventListener(`click`, popupOpen);
  setupClose.addEventListener(`click`, popupClose);

  window.setup = {
    popupClose
  };
})();

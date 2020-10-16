'use strict';

(function () {

  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const form = setup.querySelector(`.setup-wizard-form`);
  const setupClose = setup.querySelector(`.setup-close`);
  const userName = setup.querySelector(`.setup-user-name`);
  const setupPlayer = setup.querySelector(`.setup-player`);

  const onOpenBtnClick = () => {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, window.util.onPopupEscPress);
    setupPlayer.addEventListener(`click`, window.colorize.onElementClick);
    window.wizardGenerator.addWizardsToSimilarList();
    form.addEventListener(`submit`, onFormSubmit);
  };

  const onCloseBtnClick = () => {
    if (document.activeElement !== userName) {
      setup.classList.add(`hidden`);
      setup.style.top = ``;
      setup.style.left = ``;
      document.removeEventListener(`keydown`, window.util.onPopupEscPress);
      setupPlayer.removeEventListener(`click`, window.colorize.onElementClick);
      form.removeEventListener(`submit`, onFormSubmit);
    }
  };

  setupOpen.addEventListener(`click`, onOpenBtnClick);
  setupClose.addEventListener(`click`, onCloseBtnClick);


  const onFormSubmit = (evt) => {
    evt.preventDefault();
    window.backend.save(new FormData(form), onCloseBtnClick, window.error.onLoadError);
  };

  window.setup = {
    onCloseBtnClick
  };
})();

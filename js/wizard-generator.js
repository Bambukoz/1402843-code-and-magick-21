'use strict';

(function () {
  const WIZARDS_AMOUNT = 4;
  const setup = document.querySelector(`.setup`);
  const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const similarList = setup.querySelector(`.setup-similar-list`);
  const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const getRandomWizards = (quantity) => {
    const wizards = [];
    for (let i = 0; i < quantity; i++) {
      wizards.push({
        name: `${window.util.getRandomNumber(NAMES)} ${window.util.getRandomNumber(SECOND_NAMES)}`,
        coatColor: window.util.getRandomNumber(window.colorizse.COAT_COLORS),
        eyesColor: window.util.getRandomNumber(window.colorize.EYES_COLORS)
      });
    }
    return wizards;
  };

  const getRenderWizard = (obj) => {
    const wizard = template.cloneNode(true);
    wizard.querySelector(`.setup-similar-label`).textContent = obj.name;
    wizard.querySelector(`.wizard-coat`).style.fill = obj.coatColor;
    wizard.querySelector(`.wizard-eyes`).style.fill = obj.eyesColor;
    return wizard;
  };

  const createFragment = (wizards) => {
    const fragment = document.createDocumentFragment();

    for (let wizard of wizards) {
      fragment.appendChild(getRenderWizard(wizard));
    }
    similarList.appendChild(fragment);
  };

  createFragment(getRandomWizards(WIZARDS_AMOUNT));
})();

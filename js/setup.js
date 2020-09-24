'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const setup = document.querySelector(`.setup`);
const wizards = [];

const removeHiddenClass = () => {
  setup.classList.remove(`hidden`);
};
removeHiddenClass();

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomWizards = (quantity) => {
  for (let i = 0; i < quantity; i++) {
    const randomWizard = {};
    randomWizard.name = `${NAMES[getRandomNumber(NAMES.length)]} ${SECOND_NAMES[getRandomNumber(SECOND_NAMES.length)]}`;
    randomWizard.coatColor = COAT_COLORS[getRandomNumber(COAT_COLORS.length)];
    randomWizard.eyesColor = EYE_COLORS[getRandomNumber(EYE_COLORS.length)];
    wizards.push(randomWizard);
  }
  return wizards;
};

const renderWizard = (arr) => {
  const template = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const wizard = template.cloneNode(true);
  wizard.querySelector(`.setup-similar-label`).textContent = arr.name;
  wizard.querySelector(`.wizard-coat`).style.fill = arr.coatColor;
  wizard.querySelector(`.wizard-eyes`).style.fill = arr.eyesColor;
  return wizard;
};

const getFragment = (quantity) => {
  getRandomWizards(quantity);
  const fragment = document.createDocumentFragment();
  const similarList = setup.querySelector(`.setup-similar-list`);
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
    similarList.appendChild(fragment);
  }
};
getFragment(4);
setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

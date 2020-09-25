'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_AMOUNT = 4;

const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomWizards = (quantity) => {
  const wizards = [];
  for (let i = 0; i < quantity; i++) {
    wizards.push(
        {
          name: `${getRandomNumber(NAMES)} ${getRandomNumber(SECOND_NAMES)}`,
          coatColor: getRandomNumber(COAT_COLORS),
          eyesColor: getRandomNumber(EYE_COLORS)
        }
    );
  }
  return wizards;
};

const renderWizard = (obj) => {
  const template = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const wizard = template.cloneNode(true);
  wizard.querySelector(`.setup-similar-label`).textContent = obj.name;
  wizard.querySelector(`.wizard-coat`).style.fill = obj.coatColor;
  wizard.querySelector(`.wizard-eyes`).style.fill = obj.eyesColor;
  return wizard;
};

const createFragment = (quantity) => {
  const fragment = document.createDocumentFragment();
  const similarList = setup.querySelector(`.setup-similar-list`);
  const wizardsArr = getRandomWizards(quantity);
  for (let i = 0; i < quantity; i++) {
    fragment.appendChild(renderWizard(wizardsArr[i]));
  }
  similarList.appendChild(fragment);
};

createFragment(WIZARDS_AMOUNT);
setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

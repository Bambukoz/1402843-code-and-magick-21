'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_AMOUNT = 4;

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const userName = setup.querySelector(`.setup-user-name`);
const wizardCoat = setup.querySelector(`.wizard-coat`);
const wizardEyes = setup.querySelector(`.wizard-eyes`);
const wizardFireball = setup.querySelector(`.setup-fireball-wrap`);
const inputCoatColor = setup.querySelector(`input[name='coat-color']`);
const inputEyesColor = setup.querySelector(`input[name='eyes-color']`);
const inputFireballColor = setup.querySelector(`input[name='fireball-color']`);

const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const setupSimilar = setup.querySelector(`.setup-similar`);
const similarList = setup.querySelector(`.setup-similar-list`);

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape` && document.activeElement !== userName) {
    evt.preventDefault();
    popupClose();
  }
};

const popupOpen = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
  wizardCoat.addEventListener(`click`, onCoatClick);
  wizardEyes.addEventListener(`click`, onEyesClick);
  wizardFireball.addEventListener(`click`, onFireballClick);
};

const popupClose = () => {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
  wizardCoat.removeEventListener(`click`, onCoatClick);
  wizardEyes.removeEventListener(`click`, onEyesClick);
  wizardFireball.removeEventListener(`click`, onFireballClick);
};

setupOpen.addEventListener(`click`, popupOpen);
setupClose.addEventListener(`click`, popupClose);

const onCoatClick = () => {
  const coatColorValue = getRandomNumber(COAT_COLORS);
  wizardCoat.style.fill = coatColorValue;
  inputCoatColor.value = coatColorValue;
};

const onEyesClick = () => {
  const eyesColorValue = getRandomNumber(EYES_COLORS);
  wizardEyes.style.fill = eyesColorValue;
  inputEyesColor.value = eyesColorValue;
};

const onFireballClick = () => {
  const fireballColorValue = getRandomNumber(FIREBALL_COLORS);
  wizardFireball.style.backgroundColor = fireballColorValue;
  inputFireballColor.value = fireballColorValue;
};

const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomWizards = (quantity) => {
  const wizards = [];
  for (let i = 0; i < quantity; i++) {
    wizards.push(
        {
          name: `${getRandomNumber(NAMES)} ${getRandomNumber(SECOND_NAMES)}`,
          coatColor: getRandomNumber(COAT_COLORS),
          eyesColor: getRandomNumber(EYES_COLORS)
        }
    );
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
setupSimilar.classList.remove(`hidden`);

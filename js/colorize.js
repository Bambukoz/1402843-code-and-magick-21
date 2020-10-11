'use strict';
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

(function () {
  const setup = document.querySelector(`.setup`);
  const wizardCoat = setup.querySelector(`.wizard-coat`);
  const wizardEyes = setup.querySelector(`.wizard-eyes`);
  const wizardFireball = setup.querySelector(`.setup-fireball-wrap`);
  const inputCoatColor = setup.querySelector(`input[name='coat-color']`);
  const inputEyesColor = setup.querySelector(`input[name='eyes-color']`);
  const inputFireballColor = setup.querySelector(`input[name='fireball-color']`);

  const onElementClick = (evt) => {

    if (evt.target.tagName.toLowerCase() === `div`) {
      const colorValue = window.util.getRandomNumber(FIREBALL_COLORS);
      wizardFireball.style.backgroundColor = colorValue;
      inputFireballColor.value = colorValue;
    } else if (evt.target.classList.contains(`wizard-coat`)) {
      const colorValue = window.util.getRandomNumber(COAT_COLORS);
      wizardCoat.style.fill = colorValue;
      inputCoatColor.value = colorValue;
    } else {
      const colorValue = window.util.getRandomNumber(EYES_COLORS);
      wizardEyes.style.fill = colorValue;
      inputEyesColor.value = colorValue;
    }
  };

  window.colorize = {
    COAT_COLORS,
    EYES_COLORS,
    onElementClick
  };
})();

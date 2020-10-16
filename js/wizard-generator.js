'use strict';

(function () {
  const WIZARDS_AMOUNT = 4;
  const setup = document.querySelector(`.setup`);
  const setupSimilar = setup.querySelector(`.setup-similar`);
  const similarList = setup.querySelector(`.setup-similar-list`);
  const template = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const getRenderWizard = (wizard) => {
    const wizardElement = template.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
    return wizardElement;
  };

  const shuffleWizards = (wizards) => wizards.sort(() => Math.random() - 0.5);

  const createFragment = (wizards) => {
    const fragment = document.createDocumentFragment();
    const minWizardsAmount = Math.min(wizards.length, WIZARDS_AMOUNT);
    shuffleWizards(wizards);
    for (let i = 0; i < minWizardsAmount; i++) {
      fragment.appendChild(getRenderWizard(wizards[i]));
    }
    similarList.appendChild(fragment);
  };

  const addWizardsToSimilarList = () => {
    window.backend.load(createFragment, window.error.onLoadError);
    setupSimilar.classList.remove(`hidden`);
  };

  window.wizardGenerator = {
    addWizardsToSimilarList
  };
})();
